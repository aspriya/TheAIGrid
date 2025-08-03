'use client';

import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BrowsePage() {
  return (
    <PageContainer>
      <div className="text-center py-16">
        <div className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MagnifyingGlassIcon className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Browse Projects
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            This page is coming soon! For now, you can explore all projects on our Projects page.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View All Projects
              </Button>
            </Link>
            <Link href="/collaborate">
              <Button variant="outline" className="px-8 py-3 border-2">
                Find Collaborations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
