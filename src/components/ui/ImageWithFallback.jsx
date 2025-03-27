import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, style, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className={`relative ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            ...style,
            imageRendering: 'auto',
            WebkitFontSmoothing: 'antialiased',
          }}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;