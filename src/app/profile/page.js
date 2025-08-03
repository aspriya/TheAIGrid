'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ProfileView from '@/components/profile/ProfileView';
import PageContainer from '@/components/layout/PageContainer';

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <PageContainer>
          <div className="py-8">
            <ProfileView />
          </div>
        </PageContainer>
      </div>
    </ProtectedRoute>
  );
}
