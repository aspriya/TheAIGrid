'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/auth/LoginForm';
import PageContainer from '@/components/layout/PageContainer';

const LoginPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already logged in
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSuccess = () => {
    router.push('/'); // Redirect to home after successful login
  };

  const handleToggleMode = () => {
    router.push('/register'); // Navigate to register page
  };

  if (user) {
    return null; // Don't render if user is already logged in
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <PageContainer>
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <LoginForm 
              onSuccess={handleSuccess}
              onToggleMode={handleToggleMode}
            />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default LoginPage;
