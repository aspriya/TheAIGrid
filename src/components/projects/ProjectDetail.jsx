'use client';

import { useState } from 'react';
import { 
  EyeIcon, 
  ShareIcon,
  ExternalLinkIcon,
  CodeBracketIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ProjectDetail = ({ project, currentUser, onContact }) => {
  const [showAllCollaborations, setShowAllCollaborations] = useState(false);
  const [expandedCollab, setExpandedCollab] = useState(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.name,
          text: project.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'seeking-collaboration': return 'blue';
      case 'open-to-collaboration': return 'green';
      case 'showcase-only': return 'purple';
      case 'for-sale': return 'emerald';
      case 'completed': return 'gray';
      default: return 'gray';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'seeking-collaboration': return 'Seeking Collaboration';
      case 'open-to-collaboration': return 'Open to Collaboration';
      case 'showcase-only': return 'Showcase Only';
      case 'for-sale': return 'For Sale';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const getCompensationColor = (compensation) => {
    switch (compensation) {
      case 'paid': return 'green';
      case 'equity': return 'blue';
      case 'revenue-share': return 'purple';
      case 'volunteer': return 'orange';
      case 'negotiable': return 'gray';
      default: return 'gray';
    }
  };

  const visibleCollaborations = showAllCollaborations 
    ? project.collaborationNeeds 
    : project.collaborationNeeds?.slice(0, 2) || [];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Badge variant={getStatusColor(project.status)} size="lg">
            {getStatusLabel(project.status)}
          </Badge>
          {project.featured && (
            <Badge variant="yellow" size="lg">
              ⭐ Featured
            </Badge>
          )}
          {project.spotlight && (
            <Badge variant="pink" size="lg">
              ✨ Spotlight Boost
            </Badge>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {project.name}
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {project.description}
        </p>

        {/* Stats and Actions */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          <div className="flex items-center gap-2 text-gray-600">
            <EyeIcon className="w-5 h-5" />
            <span className="text-sm font-medium">{project.views} views</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ShareIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Share</span>
          </button>

          <div className="flex items-center gap-2 text-gray-600">
            <CalendarIcon className="w-5 h-5" />
            <span className="text-sm font-medium">
              Created {new Date(project.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Links */}
          {(project.demoUrl || project.githubUrl) && (
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Project Links</h2>
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </Card>
          )}

          {/* Technology Stack */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <Badge key={tech} variant="gray">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Collaboration Needs */}
          {project.collaborationNeeds && project.collaborationNeeds.length > 0 && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Collaboration Opportunities</h2>
                <Badge variant="blue" className="flex items-center gap-1">
                  <UserGroupIcon className="w-4 h-4" />
                  {project.collaborationNeeds.length} role{project.collaborationNeeds.length !== 1 ? 's' : ''}
                </Badge>
              </div>

              <div className="space-y-4">
                {visibleCollaborations.map((collab, index) => (
                  <div key={collab.id || index} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{collab.role}</h3>
                        <p className="text-sm text-gray-600">{collab.profile}</p>
                      </div>
                      <Badge variant={getCompensationColor(collab.compensation)} size="sm">
                        {collab.compensation.replace('-', ' ')}
                      </Badge>
                    </div>

                    {collab.description && (
                      <div className="mb-4">
                        <button
                          onClick={() => setExpandedCollab(expandedCollab === index ? null : index)}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          {expandedCollab === index ? 'Hide details' : 'Show details'}
                          {expandedCollab === index ? (
                            <ChevronUpIcon className="w-4 h-4" />
                          ) : (
                            <ChevronDownIcon className="w-4 h-4" />
                          )}
                        </button>
                        
                        {expandedCollab === index && (
                          <p className="mt-3 text-gray-700 leading-relaxed">{collab.description}</p>
                        )}
                      </div>
                    )}

                    <Button 
                      onClick={() => onContact?.(project, collab)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700"
                    >
                      Apply for this role
                    </Button>
                  </div>
                ))}

                {project.collaborationNeeds.length > 2 && (
                  <button
                    onClick={() => setShowAllCollaborations(!showAllCollaborations)}
                    className="w-full py-3 text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {showAllCollaborations 
                      ? 'Show less' 
                      : `View ${project.collaborationNeeds.length - 2} more collaboration opportunities`
                    }
                  </button>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Creator Info */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Creator</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {project.createdBy?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{project.createdBy}</h4>
                <p className="text-sm text-gray-600">Project Owner</p>
                
                <Button 
                  onClick={() => onContact?.(project)}
                  className="mt-3 w-full px-4 py-2 bg-gray-800 hover:bg-gray-900"
                >
                  Contact Creator
                </Button>
              </div>
            </div>
          </Card>

          {/* Spotlight info card (only if spotlighted) */}
          {project.spotlight && (
            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Spotlight Boost</h3>
              <p className="text-sm text-amber-800">
                This project is boosted to appear before free listings for increased visibility.
              </p>
            </Card>
          )}

          {/* Pricing */}
          {project.isForSale && project.price && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${project.price}
                </div>
                <p className="text-sm text-gray-600 mb-4">One-time purchase</p>
                <Button 
                  onClick={() => onContact?.(project, null, 'purchase')}
                  className="w-full px-4 py-3 bg-green-600 hover:bg-green-700"
                >
                  <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                  Purchase Project
                </Button>
              </div>
            </Card>
          )}

          {/* Category */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                <Badge variant="purple">{project.category}</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
