import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// User type definition
export interface User {
  id: string;
  name: string;
  email: string;
}

// Auth store state interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  users: User[];
  register: (user: Omit<User, 'id'>) => { success: boolean; error?: string };
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

// Simple mock database for users (with passwords for demo)
interface UserWithPassword extends User {
  password: string;
}

// Create auth store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: [],
      
      register: (userData) => {
        const { email } = userData;
        const { users } = get();
        
        // Check if email already exists
        if (users.some(user => user.email === email)) {
          return { success: false, error: 'Email already registered' };
        }
        
        // Create new user with ID
        const newUser = {
          ...userData,
          id: crypto.randomUUID(),
        };
        
        set({ users: [...users, newUser] });
        return { success: true };
      },
      
      login: (email, password) => {
        const { users } = get();
        
        // In a real app, you would hash passwords and use secure comparison
        const user = users.find(u => u.email === email);
        
        if (!user) {
          return { success: false, error: 'User not found' };
        }
        
        // For demo purposes, we're not actually checking passwords
        // In a real app, you'd verify hashed passwords here
        
        set({ 
          user,
          isAuthenticated: true,
        });
        
        return { success: true };
      },
      
      logout: () => {
        set({ 
          user: null,
          isAuthenticated: false,
        });
      }
    }),
    {
      name: 'auth-storage', // name of the item in localStorage
    }
  )
);