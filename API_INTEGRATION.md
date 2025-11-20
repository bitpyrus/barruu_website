# Barruu Store API Integration

This document describes the integration between the Barruu website and the Barruu Store API backend.

## Overview

The website now includes:
- **Admin Dashboard**: For platform administrators to manage users, apps, and platform statistics
- **Developer Dashboard**: For developers to publish and manage their apps
- **Authentication System**: Login and registration for admins and developers

**Note**: Regular users do NOT need web access - they use the Flutter mobile app exclusively.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

The default configuration:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=/api
# or for direct calls (not recommended in production):
# NEXT_PUBLIC_API_URL=https://barruu-store-api-production.up.railway.app/api

# App Configuration
NEXT_PUBLIC_APP_NAME=Barruu Store
NEXT_PUBLIC_APP_URL=https://barruu.com
```

### 3. API Proxy Configuration

The API proxy is configured in two places for seamless development and production:

**For Local Development (`next.config.ts`):**
- Rewrites `/api/*` requests to the Railway backend
- Enables API calls to work with `npm run dev`

**For Production (`vercel.json`):**
- API proxy to forward `/api/*` requests to the backend
- CORS headers for secure communication

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see the application.

### Troubleshooting

If you encounter API connection issues, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for detailed solutions.

## Features

### Authentication Pages

- **Login**: `/login` - For admins and developers to sign in
- **Register**: `/register` - Create a new account
- **Unauthorized**: `/unauthorized` - Shown when accessing restricted pages

### Admin Dashboard (`/admin/*`)

Requires admin role to access:

- **Dashboard** (`/admin/dashboard`): View platform statistics
  - Total users, developers, apps
  - Pending app approvals
  - Total downloads
  
- **Apps Management** (`/admin/apps`): Review and manage apps
  - Approve/reject pending apps
  - Suspend/reactivate apps
  - Feature/unfeature apps
  
- **User Management** (`/admin/users`): Manage users
  - View all users
  - Verify developers
  - Delete users

### Developer Dashboard (`/developer/*`)

Requires developer role (or admin) to access:

- **Dashboard** (`/developer/dashboard`): View personal statistics
  - Total apps published
  - Approved/pending apps
  - Total downloads
  
- **Publish App** (`/developer/publish`): Upload a new app
  - App metadata (name, description, category, version)
  - Upload .bipy file
  
- **My Apps** (`/developer/my-apps`): Manage published apps
  - View all your apps
  - Delete apps
  - See app status
  
- **Media Library** (`/developer/media`): Manage media files
  - Upload images, videos, audio
  - View and delete media
  - Filter by type

## API Integration

### API Client (`src/lib/api.ts`)

- Axios instance configured with base URL
- Automatic token attachment to requests
- Automatic redirect to login on 401 errors

### Authentication Service (`src/lib/auth.ts`)

Methods:
- `register()` - Register new user
- `login()` - Login user
- `logout()` - Logout user
- `getCurrentUser()` - Get current user info
- `updateProfile()` - Update user profile
- `upgradeToDeveloper()` - Upgrade to developer account

Helper methods:
- `isAuthenticated()` - Check if user is logged in
- `isAdmin()` - Check if user is admin
- `isDeveloper()` - Check if user is developer

### Admin Service (`src/lib/admin.ts`)

Methods for admin operations:
- `getStats()` - Get platform statistics
- `getUsers()` - Get all users
- `verifyDeveloper()` - Verify a developer
- `deleteUser()` - Delete a user
- `getAllApps()` - Get all apps
- `updateAppStatus()` - Update app status
- `toggleFeatureApp()` - Feature/unfeature app

### Developer Service (`src/lib/developer.ts`)

Methods for developer operations:
- `getMyApps()` - Get my published apps
- `publishApp()` - Publish a new app
- `updateApp()` - Update an app
- `deleteApp()` - Delete an app
- `uploadMedia()` - Upload media file
- `getMyMedia()` - Get my media files
- `deleteMedia()` - Delete media file

## Protected Routes

The `ProtectedRoute` component (`src/components/ProtectedRoute.tsx`) ensures that:
- Users are authenticated before accessing protected pages
- Users have the required role (admin/developer)
- Automatic redirect to login or unauthorized page

Usage:
```tsx
<ProtectedRoute requireAdmin>
  {/* Admin-only content */}
</ProtectedRoute>

<ProtectedRoute requireDeveloper>
  {/* Developer-only content */}
</ProtectedRoute>
```

## Navigation

The Navbar component is updated to show:
- **For non-authenticated users**: Login link + Get on Google Play button
- **For developers**: Developer Dashboard link + Logout button
- **For admins**: Admin Dashboard + Developer Dashboard links + Logout button

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL=/api`
   - `NEXT_PUBLIC_APP_NAME=Barruu Store`
   - `NEXT_PUBLIC_APP_URL=https://barruu.com`
3. Deploy!

The `vercel.json` configuration will automatically set up the API proxy and CORS headers.

## Testing

To test the integration locally:

1. Ensure the backend API is running at `https://barruu-store-api-production.up.railway.app`
2. Start the development server: `npm run dev`
3. Navigate to `/login` and log in with admin or developer credentials
4. Test the various dashboard features

## Security

- All API requests include JWT token in Authorization header
- Protected routes check authentication and authorization
- CORS is properly configured for production domain
- Sensitive data stored in environment variables

## Troubleshooting

### CORS Errors
- Verify `vercel.json` is properly configured
- Check that the API backend allows requests from your domain
- Ensure environment variables are set correctly

### Authentication Issues
- Check that tokens are being stored in localStorage
- Verify API endpoint is accessible
- Check browser console for error messages

### Build Errors
- Ensure all environment variables are set
- Run `npm install` to install dependencies
- Check TypeScript errors with `npx tsc --noEmit`

## Next Steps

1. Add tests for authentication flow
2. Implement app update functionality
3. Add analytics dashboard
4. Implement real-time notifications
5. Add email verification for new users
