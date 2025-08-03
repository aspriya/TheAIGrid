'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import PageContainer from '@/components/layout/PageContainer';
import ProjectForm from '@/components/projects/ProjectForm';

export default function CreateProjectPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (projectData) => {
    setIsLoading(true);
    
    try {
      // Add creator information
      const newProject = {
        ...projectData,
        createdBy: user.name
      };

      // Here you would typically save to your backend
      console.log('Creating project:', newProject);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to projects page or project detail
      router.push('/projects');
    } catch (error) {
      console.error('Error creating project:', error);
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push('/projects');
  };

  return (
    <ProtectedRoute>
      <PageContainer>
        <ProjectForm 
          onSave={handleSave}
          onCancel={handleCancel}
          isLoading={isLoading}
        />
      </PageContainer>
    </ProtectedRoute>
  );
}
