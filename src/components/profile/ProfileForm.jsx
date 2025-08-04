'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

const ProfileForm = ({ onCancel, onSuccess }) => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  
  // Create user object from session data (same as in ProfileView)
  const user = session?.user ? {
    id: session.user.email,
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
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

  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    location: user?.location || '',
    website: user?.website || '',
    github: user?.github || '',
    linkedin: user?.linkedin || '',
    twitter: user?.twitter || '',
    expertise: user?.expertise?.join(', ') || '',
    lookingFor: user?.lookingFor?.join(', ') || '',
    role: user?.role || 'Creator',
    profilePhoto: user?.profilePhoto || ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // TODO: Implement profile update API call
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Profile updated successfully!');
      setTimeout(() => {
        onSuccess?.();
      }, 1500);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Edit Profile</h2>
          <p className="text-gray-600">Update your information and preferences</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
            
            {/* Profile Photo Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Profile Photo
              </label>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                    {!formData.profilePhoto && (formData.name?.charAt(0).toUpperCase() || 'U')}
                    {formData.profilePhoto && (
                      <img
                        src={formData.profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <label className="cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setFormData(prev => ({
                                ...prev,
                                profilePhoto: event.target.result
                              }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                    {formData.profilePhoto && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, profilePhoto: '' }))}
                        className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-500"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. Max size of 5MB.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
                >
                  <option value="Creator">Creator</option>
                  <option value="Collaborator">Collaborator</option>
                  <option value="Acquirer">Acquirer</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell others about yourself..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub
                </label>
                <Input
                  id="github"
                  name="github"
                  type="text"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="github.com/username"
                  className="text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn
                </label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="text"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="linkedin.com/in/username"
                    className="text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter
                </label>
                <Input
                  id="twitter"
                  name="twitter"
                  type="text"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="@username"
                    className="text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Skills & Interests</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Expertise
                </label>
                <Input
                  id="expertise"
                  name="expertise"
                  type="text"
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="Machine Learning, Computer Vision, NLP (comma-separated)"
                    className="text-gray-600"
                />
                <p className="text-xs text-gray-500 mt-1">Separate multiple skills with commas</p>
              </div>

              <div>
                <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700 mb-1">
                  Looking For
                </label>
                <Input
                  id="lookingFor"
                  name="lookingFor"
                  type="text"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  placeholder="Collaborators, Funding, Technical guidance (comma-separated)"
                    className="text-gray-600"
                />
                <p className="text-xs text-gray-500 mt-1">What are you seeking on TheAIGrid?</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-3 py-2 rounded-md text-sm">
              {success}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1"
              isLoading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1 text-white bg-gray-700 hover:bg-gray-800"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ProfileForm;
