'use client';

import { forwardRef } from 'react';

const Select = forwardRef(({ 
  label,
  error,
  helperText,
  options = [],
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = `
    w-full px-3 py-2 border rounded-lg shadow-sm
    transition-colors duration-200 bg-white
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    disabled:bg-gray-50 disabled:cursor-not-allowed
  `;

  const stateClasses = error 
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 hover:border-gray-400';

  const classes = `
    ${baseClasses}
    ${stateClasses}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        disabled={disabled}
        className={classes}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option 
            key={option.value || index} 
            value={option.value || option}
          >
            {option.label || option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
