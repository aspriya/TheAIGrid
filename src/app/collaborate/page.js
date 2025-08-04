'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { mockProjects } from '@/data/mockData';
import PageContainer from '@/components/layout/PageContainer';
import ProjectGrid from '@/components/projects/ProjectGrid';
import Button from '@/components/ui/Button';
import { UserGroupIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CollaboratePage() {
  const { data: session } = useSession();
  
  // Filter projects that are seeking collaboration
  const collaborativeProjects = mockProjects.filter(project => 
    ['seeking-collaboration', 'open-to-collaboration'].includes(project.status)
  );

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl mb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl">
              <UserGroupIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Next Collaboration
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with talented developers, join exciting AI projects, 
            and build amazing things together.
          </p>
          
          {session ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects/create">
                <Button className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 flex items-center gap-2">
                  <HandRaisedIcon className="w-5 h-5" />
                  Offer Collaboration
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  variant="outline" 
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 flex items-center gap-2"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">
                Join our community to start collaborating with other developers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth">
                  <Button className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button variant="outline" className="px-8 py-3 border-2">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Collaboration Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-blue-200 rounded-2xl p-8">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <UserGroupIcon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Seeking Active Collaborators
          </h3>
          <p className="text-gray-600 mb-4">
            Projects actively looking for contributors to join their team and help build something amazing.
          </p>
          <div className="text-sm text-blue-600 font-medium">
            {mockProjects.filter(p => p.status === 'seeking-collaboration').length} projects available
          </div>
        </div>

        <div className="bg-white border border-green-200 rounded-2xl p-8">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <HandRaisedIcon className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Open to Collaboration
          </h3>
          <p className="text-gray-600 mb-4">
            Projects open to discussing potential collaboration opportunities with interested developers.
          </p>
          <div className="text-sm text-green-600 font-medium">
            {mockProjects.filter(p => p.status === 'open-to-collaboration').length} projects available
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <ProjectGrid 
          projects={collaborativeProjects}
          title="Collaboration Opportunities"
          showFilters={true}
          showSearch={true}
          currentUser={session?.user}
        />
      </div>

      {/* Bottom CTA */}
      {!session && (
        <div className="mt-16 text-center py-12 bg-gray-900 rounded-2xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Collaborating?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join our community of developers building the future of AI together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
              <Link href="/auth">
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
