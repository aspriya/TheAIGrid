'use client';

import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const CollaborationSection = ({ collaborationNeeds, onChange, status }) => {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newCollaboration, setNewCollaboration] = useState({
    role: '',
    profile: '',
    compensation: 'equity',
    description: ''
  });

  const roleOptions = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Mobile Developer',
    'DevOps Engineer',
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Researcher',
    'Product Manager',
    'UI/UX Designer',
    'Business Development',
    'Marketing Specialist',
    'Content Creator',
    'Technical Writer',
    'Quality Assurance',
    'Project Manager',
    'Other'
  ];

  const compensationOptions = [
    { value: 'equity', label: 'Equity/Partnership', description: 'Share ownership in the project' },
    { value: 'revenue-share', label: 'Revenue Share', description: 'Share future profits' },
    { value: 'paid', label: 'Paid Position', description: 'Salary or hourly compensation' },
    { value: 'volunteer', label: 'Volunteer', description: 'No monetary compensation' },
    { value: 'negotiable', label: 'Negotiable', description: 'Open to discussion' }
  ];

  const addCollaboration = () => {
    if (newCollaboration.role && newCollaboration.profile) {
      const collaboration = {
        id: Date.now().toString(),
        ...newCollaboration
      };
      onChange([...collaborationNeeds, collaboration]);
      setNewCollaboration({
        role: '',
        profile: '',
        compensation: 'equity',
        description: ''
      });
      setIsAddingNew(false);
    }
  };

  const removeCollaboration = (id) => {
    onChange(collaborationNeeds.filter(collab => collab.id !== id));
  };

  const updateCollaboration = (id, field, value) => {
    onChange(collaborationNeeds.map(collab => 
      collab.id === id ? { ...collab, [field]: value } : collab
    ));
  };

  // Don't show collaboration section if status doesn't need it
  if (!['seeking-collaboration', 'open-to-collaboration'].includes(status)) {
    return null;
  }

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Collaboration Needs</h2>
        <p className="text-gray-600">
          What kind of collaborators are you looking for? Be specific about roles and what you can offer.
        </p>
      </div>

      <div className="space-y-6">
        {/* Existing Collaborations */}
        {collaborationNeeds.map((collab, index) => (
          <div key={collab.id} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Collaboration #{index + 1}
              </h3>
              <button
                type="button"
                onClick={() => removeCollaboration(collab.id)}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role Needed
                </label>
                <select
                  value={collab.role}
                  onChange={(e) => updateCollaboration(collab.id, 'role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a role</option>
                  {roleOptions.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              {/* Compensation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Compensation
                </label>
                <select
                  value={collab.compensation}
                  onChange={(e) => updateCollaboration(collab.id, 'compensation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {compensationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Profile */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ideal Profile
              </label>
              <input
                type="text"
                value={collab.profile}
                onChange={(e) => updateCollaboration(collab.id, 'profile', e.target.value)}
                placeholder="e.g., 2+ years experience in React, familiar with AI APIs"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={collab.description}
                onChange={(e) => updateCollaboration(collab.id, 'description', e.target.value)}
                placeholder="Describe what this person will work on and what you expect from them..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Compensation Description */}
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>{compensationOptions.find(opt => opt.value === collab.compensation)?.label}:</strong>{' '}
                {compensationOptions.find(opt => opt.value === collab.compensation)?.description}
              </p>
            </div>
          </div>
        ))}

        {/* Add New Collaboration */}
        {isAddingNew ? (
          <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add New Collaboration Need
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role Needed *
                </label>
                <select
                  value={newCollaboration.role}
                  onChange={(e) => setNewCollaboration(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a role</option>
                  {roleOptions.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              {/* Compensation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Compensation
                </label>
                <select
                  value={newCollaboration.compensation}
                  onChange={(e) => setNewCollaboration(prev => ({ ...prev, compensation: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {compensationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Profile */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ideal Profile *
              </label>
              <input
                type="text"
                value={newCollaboration.profile}
                onChange={(e) => setNewCollaboration(prev => ({ ...prev, profile: e.target.value }))}
                placeholder="e.g., 2+ years experience in React, familiar with AI APIs"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={newCollaboration.description}
                onChange={(e) => setNewCollaboration(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe what this person will work on and what you expect from them..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={addCollaboration}
                disabled={!newCollaboration.role || !newCollaboration.profile}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700"
              >
                Add Collaboration
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddingNew(false);
                  setNewCollaboration({
                    role: '',
                    profile: '',
                    compensation: 'equity',
                    description: ''
                  });
                }}
                className="px-4 py-2"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsAddingNew(true)}
            className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            Add Collaboration Need
          </button>
        )}

        {/* Helper Text */}
        {collaborationNeeds.length === 0 && !isAddingNew && (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">
              No collaboration needs added yet. Add specific roles you're looking for to attract the right collaborators.
            </p>
            <p className="text-sm text-gray-400">
              Tip: Be specific about skills, experience level, and what you can offer in return.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CollaborationSection;
