import React, { memo } from 'react';

/**
 * Button - Composant bouton réutilisable
 * Variantes : primary (Me contacter), outline (En savoir plus)
 * Tailles : small, medium, large
 */
const Button = memo(({ 
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  
  // Classes de base communes
  const baseClasses = 'font-inter font-medium transition-all duration-300 cursor-pointer inline-flex items-center justify-center';
  
  // Classes selon la variante (utilise les styles CSS définis)
  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline'
  };
  
  // Classes selon la taille
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base', 
    large: 'px-8 py-4 text-lg'
  };
  
  // Classes pour l'état disabled
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : '';

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;