'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directions = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, filter: 'blur(8px)', ...directions[direction] }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)', y: 0, x: 0 }
          : {}
      }
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
