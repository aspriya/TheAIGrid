'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const TechStackSelector = ({ selectedTech, onChange, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const technologies = [
    // Frontend
    'React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby',
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap',
    'Material-UI', 'Chakra UI', 'Styled Components',
    
    // Backend
    'Node.js', 'Express', 'Fastify', 'Koa', 'NestJS', 'Django', 'Flask',
    'FastAPI', 'Ruby on Rails', 'Laravel', 'Spring Boot', 'ASP.NET',
    'Go', 'Rust', 'Java', 'C#', 'Python', 'PHP', 'Ruby',
    
    // Databases
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase',
    'Supabase', 'DynamoDB', 'Cassandra', 'Neo4j',
    
    // AI/ML
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face',
    'LangChain', 'Pinecone', 'Weaviate', 'Chroma', 'OpenCV',
    'Pandas', 'NumPy', 'Jupyter', 'Streamlit', 'Gradio',
    
    // Cloud & DevOps
    'AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'Heroku',
    'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform',
    
    // Mobile
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo',
    
    // Other
    'GraphQL', 'REST API', 'WebSocket', 'Stripe', 'Auth0', 'NextAuth',
    'Prisma', 'Drizzle', 'Socket.io', 'Electron', 'Tauri'
  ];

  const filteredTechnologies = technologies.filter(tech => 
    tech.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedTech.includes(tech)
  );

  const addTechnology = (tech) => {
    if (!selectedTech.includes(tech)) {
      onChange([...selectedTech, tech]);
    }
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  const removeTechnology = (tech) => {
    onChange(selectedTech.filter(t => t !== tech));
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    // Delay closing to allow for clicks
    setTimeout(() => setIsDropdownOpen(false), 200);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Search technologies (e.g., React, Python, TensorFlow)..."
          className={`w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-gray-700 ${
            error ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
            {filteredTechnologies.length > 0 ? (
              <div className="py-2">
                {filteredTechnologies.slice(0, 10).map(tech => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => addTechnology(tech)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-sm text-gray-700"
                  >
                    {tech}
                  </button>
                ))}
                {filteredTechnologies.length > 10 && (
                  <div className="px-4 py-2 text-xs text-gray-500 border-t">
                    +{filteredTechnologies.length - 10} more results...
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                {searchTerm ? 'No technologies found' : 'Start typing to search...'}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Technologies */}
      {selectedTech.length > 0 && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Selected Technologies ({selectedTech.length})
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedTech.map(tech => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTechnology(tech)}
                  className="hover:text-red-600 transition-colors"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Popular Technologies */}
      {selectedTech.length === 0 && !searchTerm && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Popular Technologies
          </label>
          <div className="flex flex-wrap gap-2">
            {['React', 'Python', 'Node.js', 'TypeScript', 'TensorFlow', 'OpenAI API', 'Next.js', 'MongoDB'].map(tech => (
              <button
                key={tech}
                type="button"
                onClick={() => addTechnology(tech)}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                + {tech}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechStackSelector;
