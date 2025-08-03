'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { mockProjects } from '@/data/mockData';
import PageContainer from '@/components/layout/PageContainer';
import ProjectDetail from '@/components/projects/ProjectDetail';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading project data
    const projectId = params.id;
    const foundProject = mockProjects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [params.id]);

  const handleUpvote = async (projectId, isUpvoted) => {
    // Here you would typically update the backend
    console.log('Upvote project:', projectId, isUpvoted);
    
    // Update local state
    if (project) {
      setProject(prev => ({
        ...prev,
        upvotes: prev.upvotes + (isUpvoted ? 1 : -1)
      }));
    }
  };

  const handleContact = async (project, collaboration = null, type = 'collaboration') => {
    if (!user) {
      router.push('/login');
      return;
    }

    // Here you would typically open a contact modal or redirect to a contact form
    console.log('Contact project:', { project, collaboration, type });
    
    // For now, just show an alert
    if (type === 'purchase') {
      alert(`Contacting ${project.createdBy} about purchasing "${project.name}"`);
    } else if (collaboration) {
      alert(`Applying for "${collaboration.role}" role in "${project.name}"`);
    } else {
      alert(`Contacting ${project.createdBy} about "${project.name}"`);
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </PageContainer>
    );
  }

  if (!project) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The project you&apos;re looking for doesn&apos;t exist or has been removed.
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
    );
  }

  return (
    <PageContainer>
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/projects">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-4 py-2"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Project Detail */}
      <ProjectDetail 
        project={project}
        currentUser={user}
        onUpvote={handleUpvote}
        onContact={handleContact}
      />

      {/* Edit Button for Project Owner */}
      {user && user.name === project.createdBy && (
        <div className="mt-8 text-center">
          <Link href={`/projects/${project.id}/edit`}>
            <Button className="px-6 py-3 bg-gray-800 hover:bg-gray-900">
              Edit Project
            </Button>
          </Link>
        </div>
      )}

      {/* Related Projects */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Related Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects
            .filter(p => 
              p.id !== project.id && 
              (p.category === project.category || 
               p.techStack?.some(tech => project.techStack?.includes(tech)))
            )
            .slice(0, 3)
            .map(relatedProject => (
              <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {relatedProject.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {relatedProject.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedProject.createdBy}</span>
                    <span>{relatedProject.upvotes} upvotes</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </PageContainer>
  );
}
