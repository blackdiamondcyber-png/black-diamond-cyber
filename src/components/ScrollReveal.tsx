'use client';

import { type ReactNode } from 'react';

export function ScrollReveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
