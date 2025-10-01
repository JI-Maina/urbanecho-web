import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  setUser: (user: User) => void;
}

// Mock user data
const MOCK_USERS = [
  {
    id: '1',
    name: 'Grace Kagho',
    email: 'grace.kagho@ivt.baug.ethz.ch',
    avatar: undefined,
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: undefined,
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: undefined,
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock authentication logic
        const user = MOCK_USERS.find(u => u.email === email);
        
        if (user && password === 'password') {
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
          return { success: true };
        } else {
          set({ isLoading: false });
          return { 
            success: false, 
            error: 'Invalid email or password' 
          };
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },

      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
        });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
