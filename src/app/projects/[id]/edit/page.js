'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { mockProjects } from '@/data/mockData';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import PageContainer from '@/components/layout/PageContainer';
import ProjectForm from '@/components/projects/ProjectForm';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading project data
    const projectId = params.id;
    const foundProject = mockProjects.find(p => p.id === projectId);
    
    if (foundProject) {
      // Check if user owns this project
      if (session?.user && foundProject.createdBy === session.user.name) {
        setProject(foundProject);
      } else {
        // Redirect if not owner
        router.push(`/projects/${projectId}`);
        return;
      }
    }
    
    setLoading(false);
  }, [params.id, session?.user, router]);

  const handleSave = async (projectData) => {
    setIsLoading(true);
    
    try {
      // Here you would typically update the backend
      console.log('Updating project:', projectData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to project detail
      router.push(`/projects/${project.id}`);
    } catch (error) {
      console.error('Error updating project:', error);
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.push(`/projects/${project.id}`);
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <PageContainer>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </PageContainer>
      </ProtectedRoute>
    );
  }

  if (!project) {
    return (
      <ProtectedRoute>
        <PageContainer>
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔒</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Access Denied
              </h1>
              <p className="text-gray-600 mb-8">
                You can only edit projects that you created.
              </p>
              <Link href="/projects">
                <Button className="px-6 py-3">
                  <ArrowLeftIcon className="w-5 h-5 mr-2" />
                  Back to Projects
                </Button>
              </Link>
            </div>
          </div>
        </PageContainer>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <PageContainer>
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href={`/projects/${project.id}`}>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-4 py-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Project
            </Button>
          </Link>
        </div>

        {/* Project Form */}
        <ProjectForm 
          project={project}
          onSave={handleSave}
          onCancel={handleCancel}
          isLoading={isLoading}
        />
      </PageContainer>
    </ProtectedRoute>
  );
}
