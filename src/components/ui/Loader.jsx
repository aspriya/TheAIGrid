'use client';

const Loader = ({ 
  size = 'md',
  color = 'blue',
  className = '',
  text,
  ...props 
}) => {
  const sizes = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const colors = {
    blue: 'text-blue-600',
    gray: 'text-gray-600',
    white: 'text-white',
    green: 'text-green-600',
    red: 'text-red-600'
  };

  const spinnerClasses = `
    animate-spin ${sizes[size]} ${colors[color]} ${className}
  `.trim();

  const Spinner = () => (
    <svg 
      className={spinnerClasses}
      fill="none" 
      viewBox="0 0 24 24"
      {...props}
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  if (text) {
    return (
      <div className="flex items-center space-x-2">
        <Spinner />
        <span className="text-sm text-gray-600">{text}</span>
      </div>
    );
  }

  return <Spinner />;
};

// Skeleton loader for content placeholders
Loader.Skeleton = ({ 
  className = '',
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded',
  ...props 
}) => (
  <div 
    className={`bg-gray-200 animate-pulse ${width} ${height} ${rounded} ${className}`}
    {...props}
  />
);

// Full page loader
Loader.Page = ({ text = 'Loading...' }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <Loader size="xl" />
      <p className="mt-4 text-gray-600">{text}</p>
    </div>
  </div>
);

export default Loader;
