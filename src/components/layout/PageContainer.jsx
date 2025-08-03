'use client';

const PageContainer = ({ 
  children, 
  maxWidth = 'max-w-7xl',
  padding = 'px-4 sm:px-6 lg:px-8',
  className = '',
  ...props 
}) => {
  const classes = `
    mx-auto ${maxWidth} ${padding} ${className}
  `.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default PageContainer;
