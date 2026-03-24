'use client';

import { useRef, useState } from 'react';

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  fallbackGradient?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function VideoBackground({
  src,
  poster,
  fallbackGradient = 'linear-gradient(135deg, #06080C 0%, #0C1420 25%, #12151E 50%, #0A1018 75%, #06080C 100%)',
  overlayOpacity = 0.6,
  children,
  className,
  style,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Animated gradient fallback */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: fallbackGradient,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 12s ease infinite',
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* Video element (only rendered if src provided) */}
      {src && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          onCanPlay={() => setVideoLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `rgba(6, 8, 12, ${overlayOpacity})`,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
      `}} />
    </div>
  );
}
