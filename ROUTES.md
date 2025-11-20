# Barruu Store - Route Map

## Public Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Homepage | Public |
| `/privacy` | Privacy Policy | Public |
| `/terms` | Terms of Service | Public |

## Authentication Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/login` | Login page | Public (redirects if authenticated) |
| `/register` | Registration page | Public (redirects if authenticated) |
| `/unauthorized` | Access denied page | Public |

## Admin Routes

All admin routes require **admin role** and redirect to `/unauthorized` if user is not admin.

| Route | Description | Features |
|-------|-------------|----------|
| `/admin/dashboard` | Admin Dashboard | - View total users, developers, apps<br>- See pending apps count<br>- View total downloads<br>- Quick action links |
| `/admin/apps` | App Management | - Filter by status (pending, approved, rejected, suspended)<br>- Approve/reject pending apps<br>- Suspend/reactivate apps<br>- Feature/unfeature apps<br>- View app details |
| `/admin/users` | User Management | - View all users<br>- Verify developer accounts<br>- Delete users<br>- See user roles and status |

## Developer Routes

All developer routes require **developer or admin role** and redirect to `/unauthorized` if user doesn't have permission.

| Route | Description | Features |
|-------|-------------|----------|
| `/developer/dashboard` | Developer Dashboard | - View personal app statistics<br>- See total/approved/pending apps<br>- View total downloads<br>- Quick action buttons |
| `/developer/publish` | Publish New App | - Upload app name, package ID<br>- Add short & full description<br>- Set version and category<br>- Upload .bipy file<br>- Form validation |
| `/developer/my-apps` | My Apps | - View all published apps<br>- See app status (pending, approved, etc.)<br>- View downloads per app<br>- Delete apps |
| `/developer/media` | Media Library | - Upload images, videos, audio<br>- Filter by media type<br>- View file sizes<br>- Delete media files<br>- Add metadata (name, description) |

## Navigation Flow

```
Homepage (/)
├── Login (/login)
│   ├── Admin Login → /admin/dashboard
│   ├── Developer Login → /developer/dashboard
│   └── Regular User Login → /
└── Register (/register) → Automatic login → /

Admin Dashboard (/admin/dashboard)
├── Apps Management (/admin/apps)
│   ├── Review Pending Apps
│   ├── Manage Approved Apps
│   └── View All App Statuses
└── User Management (/admin/users)
    ├── Verify Developers
    └── Delete Users

Developer Dashboard (/developer/dashboard)
├── Publish New App (/developer/publish)
├── My Apps (/developer/my-apps)
│   └── Manage & Delete Apps
└── Media Library (/developer/media)
    ├── Upload Media
    └── Manage Media Files
```

## Role-Based Access

| Role | Access To | Description |
|------|-----------|-------------|
| Public | `/`, `/privacy`, `/terms`, `/login`, `/register` | Anyone can access |
| User | All public routes | Regular authenticated users |
| Developer | All user routes + `/developer/*` | Can publish and manage apps |
| Admin | All routes | Full platform access |

## API Endpoints Used

### Authentication (`/api/auth/*`)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/upgrade-to-developer` - Upgrade to developer

### Admin (`/api/admin/*`)
- `GET /api/admin/stats` - Get platform statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/verify` - Verify developer
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/apps` - Get all apps
- `PUT /api/admin/apps/:id/status` - Update app status
- `PUT /api/admin/apps/:id/feature` - Toggle feature status
- `GET /api/admin/activity` - Get activity log

### Developer (`/api/apps/*`, `/api/media/*`)
- `GET /api/apps/developer/my-apps` - Get my apps
- `POST /api/apps` - Publish new app
- `PUT /api/apps/:id` - Update app
- `DELETE /api/apps/:id` - Delete app
- `POST /api/media/upload` - Upload media
- `GET /api/media/my-media` - Get my media
- `PUT /api/media/:id` - Update media
- `DELETE /api/media/:id` - Delete media

## Protected Route Component

All protected routes use the `<ProtectedRoute>` component with props:
- `requireAdmin={true}` - Requires admin role
- `requireDeveloper={true}` - Requires developer or admin role

Example:
```tsx
<ProtectedRoute requireAdmin>
  <AdminDashboard />
</ProtectedRoute>
```

## Environment Variables

Required for deployment:
- `NEXT_PUBLIC_API_URL` - API endpoint (e.g., `/api` for proxy)
- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_URL` - Production URL
