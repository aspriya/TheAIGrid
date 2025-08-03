'use client';

import { useAuth } from '@/contexts/AuthContext';
import Loader from '@/components/ui/Loader';

const ProtectedRoute = ({ 
  children, 
  requireAuth = true,
  fallback = null,
  redirectTo = '/login'
}) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  // For development: Allow all routes for now
  // In production, this would redirect unauthenticated users
  if (requireAuth && !isAuthenticated) {
    // For now, just show fallback or children (development mode)
    return fallback || children;
    
    // Future implementation:
    // redirect(redirectTo);
    // return null;
  }

  return children;
};

export default ProtectedRoute;
