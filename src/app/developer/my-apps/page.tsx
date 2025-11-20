'use client';

import { useState, useEffect } from 'react';
import { developerService, type App } from '@/lib/admin';
import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';

export default function MyApps() {
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

  const handleDelete = async (appId: string) => {
    if (!confirm('Are you sure you want to delete this app?')) return;
    
    try {
      await developerService.deleteApp(appId);
      fetchApps();
      alert('App deleted successfully!');
    } catch (err) {
      console.error('Error deleting app:', err);
      alert('Error deleting app');
    }
  };

  return (
    <ProtectedRoute requireDeveloper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Apps</h1>
          <Link
            href="/developer/publish"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Publish New App
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        ) : apps.length > 0 ? (
          <div className="grid gap-6">
            {apps.map((app) => (
              <div key={app._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{app.name}</h3>
                    <p className="text-gray-600 mt-2">{app.shortDescription}</p>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Version:</span> {app.version}
                      </div>
                      <div>
                        <span className="font-semibold">Category:</span> {app.category}
                      </div>
                      <div>
                        <span className="font-semibold">Downloads:</span> {app.downloads || 0}
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          app.status === 'approved' ? 'bg-green-100 text-green-800' :
                          app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">You haven&apos;t published any apps yet.</p>
            <Link
              href="/developer/publish"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Publish Your First App
            </Link>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
