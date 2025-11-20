'use client';

import { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import { developerService, type Media } from '@/lib/developer';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function MediaLibrary() {
  const [media, setMedia] = useState<Media[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadData, setUploadData] = useState({ 
    name: '', 
    description: '', 
    type: 'image' as 'image' | 'video' | 'audio'
  });

  useEffect(() => {
    fetchMedia();
  }, [filter]);

  const fetchMedia = async () => {
    try {
      const result = await developerService.getMyMedia(filter || undefined);
      setMedia(result.data || []);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  const handleUpload = async (e: FormEvent) => {
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
    } catch (err) {
      const error = err as { response?: { data?: { error?: string }; message?: string } };
      alert('Error uploading media: ' + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (mediaId: string) => {
    if (!confirm('Are you sure you want to delete this media?')) return;

    try {
      await developerService.deleteMedia(mediaId);
      alert('Media deleted successfully!');
      fetchMedia();
    } catch (err) {
      console.error('Error deleting media:', err);
      alert('Error deleting media');
    }
  };

  return (
    <ProtectedRoute requireDeveloper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Media Library</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Media</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Media Type</label>
                <select
                  value={uploadData.type}
                  onChange={(e) => setUploadData({ ...uploadData, type: e.target.value as 'image' | 'video' | 'audio' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={uploadData.name}
                  onChange={(e) => setUploadData({ ...uploadData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  value={uploadData.description}
                  onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">File</label>
              <input
                type="file"
                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
        </div>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-md ${!filter ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('image')}
            className={`px-4 py-2 rounded-md ${filter === 'image' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Images
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`px-4 py-2 rounded-md ${filter === 'video' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Videos
          </button>
          <button
            onClick={() => setFilter('audio')}
            className={`px-4 py-2 rounded-md ${filter === 'audio' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Audio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {media.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {item.type === 'image' && (
                <Image src={item.url} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                <p className="text-xs text-gray-500 mt-2">Size: {(item.size / 1024 / 1024).toFixed(2)} MB</p>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-3 w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {media.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            No media files found. Upload some media to get started.
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
