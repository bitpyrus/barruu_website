'use client';

import { useState, useEffect } from 'react';
import { developerService } from '@/lib/developer';
import type { App } from '@/lib/admin';
import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';

export default function DeveloperDashboard() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      const result = await developerService.getMyApps();
      setApps(result.data || []);
    } catch (error) {
      console.error('Error fetching apps:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = {
    totalApps: apps.length,
    approvedApps: apps.filter(app => app.status === 'approved').length,
    pendingApps: apps.filter(app => app.status === 'pending').length,
    totalDownloads: apps.reduce((sum, app) => sum + (app.downloads || 0), 0),
  };

  return (
    <ProtectedRoute requireDeveloper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Developer Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your published apps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Apps</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalApps}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Approved</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.approvedApps}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.pendingApps}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Downloads</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalDownloads}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/developer/publish"
                className="block w-full px-4 py-3 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors text-center"
              >
                Publish New App
              </Link>
              <Link
                href="/developer/my-apps"
                className="block w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors text-center"
              >
                Manage My Apps
              </Link>
              <Link
                href="/developer/media"
                className="block w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-md hover:bg-purple-100 transition-colors text-center"
              >
                Media Library
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Apps</h3>
            {loading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              </div>
            ) : apps.length > 0 ? (
              <div className="space-y-2">
                {apps.slice(0, 5).map((app) => (
                  <div key={app._id} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-900">{app.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      app.status === 'approved' ? 'bg-green-100 text-green-800' :
                      app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No apps yet. Start by publishing your first app!</p>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
