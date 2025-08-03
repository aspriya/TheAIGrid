'use client';

import { useState } from 'react';

const Avatar = ({ 
  src,
  alt,
  name,
  size = 'md',
  className = '',
  fallbackClassName = '',
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
    '2xl': 'h-20 w-20 text-2xl'
  };

  const baseClasses = `
    inline-flex items-center justify-center rounded-full
    bg-gray-100 text-gray-600 font-medium
    ${sizes[size]}
  `;

  // Generate initials from name
  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const classes = `${baseClasses} ${className}`.trim();
  const fallbackClasses = `${baseClasses} ${fallbackClassName}`.trim();

  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={alt || name || 'Avatar'}
        className={`${classes} object-cover`}
        onError={() => setImageError(true)}
        {...props}
      />
    );
  }

  return (
    <div className={fallbackClasses} {...props}>
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
