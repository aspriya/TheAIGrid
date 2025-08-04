'use client';

import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { 
  RocketLaunchIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AboutPage() {
  const features = [
    {
      icon: RocketLaunchIcon,
      title: 'Share Your Projects',
      description: 'Showcase your AI projects to a community of developers and potential collaborators.'
    },
    {
      icon: UserGroupIcon,
      title: 'Find Collaborators',
      description: 'Connect with talented developers who share your passion for AI and innovation.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Monetize Your Work',
      description: 'Sell your projects and solutions to businesses and other developers.'
    },
    {
      icon: LightBulbIcon,
      title: 'Get Inspired',
      description: 'Discover innovative AI solutions and learn from the community.'
    },
    {
      icon: ChartBarIcon,
      title: 'Track Performance',
      description: 'See how your projects perform with upvotes, views, and community feedback.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Community',
      description: 'Join developers from around the world building the future of AI.'
    }
  ];

  const stats = [
    { label: 'Projects Shared', value: '500+' },
    { label: 'Active Developers', value: '2K+' },
    { label: 'Collaborations Formed', value: '150+' },
    { label: 'Countries Represented', value: '50+' }
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About TheAIGrid
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            TheAIGrid is the premier marketplace and community for AI developers to share projects, 
            find collaborators, and monetize their innovations. We&apos;re building the future of AI development, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore Projects
              </Button>
            </Link>
            <Link href="/auth">
              <Button variant="outline" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that the future of AI development lies in collaboration and community. 
            TheAIGrid provides a platform where developers can showcase their work, find like-minded collaborators, 
            and turn their innovative ideas into successful ventures. We&apos;re democratizing AI development by making 
            it easier for developers to connect, collaborate, and commercialize their projects.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What Makes Us Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16 bg-gray-900 rounded-2xl py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Community Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Project</h3>
            <p className="text-gray-600">
              Upload your AI project with details about the technology, features, and what makes it unique.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect & Collaborate</h3>
            <p className="text-gray-600">
              Find collaborators who can help take your project to the next level or join existing projects.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Grow & Monetize</h3>
            <p className="text-gray-600">
              Build amazing products together and explore opportunities to monetize your innovations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you&apos;re looking to showcase your work, find collaborators, or discover amazing AI projects, 
            TheAIGrid is the place to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started Today
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="px-8 py-3 border-2">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
