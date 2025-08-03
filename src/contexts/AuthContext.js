'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Mock user data structure matching future NextAuth.js format
const mockUsers = [
  {
    id: "user-123",
    name: "John Doe",
    email: "john@example.com",
    image: "/placeholder-avatar.jpg",
    bio: "AI enthusiast and startup founder with 5+ years of experience in building SaaS products. Passionate about democratizing AI for small businesses.",
    expertise: ["React", "Machine Learning", "SaaS Marketing", "Product Strategy"],
    lookingFor: ["Co-founder", "Technical advisor", "Investor"],
    projects: ["project-123", "project-456"],
    role: "Creator",
    joinedDate: "2024-01-15",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    twitter: "@johndoe",
    linkedin: "johndoe"
  },
  {
    id: "user-456", 
    name: "Sarah Chen",
    email: "sarah@example.com",
    image: "/placeholder-avatar.jpg",
    bio: "Marketing strategist specializing in AI product launches. Helped 10+ AI startups achieve product-market fit.",
    expertise: ["Digital Marketing", "Growth Hacking", "Content Strategy", "AI Product Marketing"],
    lookingFor: ["Partnership opportunities", "Advisory roles"],
    projects: [],
    role: "Collaborator",
    joinedDate: "2024-02-20",
    location: "New York, NY",
    website: "https://sarahchen.marketing",
    twitter: "@sarahchen",
    linkedin: "sarahchen"
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication state
  useEffect(() => {
    // Simulate initial auth check
    setTimeout(() => {
      // For development, auto-login with first mock user
      const mockUser = mockUsers[0];
      setUser(mockUser);
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    
    // Mock login logic
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      setIsLoading(false);
      return { success: true };
    } else {
      setIsLoading(false);
      return { success: false, error: "Invalid credentials" };
    }
  };

  const logout = async () => {
    setIsLoading(true);
    
    // Mock logout
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  const register = async (userData) => {
    setIsLoading(true);
    
    // Mock registration
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      projects: [],
      joinedDate: new Date().toISOString().split('T')[0],
      image: "/placeholder-avatar.jpg"
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    setIsLoading(false);
    
    return { success: true };
  };

  const updateProfile = async (updates) => {
    setIsLoading(true);
    
    // Mock profile update
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser(prev => ({ ...prev, ...updates }));
    setIsLoading(false);
    
    return { success: true };
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
    updateProfile,
    mockUsers // For development purposes
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
