# Web Integration Guide - Barruu Store

Complete guide for integrating the Barruu Store API with your web application at **barruu.com** (Vercel).

## Table of Contents
1. [Overview](#overview)
2. [Setup](#setup)
3. [Authentication](#authentication)
4. [Admin Dashboard](#admin-dashboard)
5. [Developer Dashboard](#developer-dashboard)
6. [Code Examples](#code-examples)
7. [Deployment](#deployment)

## Overview

The web interface at **barruu.com** provides:
- **Admin Dashboard** - For platform administrators to manage the entire system
- **Developer Dashboard** - For developers to publish and manage their apps

**Note:** Regular users do NOT need web access - they use the Flutter mobile app exclusively.

## Setup

### 1. Configure API Proxy (Recommended)

In your Vercel project, create/update `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://barruu-store-api-production.up.railway.app/api/:path*"
    }
  ],
  "headers": [
    {
      "source": "/api/:path*",
      "headers": [
        {
          "key": "Access-Control-Allow-Credentials",
          "value": "true"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "https://barruu.com"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
        }
      ]
    }
  ]
}
```

### 2. Environment Variables

Create `.env.local` in your web project:

```env
# API Configuration
NEXT_PUBLIC_API_URL=/api
# or for direct calls: https://barruu-store-api-production.up.railway.app/api

# App Configuration
NEXT_PUBLIC_APP_NAME=Barruu Store
NEXT_PUBLIC_APP_URL=https://barruu.com
```

### 3. Install Dependencies

For React/Next.js project:

```bash
npm install axios
# or
npm install fetch
```

## Authentication

### API Client Setup

Create `lib/api.js`:

```javascript
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('barruu_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('barruu_token');
      localStorage.removeItem('barruu_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### Authentication Functions

Create `lib/auth.js`:

```javascript
import api from './api';

export const authService = {
  // Register new user
  async register(userData) {
    const response = await api.post('/auth/register', userData);
    if (response.data.success) {
      this.setAuth(response.data.token, response.data.user);
    }
    return response.data;
  },

  // Login
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.success) {
      this.setAuth(response.data.token, response.data.user);
    }
    return response.data;
  },

  // Logout
  logout() {
    localStorage.removeItem('barruu_token');
    localStorage.removeItem('barruu_user');
    window.location.href = '/login';
  },

  // Get current user
  async getCurrentUser() {
    try {
      const response = await api.get('/auth/me');
      if (response.data.success) {
        this.setUser(response.data.user);
        return response.data.user;
      }
    } catch (error) {
      this.logout();
      return null;
    }
  },

  // Update profile
  async updateProfile(profileData) {
    const response = await api.put('/auth/profile', profileData);
    if (response.data.success) {
      this.setUser(response.data.user);
    }
    return response.data;
  },

  // Upgrade to developer
  async upgradeToDeveloper(developerData) {
    const response = await api.post('/auth/upgrade-to-developer', developerData);
    if (response.data.success) {
      this.setUser(response.data.user);
    }
    return response.data;
  },

  // Helper functions
  setAuth(token, user) {
    localStorage.setItem('barruu_token', token);
    localStorage.setItem('barruu_user', JSON.stringify(user));
  },

  setUser(user) {
    localStorage.setItem('barruu_user', JSON.stringify(user));
  },

  getToken() {
    return localStorage.getItem('barruu_token');
  },

  getUser() {
    const user = localStorage.getItem('barruu_user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  isAdmin() {
    const user = this.getUser();
    return user && user.role === 'admin';
  },

  isDeveloper() {
    const user = this.getUser();
    return user && (user.role === 'developer' || user.role === 'admin');
  },
};
```

### Protected Route Component

Create `components/ProtectedRoute.js`:

```javascript
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../lib/auth';

export default function ProtectedRoute({ children, requireAdmin = false, requireDeveloper = false }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isAuthenticated()) {
        router.push('/login');
        return;
      }

      const user = await authService.getCurrentUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      if (requireAdmin && !authService.isAdmin()) {
        router.push('/unauthorized');
        return;
      }

      if (requireDeveloper && !authService.isDeveloper()) {
        router.push('/unauthorized');
        return;
      }

      setIsAuthorized(true);
    };

    checkAuth();
  }, [router, requireAdmin, requireDeveloper]);

  if (!isAuthorized) {
    return <div>Loading...</div>;
  }

  return children;
}
```

## Admin Dashboard

### Admin Stats Page

```javascript
// pages/admin/dashboard.js
import { useState, useEffect } from 'react';
import api from '../../lib/api';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get('/admin/stats');
      setStats(response.data.stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <ProtectedRoute requireAdmin>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">{stats.totalUsers}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Developers</h3>
            <p className="stat-number">{stats.totalDevelopers}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Apps</h3>
            <p className="stat-number">{stats.totalApps}</p>
          </div>
          
          <div className="stat-card">
            <h3>Pending Apps</h3>
            <p className="stat-number">{stats.pendingApps}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Downloads</h3>
            <p className="stat-number">{stats.totalDownloads}</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
```

### User Management

```javascript
// lib/admin.js
import api from './api';

export const adminService = {
  // Get all users
  async getUsers(params = {}) {
    const { role, search, page = 1, limit = 20 } = params;
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...(role && { role }),
      ...(search && { search }),
    });
    
    const response = await api.get(`/admin/users?${queryParams}`);
    return response.data;
  },

  // Verify developer
  async verifyDeveloper(userId) {
    const response = await api.put(`/admin/users/${userId}/verify`);
    return response.data;
  },

  // Delete user
  async deleteUser(userId) {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data;
  },

  // Get all apps (including pending)
  async getAllApps(params = {}) {
    const { status, search, page = 1, limit = 20 } = params;
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...(status && { status }),
      ...(search && { search }),
    });
    
    const response = await api.get(`/admin/apps?${queryParams}`);
    return response.data;
  },

  // Update app status
  async updateAppStatus(appId, status) {
    const response = await api.put(`/admin/apps/${appId}/status`, { status });
    return response.data;
  },

  // Feature/unfeature app
  async toggleFeatureApp(appId) {
    const response = await api.put(`/admin/apps/${appId}/feature`);
    return response.data;
  },

  // Get recent activity
  async getRecentActivity(limit = 20) {
    const response = await api.get(`/admin/activity?limit=${limit}`);
    return response.data;
  },
};
```

### App Approval Interface

```javascript
// pages/admin/apps.js
import { useState, useEffect } from 'react';
import { adminService } from '../../lib/admin';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminApps() {
  const [apps, setApps] = useState([]);
  const [filter, setFilter] = useState('pending');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApps();
  }, [filter]);

  const fetchApps = async () => {
    setLoading(true);
    try {
      const data = await adminService.getAllApps({ status: filter });
      setApps(data.apps);
    } catch (error) {
      console.error('Error fetching apps:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appId, newStatus) => {
    try {
      await adminService.updateAppStatus(appId, newStatus);
      fetchApps(); // Refresh list
      alert(`App ${newStatus} successfully!`);
    } catch (error) {
      alert('Error updating app status');
    }
  };

  const handleToggleFeature = async (appId) => {
    try {
      await adminService.toggleFeatureApp(appId);
      fetchApps();
      alert('App feature status updated!');
    } catch (error) {
      alert('Error updating feature status');
    }
  };

  return (
    <ProtectedRoute requireAdmin>
      <div className="admin-apps">
        <h1>App Management</h1>
        
        <div className="filters">
          <button onClick={() => setFilter('pending')}>Pending</button>
          <button onClick={() => setFilter('approved')}>Approved</button>
          <button onClick={() => setFilter('rejected')}>Rejected</button>
          <button onClick={() => setFilter('suspended')}>Suspended</button>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="apps-list">
            {apps.map((app) => (
              <div key={app._id} className="app-card">
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <p>Developer: {app.developer.username}</p>
                <p>Version: {app.version}</p>
                <p>Status: {app.status}</p>
                
                <div className="actions">
                  {app.status === 'pending' && (
                    <>
                      <button onClick={() => handleStatusChange(app._id, 'approved')}>
                        Approve
                      </button>
                      <button onClick={() => handleStatusChange(app._id, 'rejected')}>
                        Reject
                      </button>
                    </>
                  )}
                  
                  {app.status === 'approved' && (
                    <>
                      <button onClick={() => handleStatusChange(app._id, 'suspended')}>
                        Suspend
                      </button>
                      <button onClick={() => handleToggleFeature(app._id)}>
                        {app.featured ? 'Unfeature' : 'Feature'}
                      </button>
                    </>
                  )}
                  
                  {app.status === 'suspended' && (
                    <button onClick={() => handleStatusChange(app._id, 'approved')}>
                      Reactivate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
```

## Developer Dashboard

### Developer Service

```javascript
// lib/developer.js
import api from './api';

export const developerService = {
  // Get my published apps
  async getMyApps() {
    const response = await api.get('/apps/developer/my-apps');
    return response.data;
  },

  // Publish new app
  async publishApp(formData) {
    const response = await api.post('/apps', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update app
  async updateApp(appId, formData) {
    const response = await api.put(`/apps/${appId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete app
  async deleteApp(appId) {
    const response = await api.delete(`/apps/${appId}`);
    return response.data;
  },

  // Upload media
  async uploadMedia(formData) {
    const response = await api.post('/media/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get my media
  async getMyMedia(type = null) {
    const params = type ? `?type=${type}` : '';
    const response = await api.get(`/media/my-media${params}`);
    return response.data;
  },

  // Update media metadata
  async updateMedia(mediaId, metadata) {
    const response = await api.put(`/media/${mediaId}`, metadata);
    return response.data;
  },

  // Delete media
  async deleteMedia(mediaId) {
    const response = await api.delete(`/media/${mediaId}`);
    return response.data;
  },
};
```

### Publish App Form

```javascript
// pages/developer/publish.js
import { useState } from 'react';
import { developerService } from '../../lib/developer';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function PublishApp() {
  const [formData, setFormData] = useState({
    name: '',
    packageId: '',
    description: '',
    shortDescription: '',
    version: '1.0.0',
    category: 'productivity',
  });
  const [appFile, setAppFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const categories = [
    'productivity', 'education', 'entertainment', 'business',
    'lifestyle', 'tools', 'creative', 'social', 'games', 'other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!appFile) {
      alert('Please select an app file');
      return;
    }

    setUploading(true);

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });
    data.append('appFile', appFile);

    try {
      const result = await developerService.publishApp(data);
      alert('App published successfully! Waiting for admin approval.');
      // Reset form or redirect
      window.location.href = '/developer/my-apps';
    } catch (error) {
      alert('Error publishing app: ' + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  return (
    <ProtectedRoute requireDeveloper>
      <div className="publish-app">
        <h1>Publish New App</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>App Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Package ID * (e.g., com.example.myapp)</label>
            <input
              type="text"
              value={formData.packageId}
              onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Short Description *</label>
            <input
              type="text"
              maxLength={200}
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Full Description *</label>
            <textarea
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Version *</label>
            <input
              type="text"
              value={formData.version}
              onChange={(e) => setFormData({ ...formData, version: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>App File (.bipy) *</label>
            <input
              type="file"
              accept=".bipy"
              onChange={(e) => setAppFile(e.target.files[0])}
              required
            />
            {appFile && <p>Selected: {appFile.name} ({(appFile.size / 1024 / 1024).toFixed(2)} MB)</p>}
          </div>

          <button type="submit" disabled={uploading}>
            {uploading ? 'Publishing...' : 'Publish App'}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
```

### Media Library

```javascript
// pages/developer/media.js
import { useState, useEffect } from 'react';
import { developerService } from '../../lib/developer';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function MediaLibrary() {
  const [media, setMedia] = useState([]);
  const [filter, setFilter] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadData, setUploadData] = useState({ name: '', description: '', type: 'image' });

  useEffect(() => {
    fetchMedia();
  }, [filter]);

  const fetchMedia = async () => {
    try {
      const data = await developerService.getMyMedia(filter);
      setMedia(data.media);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!uploadFile) {
      alert('Please select a file');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('name', uploadData.name);
    formData.append('description', uploadData.description);
    formData.append('type', uploadData.type);

    try {
      await developerService.uploadMedia(formData);
      alert('Media uploaded successfully!');
      setUploadFile(null);
      setUploadData({ name: '', description: '', type: 'image' });
      fetchMedia();
    } catch (error) {
      alert('Error uploading media: ' + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (mediaId) => {
    if (!confirm('Are you sure you want to delete this media?')) return;

    try {
      await developerService.deleteMedia(mediaId);
      alert('Media deleted successfully!');
      fetchMedia();
    } catch (error) {
      alert('Error deleting media');
    }
  };

  return (
    <ProtectedRoute requireDeveloper>
      <div className="media-library">
        <h1>Media Library</h1>
        
        {/* Upload Form */}
        <div className="upload-section">
          <h2>Upload Media</h2>
          <form onSubmit={handleUpload}>
            <div className="form-group">
              <label>Media Type</label>
              <select
                value={uploadData.type}
                onChange={(e) => setUploadData({ ...uploadData, type: e.target.value })}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
              </select>
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={uploadData.name}
                onChange={(e) => setUploadData({ ...uploadData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Description (optional)</label>
              <input
                type="text"
                value={uploadData.description}
                onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>File</label>
              <input
                type="file"
                onChange={(e) => setUploadFile(e.target.files[0])}
                required
              />
            </div>

            <button type="submit" disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
        </div>

        {/* Media Grid */}
        <div className="media-filter">
          <button onClick={() => setFilter(null)}>All</button>
          <button onClick={() => setFilter('image')}>Images</button>
          <button onClick={() => setFilter('video')}>Videos</button>
          <button onClick={() => setFilter('audio')}>Audio</button>
        </div>

        <div className="media-grid">
          {media.map((item) => (
            <div key={item._id} className="media-item">
              {item.type === 'image' && (
                <img src={item.url} alt={item.name} />
              )}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Size: {(item.size / 1024 / 1024).toFixed(2)} MB</p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
```

## Deployment

### Vercel Configuration

1. **Connect GitHub Repository** to Vercel
2. **Configure Environment Variables** in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL=/api` (or direct URL)
   
3. **Deploy** - Vercel will automatically build and deploy

### Testing Integration

```bash
# Test API proxy
curl https://barruu.com/api/health

# Expected response:
# {"success":true,"message":"Barruu Store API is running","timestamp":"..."}
```

### CORS Troubleshooting

If you encounter CORS errors:

1. Verify API CORS settings include your domain
2. Check that Vercel rewrites are configured correctly
3. Ensure Authorization header is properly set
4. Check browser console for specific CORS errors

## Best Practices

1. **Always validate user role** before rendering admin/developer UI
2. **Use environment variables** for API URLs
3. **Implement proper error handling** for all API calls
4. **Show loading states** during API requests
5. **Cache user data** to reduce API calls
6. **Implement token refresh** before expiration
7. **Log errors** for debugging
8. **Use HTTPS** in production always
9. **Validate file uploads** on client side before sending
10. **Implement rate limit handling** with retry logic

## Example Pages Structure

```
pages/
├── index.js              # Homepage (public)
├── login.js              # Login page
├── register.js           # Registration page
├── admin/
│   ├── dashboard.js      # Admin stats
│   ├── users.js          # User management
│   ├── apps.js           # App approval
│   └── activity.js       # Recent activity
└── developer/
    ├── dashboard.js      # Developer stats
    ├── publish.js        # Publish new app
    ├── my-apps.js        # My published apps
    └── media.js          # Media library
```

## Support

For web integration help:
- GitHub Issues: https://github.com/bitpyrus/barruu-store/issues
- Email: support@barruu.dev

---

Built with ❤️ for the Barruu ecosystem
