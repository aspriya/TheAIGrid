'use client';

import { 
  UserGroupIcon, 
  HandRaisedIcon, 
  EyeIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const ProjectStatus = ({ status, onChange }) => {
  const statusOptions = [
    {
      value: 'seeking-collaboration',
      label: 'Seeking Collaboration',
      description: 'Looking for active contributors and collaborators',
      icon: UserGroupIcon,
      color: 'blue',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      value: 'open-to-collaboration',
      label: 'Open to Collaboration',
      description: 'Open to collaborators but not actively seeking',
      icon: HandRaisedIcon,
      color: 'green',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      value: 'showcase-only',
      label: 'Showcase Only',
      description: 'Sharing for portfolio/community visibility',
      icon: EyeIcon,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      value: 'for-sale',
      label: 'For Sale',
      description: 'Available for purchase',
      icon: CurrencyDollarIcon,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      value: 'completed',
      label: 'Completed',
      description: 'Project is finished and stable',
      icon: CheckCircleIcon,
      color: 'gray',
      gradient: 'from-gray-500 to-slate-600'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statusOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = status === option.value;
          
          return (
            <div
              key={option.value}
              className={`relative cursor-pointer rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? `border-${option.color}-300 bg-gradient-to-br ${option.gradient} bg-opacity-10`
                  : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
              }`}
              onClick={() => onChange(option.value)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-2 rounded-lg ${
                    isSelected 
                      ? `bg-gradient-to-br ${option.gradient} text-white`
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className={`text-base font-semibold ${
                        isSelected ? `text-${option.color}-900` : 'text-gray-900'
                      }`}>
                        {option.label}
                      </h3>
                      {isSelected && (
                        <div className={`w-2 h-2 rounded-full bg-${option.color}-600`} />
                      )}
                    </div>
                    <p className={`text-sm mt-1 ${
                      isSelected ? `text-${option.color}-700` : 'text-gray-600'
                    }`}>
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Radio Button */}
                <div className="absolute top-4 right-4">
                  <input
                    type="radio"
                    name="projectStatus"
                    value={option.value}
                    checked={isSelected}
                    onChange={() => onChange(option.value)}
                    className={`w-4 h-4 border-2 ${
                      isSelected 
                        ? `text-${option.color}-600 border-${option.color}-600`
                        : 'text-gray-400 border-gray-300'
                    } focus:ring-2 focus:ring-${option.color}-500`}
                  />
                </div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${option.gradient} opacity-5 pointer-events-none`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Status-specific Information */}
      {status && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-900">
                {status === 'seeking-collaboration' && 'Collaboration Features Enabled'}
                {status === 'open-to-collaboration' && 'Collaboration Available'}
                {status === 'showcase-only' && 'Portfolio Display'}
                {status === 'for-sale' && 'Sales Features Enabled'}
                {status === 'completed' && 'Project Archive'}
              </h4>
              <p className="text-sm text-blue-800 mt-1">
                {status === 'seeking-collaboration' && 'You can add specific collaboration needs and attract potential contributors.'}
                {status === 'open-to-collaboration' && 'Others can reach out to discuss potential collaboration opportunities.'}
                {status === 'showcase-only' && 'Your project will be featured in the community showcase for visibility and feedback.'}
                {status === 'for-sale' && 'You can set a price and enable purchase inquiries from interested buyers.'}
                {status === 'completed' && 'Your finished project will be marked as stable and complete.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectStatus;
