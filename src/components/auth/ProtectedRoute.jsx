'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loader from '@/components/ui/Loader';

const ProtectedRoute = ({ 
  children, 
  requireAuth = true,
  fallback = null,
  redirectTo = '/auth'
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if authentication is required but user is not authenticated
    if (requireAuth && status === 'unauthenticated') {
      router.push(redirectTo);
    }
  }, [requireAuth, status, router, redirectTo]);

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  // If auth is required but user is not authenticated, show fallback or redirect
  if (requireAuth && !session) {
    return fallback || null;
  }

  return children;
};

export default ProtectedRoute;
