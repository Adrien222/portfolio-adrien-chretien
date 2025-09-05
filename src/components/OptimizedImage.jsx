import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, loading = "lazy", ...props }) => {
  const [imageError, setImageError] = useState(false);
  
  // Génère les chemins WebP et fallback
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp').replace('/images/', '/images/webp/');
  
  return (
    <picture>
      {!imageError && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onError={() => setImageError(true)}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;