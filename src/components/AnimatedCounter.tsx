'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  decimals = 0,
  style,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );
  // Initialize display to the real final value so SSR and initial paint show correct numbers
  const [display, setDisplay] = useState(
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
  );

  // When value prop changes (e.g. billing toggle), update display immediately
  useEffect(() => {
    setDisplay(decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString());
    motionValue.set(value);
  }, [value, decimals, motionValue]);

  useEffect(() => {
    if (!isInView) return;
    // Animate from 0 to value when element enters view
    motionValue.set(0);
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsubscribe = rounded.on('change', (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}
