import React, { memo } from 'react';

/**
 * Button - Composant atomique pur pour tous les boutons
 * Props immutables, rendu prévisible
 */
const Button = memo(({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  style = {},
  ...props 
}) => {
  
  // Classes de base selon la variante
  const baseClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'text-portfolio-text-primary hover:text-portfolio-purple transition-colors duration-300'
  };

  // Classes de taille
  const sizeClasses = {
    small: 'text-base px-5 py-2',
    medium: 'text-lg px-6 py-3',   
    large: 'text-xl px-8 py-4'
  };

  const buttonClasses = `
    ${baseClasses[variant] || baseClasses.primary}
    ${sizeClasses[size] || sizeClasses.medium}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;