import api from './api';
import type { App } from './admin';

interface Media {
  _id: string;
  name: string;
  description?: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  size: number;
  uploader: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export const developerService = {
  // Get my published apps
  async getMyApps(): Promise<ApiResponse<App[]>> {
    const response = await api.get<ApiResponse<App[]>>('/apps/developer/my-apps');
    return response.data;
  },

  // Publish new app
  async publishApp(formData: FormData): Promise<ApiResponse<App>> {
    const response = await api.post<ApiResponse<App>>('/apps', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update app
  async updateApp(appId: string, formData: FormData): Promise<ApiResponse<App>> {
    const response = await api.put<ApiResponse<App>>(`/apps/${appId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete app
  async deleteApp(appId: string): Promise<ApiResponse<null>> {
    const response = await api.delete<ApiResponse<null>>(`/apps/${appId}`);
    return response.data;
  },

  // Upload media
  async uploadMedia(formData: FormData): Promise<ApiResponse<Media>> {
    const response = await api.post<ApiResponse<Media>>('/media/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get my media
  async getMyMedia(type?: string): Promise<ApiResponse<Media[]>> {
    const params = type ? `?type=${type}` : '';
    const response = await api.get<ApiResponse<Media[]>>(`/media/my-media${params}`);
    return response.data;
  },

  // Update media metadata
  async updateMedia(mediaId: string, metadata: Partial<Media>): Promise<ApiResponse<Media>> {
    const response = await api.put<ApiResponse<Media>>(`/media/${mediaId}`, metadata);
    return response.data;
  },

  // Delete media
  async deleteMedia(mediaId: string): Promise<ApiResponse<null>> {
    const response = await api.delete<ApiResponse<null>>(`/media/${mediaId}`);
    return response.data;
  },
};

export type { Media };
