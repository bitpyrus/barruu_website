'use client';

import { useState, useEffect } from 'react';
import { adminService, type App } from '@/lib/admin';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminApps() {
  const [apps, setApps] = useState<App[]>([]);
  const [filter, setFilter] = useState('pending');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApps();
  }, [filter]);

  const fetchApps = async () => {
    setLoading(true);
    try {
      const data = await adminService.getAllApps({ status: filter });
      setApps(data.data);
    } catch (error) {
      console.error('Error fetching apps:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appId: string, newStatus: string) => {
    try {
      await adminService.updateAppStatus(appId, newStatus);
      fetchApps();
      alert(`App ${newStatus} successfully!`);
    } catch (err) {
      console.error('Error updating app status:', err);
      alert('Error updating app status');
    }
  };

  const handleToggleFeature = async (appId: string) => {
    try {
      await adminService.toggleFeatureApp(appId);
      fetchApps();
      alert('App feature status updated!');
    } catch (err) {
      console.error('Error updating feature status:', err);
      alert('Error updating feature status');
    }
  };

  return (
    <ProtectedRoute requireAdmin>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">App Management</h1>
        
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-md ${filter === 'pending' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-4 py-2 rounded-md ${filter === 'approved' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter('rejected')}
            className={`px-4 py-2 rounded-md ${filter === 'rejected' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Rejected
          </button>
          <button
            onClick={() => setFilter('suspended')}
            className={`px-4 py-2 rounded-md ${filter === 'suspended' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Suspended
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {apps.map((app) => (
              <div key={app._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">{app.name}</h3>
                <p className="text-gray-600 mt-2">{app.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <p><span className="font-semibold">Developer:</span> {app.developer.username}</p>
                  <p><span className="font-semibold">Version:</span> {app.version}</p>
                  <p><span className="font-semibold">Category:</span> {app.category}</p>
                  <p><span className="font-semibold">Status:</span> {app.status}</p>
                </div>
                
                <div className="mt-4 flex gap-2">
                  {app.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(app._id, 'approved')}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(app._id, 'rejected')}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  
                  {app.status === 'approved' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(app._id, 'suspended')}
                        className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                      >
                        Suspend
                      </button>
                      <button
                        onClick={() => handleToggleFeature(app._id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        {app.featured ? 'Unfeature' : 'Feature'}
                      </button>
                    </>
                  )}
                  
                  {app.status === 'suspended' && (
                    <button
                      onClick={() => handleStatusChange(app._id, 'approved')}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Reactivate
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {apps.length === 0 && (
              <div className="text-center py-12 text-gray-600">
                No apps found with status: {filter}
              </div>
            )}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
