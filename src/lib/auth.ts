import api from './api';

interface User {
  _id: string;
  username: string;
  email: string;
  role: 'user' | 'developer' | 'admin';
  verified?: boolean;
  developerProfile?: {
    website?: string;
    bio?: string;
    verified: boolean;
  };
}

interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
  message?: string;
}

export const authService = {
  // Register new user
  async register(userData: {
    username: string;
    email: string;
    password: string;
  }): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    if (response.data.success && response.data.token && response.data.user) {
      this.setAuth(response.data.token, response.data.user);
    }
    return response.data;
  },

  // Login
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    if (response.data.success && response.data.token && response.data.user) {
      this.setAuth(response.data.token, response.data.user);
    }
    return response.data;
  },

  // Logout
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('barruu_token');
      localStorage.removeItem('barruu_user');
      window.location.href = '/login';
    }
  },

  // Get current user
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await api.get<AuthResponse>('/auth/me');
      if (response.data.success && response.data.user) {
        this.setUser(response.data.user);
        return response.data.user;
      }
      return null;
    } catch (err) {
      console.error('Error getting current user:', err);
      this.logout();
      return null;
    }
  },

  // Update profile
  async updateProfile(profileData: Partial<User>): Promise<AuthResponse> {
    const response = await api.put<AuthResponse>('/auth/profile', profileData);
    if (response.data.success && response.data.user) {
      this.setUser(response.data.user);
    }
    return response.data;
  },

  // Upgrade to developer
  async upgradeToDeveloper(developerData: {
    website?: string;
    bio?: string;
  }): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/upgrade-to-developer', developerData);
    if (response.data.success && response.data.user) {
      this.setUser(response.data.user);
    }
    return response.data;
  },

  // Helper functions
  setAuth(token: string, user: User) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('barruu_token', token);
      localStorage.setItem('barruu_user', JSON.stringify(user));
    }
  },

  setUser(user: User) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('barruu_user', JSON.stringify(user));
    }
  },

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('barruu_token');
    }
    return null;
  },

  getUser(): User | null {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('barruu_user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  isAdmin(): boolean {
    const user = this.getUser();
    return user ? user.role === 'admin' : false;
  },

  isDeveloper(): boolean {
    const user = this.getUser();
    return user ? (user.role === 'developer' || user.role === 'admin') : false;
  },
};

export type { User, AuthResponse };
