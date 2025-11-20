import api from './api';
import type { User } from './auth';

interface App {
  _id: string;
  name: string;
  packageId: string;
  description: string;
  shortDescription: string;
  version: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  featured: boolean;
  developer: User;
  downloads: number;
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  totalUsers: number;
  totalDevelopers: number;
  totalApps: number;
  pendingApps: number;
  totalDownloads: number;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export const adminService = {
  // Get statistics
  async getStats(): Promise<Stats> {
    const response = await api.get<ApiResponse<Stats>>('/admin/stats');
    return response.data.data!;
  },

  // Get all users
  async getUsers(params: {
    role?: string;
    search?: string;
    page?: number;
    limit?: number;
  } = {}): Promise<PaginatedResponse<User>> {
    const { role, search, page = 1, limit = 20 } = params;
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(role && { role }),
      ...(search && { search }),
    });
    
    const response = await api.get<PaginatedResponse<User>>(`/admin/users?${queryParams}`);
    return response.data;
  },

  // Verify developer
  async verifyDeveloper(userId: string): Promise<ApiResponse<User>> {
    const response = await api.put<ApiResponse<User>>(`/admin/users/${userId}/verify`);
    return response.data;
  },

  // Delete user
  async deleteUser(userId: string): Promise<ApiResponse<null>> {
    const response = await api.delete<ApiResponse<null>>(`/admin/users/${userId}`);
    return response.data;
  },

  // Get all apps (including pending)
  async getAllApps(params: {
    status?: string;
    search?: string;
    page?: number;
    limit?: number;
  } = {}): Promise<PaginatedResponse<App>> {
    const { status, search, page = 1, limit = 20 } = params;
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status && { status }),
      ...(search && { search }),
    });
    
    const response = await api.get<PaginatedResponse<App>>(`/admin/apps?${queryParams}`);
    return response.data;
  },

  // Update app status
  async updateAppStatus(appId: string, status: string): Promise<ApiResponse<App>> {
    const response = await api.put<ApiResponse<App>>(`/admin/apps/${appId}/status`, { status });
    return response.data;
  },

  // Feature/unfeature app
  async toggleFeatureApp(appId: string): Promise<ApiResponse<App>> {
    const response = await api.put<ApiResponse<App>>(`/admin/apps/${appId}/feature`);
    return response.data;
  },

  // Get recent activity
  async getRecentActivity(limit = 20): Promise<ApiResponse<Activity[]>> {
    const response = await api.get<ApiResponse<Activity[]>>(`/admin/activity?limit=${limit}`);
    return response.data;
  },
};

interface Activity {
  _id: string;
  type: string;
  description: string;
  createdAt: string;
}

export type { App, Stats, ApiResponse, PaginatedResponse, Activity };
