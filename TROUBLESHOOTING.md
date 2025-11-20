# Troubleshooting Guide

## Issue 1: API 404 Errors in Local Development

### Problem
When running `npm run dev` locally, API calls to `/api/auth/login` and `/api/auth/register` return 404 errors:
```
POST /api/auth/login 404 in 887ms
POST /api/auth/register 404 in 278ms
```

### Root Cause
The `vercel.json` configuration only applies when deployed to Vercel. In local development with `next dev`, you need to configure rewrites in `next.config.ts`.

### Solution ✅
The `next.config.ts` file has been updated with the `rewrites()` function to proxy `/api/*` requests to the Railway backend:

```typescript
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://barruu-store-api-production.up.railway.app/api/:path*',
    },
  ];
}
```

This will make API calls work in both local development and production (Vercel).

### Testing
1. Restart your development server: `npm run dev`
2. Try logging in or registering again
3. API calls should now be proxied to Railway backend

---

## Issue 2: Railway Backend 502 Errors

### Problem
Railway backend shows 502 errors with "connection dial timeout":
```json
{
  "httpStatus": 502,
  "responseDetails": "Retried single replica",
  "upstreamErrors": "[{\"error\":\"connection dial timeout\"}]"
}
```

### Possible Causes
1. **Backend service is not running** - The Railway deployment might be stopped or crashed
2. **Cold start delay** - If the backend hasn't received requests recently, it might take 15+ seconds to start
3. **Resource limits** - The backend might be out of memory or hitting resource limits
4. **Network configuration** - Internal Railway network routing issues

### Solutions

#### Check Backend Status
1. Go to Railway dashboard: https://railway.app
2. Check if the `barruu-store-api-production` service is running
3. Look at the logs for any errors
4. Verify the service is deployed and not crashed

#### If Backend is Sleeping/Cold Start
Some free tier deployments sleep after inactivity:
1. Make a direct request to wake it up: `curl https://barruu-store-api-production.up.railway.app/api/health`
2. Wait 30 seconds for it to start
3. Try your request again

#### If Backend is Down
1. Check Railway logs for crash/error messages
2. Restart the service in Railway dashboard
3. Verify environment variables are set correctly
4. Check if database connection is working

#### Alternative: Use Direct API Calls (Temporary)
If Railway backend is having issues, you can temporarily bypass the proxy:

1. Update `src/lib/api.ts`:
```typescript
const API_URL = 'https://barruu-store-api-production.up.railway.app/api';
```

2. This will make direct calls to Railway (may have CORS issues in development)

---

## Issue 3: Multiple Lockfiles Warning

### Problem
Next.js warns about detecting multiple lockfiles:
```
⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles and selected the directory of /Users/abdi/package-lock.json as the root directory.
```

### Root Cause
You have a `package-lock.json` in your home directory (`/Users/abdi/`) and another in the project directory. This confuses Next.js Turbopack.

### Solution ✅
The `next.config.ts` has been updated with the `turbopack.root` configuration:

```typescript
turbopack: {
  root: __dirname,
}
```

This explicitly tells Next.js to use the current directory as the workspace root.

### Additional Step (Optional)
If you want to completely silence the warning, you can also:
1. Delete the lockfile in your home directory if it's not needed: `rm ~/package-lock.json`
2. Or keep it if it's for another project, the config should handle it

---

## Quick Checklist

- [x] Added API rewrites to `next.config.ts` for local development
- [x] Added turbopack root configuration to fix lockfile warning
- [ ] Verify Railway backend is running and healthy
- [ ] Test API calls in local development after restarting `npm run dev`
- [ ] Check Railway logs if 502 errors persist

## Testing the Fix

1. **Restart development server:**
   ```bash
   npm run dev
   ```

2. **Test login/register:**
   - Navigate to http://localhost:3000/login
   - Try to login or register
   - Check browser console and terminal for errors

3. **Expected behavior:**
   - No more 404 errors for `/api/*` routes
   - If backend is healthy, authentication should work
   - If backend is down/slow, you'll see connection timeouts (not 404s)

## Next Steps

If you continue to see 502 errors from Railway:
1. Check Railway dashboard for service health
2. Review Railway deployment logs
3. Verify the backend service is configured correctly
4. Consider increasing backend resources if hitting limits
5. Check if backend requires environment variables that might be missing

## Environment Variables

Make sure you have a `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

The default configuration uses the API proxy (`/api`), which should work with the updated `next.config.ts`.
