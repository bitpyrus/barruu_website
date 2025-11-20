'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireDeveloper?: boolean;
}

export default function ProtectedRoute({ 
  children, 
  requireAdmin = false, 
  requireDeveloper = false 
}: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    };

    checkAuth();
  }, [router, requireAdmin, requireDeveloper]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
