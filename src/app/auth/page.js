'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LoginForm from '@/components/auth/LoginForm';
import PageContainer from '@/components/layout/PageContainer';

const AuthPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already logged in
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  const handleSuccess = () => {
    router.push('/'); // Redirect to home after successful authentication
  };

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  // Don't render if user is already logged in
  if (session) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <PageContainer>
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <LoginForm 
              onSuccess={handleSuccess}
            />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default AuthPage;
