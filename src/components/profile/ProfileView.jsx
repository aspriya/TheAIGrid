'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ProfileForm from './ProfileForm';

const ProfileView = () => {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  // For now, we'll create a user object from session data
  // Later you might want to fetch additional user data from your database
  const user = session?.user ? {
    id: session.user.email, // Using email as ID for now
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
    // Add default values for other fields that your existing UI expects
    bio: "Welcome to TheAIGrid! Complete your profile to connect with other AI creators.",
    expertise: [],
    lookingFor: [],
    projects: [],
    role: "Creator",
    joinedDate: new Date().toISOString().split('T')[0],
    location: "",
    website: "",
    twitter: "",
    linkedin: ""
  } : null;

  if (!user) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <div className="p-8 text-center">
          <p className="text-gray-500">Please sign in to view your profile.</p>
        </div>
      </Card>
    );
  }

  if (isEditing) {
    return (
      <ProfileForm
        onCancel={() => setIsEditing(false)}
        onSuccess={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header Card */}
      <Card className="shadow-xl border-0 bg-gradient-to-r from-white to-blue-50/30 overflow-hidden">
        <div className="relative p-8">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/50 to-purple-500/50 rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h1>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {user.role}
                  </span>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-800 font-semibold">
                    {user.projects?.length || 0} projects
                  </span>
                </div>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => setIsEditing(true)} 
              variant="outline" 
              className="bg-blue-600/80 backdrop-blur-sm border-gray-500 text-white hover:bg-blue-600 hover:shadow-lg px-6 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section */}
          {user.bio && (
            <Card className="shadow-lg border-0">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">About</h3>
                </div>
                <p className="text-gray-900 leading-relaxed text-lg font-medium">{user.bio}</p>
              </div>
            </Card>
          )}

          {/* Expertise Section */}
          {user.expertise && user.expertise.length > 0 && (
            <Card className="shadow-lg border-0">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {user.expertise.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 border border-blue-300 rounded-xl font-semibold hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Looking For Section */}
          {user.lookingFor && user.lookingFor.length > 0 && (
            <Card className="shadow-lg border-0">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Looking For</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {user.lookingFor.map((item, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-semibold hover:border-blue-400 hover:shadow-md transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Basic Info */}
          <Card className="shadow-lg border-0">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Info</h3>
              <div className="space-y-4">
                {user.location && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-900 font-medium">{user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 font-medium truncate"
                    >
                      {user.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-800">Joined {user.joinedAt}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          {(user.github || user.linkedin || user.twitter) && (
            <Card className="shadow-lg border-0">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Social Links</h3>
                <div className="space-y-3">
                  {user.github && (
                    <a
                      href={`https://${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">GitHub</p>
                        <p className="text-sm text-gray-700 font-medium">{user.github.replace(/^github\.com\//, '@')}</p>
                      </div>
                    </a>
                  )}
                  {user.linkedin && (
                    <a
                      href={`https://${user.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">LinkedIn</p>
                        <p className="text-sm text-gray-700 font-medium">{user.linkedin.replace(/^linkedin\.com\/in\//, '@')}</p>
                      </div>
                    </a>
                  )}
                  {user.twitter && (
                    <a
                      href={`https://twitter.com/${user.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Twitter</p>
                        <p className="text-sm text-gray-700 font-medium">{user.twitter}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Projects Section */}
      {user.projects && user.projects.length > 0 && (
        <Card className="shadow-lg border-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Recent Projects</h3>
              </div>
              <span className="text-sm text-gray-500">{user.projects.length} total</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {user.projects.slice(0, 6).map((project) => (
                <div key={project.id} className="p-4 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200">
                  <h4 className="font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-800 mb-3 line-clamp-2 font-medium">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-700 font-bold">{project.status}</span>
                  </div>
                </div>
              ))}
            </div>
            {user.projects.length > 6 && (
              <div className="text-center mt-6">
                <Button variant="outline" className="bg-white">
                  View All Projects ({user.projects.length})
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProfileView;
