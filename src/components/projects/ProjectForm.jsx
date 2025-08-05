'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import TechStackSelector from './TechStackSelector';
import CollaborationSection from './CollaborationSection';
import PricingSection from './PricingSection';
import ProjectStatus from './ProjectStatus';

const ProjectForm = ({ 
  project = null, 
  onSave, 
  onCancel, 
  isLoading = false 
}) => {
  const [formData, setFormData] = useState({
    name: project?.name || '',
    description: project?.description || '',
    techStack: project?.techStack || [],
    demoUrl: project?.demoUrl || '',
    githubUrl: project?.githubUrl || '',
    category: project?.category || '',
    tags: project?.tags || [],
    status: project?.status || 'seeking-collaboration',
    isForSale: project?.isForSale || false,
    price: project?.price || '',
    collaborationNeeds: project?.collaborationNeeds || []
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Project name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (formData.techStack.length === 0) newErrors.techStack = 'At least one technology is required';
    
    if (formData.isForSale && (!formData.price || formData.price <= 0)) {
      newErrors.price = 'Price is required for projects on sale';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const projectData = {
      ...formData,
      price: formData.isForSale ? parseInt(formData.price) : null,
      updatedAt: new Date().toISOString().split('T')[0]
    };

    if (!project) {
      projectData.id = `project-${Date.now()}`;
      projectData.createdAt = new Date().toISOString().split('T')[0];
      projectData.upvotes = 0;
      projectData.views = 0;
      projectData.featured = false;
    }

    await onSave?.(projectData);
  };

  const categories = [
    'Customer Service', 'Content Creation', 'Developer Tools', 'Finance',
    'E-commerce', 'Healthcare', 'Education', 'Marketing', 'Data Analytics',
    'Automation', 'Communication', 'Other'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4 sm:py-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {project ? 'Edit Project' : 'Create New Project'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {project 
            ? 'Update your project details and collaboration needs'
            : 'Share your AI project with the community and find collaborators'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Basic Information</h2>
            <p className="text-gray-600">Tell us about your project</p>
          </div>

          <div className="space-y-6">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Name *
              </label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange('name')(e.target.value)}
                placeholder="Enter your project name"
                error={errors.name}
                className="text-base text-gray-700"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description')(e.target.value)}
                placeholder="Describe your project, its features, and what makes it unique..."
                rows={5}
                className={`w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base resize-none text-gray-700 ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.description && (
                <p className="mt-2 text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category')(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-gray-700 ${
                  errors.category ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-2 text-sm text-red-600">{errors.category}</p>
              )}
            </div>

            {/* URLs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Demo URL
                </label>
                <Input
                  value={formData.demoUrl}
                  onChange={(e) => handleChange('demoUrl')(e.target.value)}
                  placeholder="https://your-demo.com"
                  type="url"
                  className="text-base text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  GitHub URL
                </label>
                <Input
                  value={formData.githubUrl}
                  onChange={(e) => handleChange('githubUrl')(e.target.value)}
                  placeholder="https://github.com/user/repo"
                  type="url"
                  className="text-base text-gray-700"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Technology Stack */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Technology Stack</h2>
            <p className="text-gray-600">What technologies did you use to build this project?</p>
          </div>
          
          <TechStackSelector
            selectedTech={formData.techStack}
            onChange={handleChange('techStack')}
            error={errors.techStack}
          />
        </Card>

        {/* Project Status */}
        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Project Status</h2>
            <p className="text-gray-600">What are you looking for with this project?</p>
          </div>

          <ProjectStatus
            status={formData.status}
            onChange={handleChange('status')}
          />
        </Card>

        {/* Pricing Section */}
        <PricingSection
          isForSale={formData.isForSale}
          price={formData.price}
          onToggleSale={handleChange('isForSale')}
          onPriceChange={handleChange('price')}
          error={errors.price}
        />

        {/* Collaboration Needs */}
        <CollaborationSection
          collaborationNeeds={formData.collaborationNeeds}
          onChange={handleChange('collaborationNeeds')}
          status={formData.status}
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-8">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
            className="px-8 py-3"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {project ? 'Update Project' : 'Create Project'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
