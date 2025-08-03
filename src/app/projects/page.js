'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { mockProjects } from '@/data/mockData';
import PageContainer from '@/components/layout/PageContainer';
import ProjectGrid from '@/components/projects/ProjectGrid';
import Button from '@/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ProjectsPage() {
  const { user } = useAuth();
  const [projects] = useState(mockProjects);

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing AI Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore innovative AI projects, find collaboration opportunities, 
            and discover solutions built by the community.
          </p>
          
          {user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects/create">
                <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2">
                  <PlusIcon className="w-5 h-5" />
                  Share Your Project
                </Button>
              </Link>
              <Link href="/collaborate">
                <Button 
                  variant="outline" 
                  className="px-8 py-3 border-2"
                >
                  Find Collaborations
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">
                Join our community to share your projects and collaborate with others
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="px-8 py-3 border-2">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              Handpicked exceptional projects from our community
            </p>
          </div>
        </div>
        
        <ProjectGrid 
          projects={projects.filter(p => p.featured)} 
          title=""
          showFilters={false}
          showSearch={false}
          currentUser={user}
        />
      </div>

      {/* All Projects Section */}
      <div>
        <ProjectGrid 
          projects={projects} 
          title="All Projects"
          showFilters={true}
          showSearch={true}
          currentUser={user}
        />
      </div>

      {/* Bottom CTA */}
      {!user && (
        <div className="mt-16 text-center py-12 bg-gray-900 rounded-2xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Share Your Project?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of developers showcasing their AI projects and finding collaborators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
                  Create Account
                </Button>
              </Link>
              <Link href="/login">
                <Button 
                  variant="outline" 
                  className="px-8 py-3 border-gray-400 text-gray-300 hover:bg-gray-800"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
