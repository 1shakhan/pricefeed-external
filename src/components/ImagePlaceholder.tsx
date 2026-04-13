import React, { useState } from 'react';
import { Icon, type IconName } from './Icon';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  iconName?: IconName;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  iconName = 'image' as IconName,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`image-placeholder ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: hasError ? 'var(--surface-container-high)' : 'transparent',
        borderRadius: 'inherit',
      }}
    >
      {!isLoaded && !hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--surface-container-low)',
          }}
        >
          <div
            style={{
              width: '40%',
              height: aspectRatio === 'auto' ? '2rem' : '40%',
              maxWidth: '4rem',
              background: 'linear-gradient(90deg, var(--surface-container-high) 25%, var(--surface-container-lowest) 50%, var(--surface-container-high) 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              borderRadius: 'var(--radius-sm)',
            }}
          />
        </div>
      )}

      {hasError ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: 'var(--on-surface-variant)',
            padding: '1rem',
          }}
        >
          <Icon
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              opacity: 0.5,
            }}
            name={iconName}
          />
          <span
            style={{
              fontSize: '0.75rem',
              opacity: 0.6,
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
            }}
          >
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: aspectRatio !== 'auto' ? '100%' : 'auto',
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            position: aspectRatio !== 'auto' ? 'absolute' : 'relative',
            top: aspectRatio !== 'auto' ? 0 : 'auto',
            left: aspectRatio !== 'auto' ? 0 : 'auto',
          }}
        />
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};
