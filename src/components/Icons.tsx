/**
 * Icons.tsx — Black Diamond Cyber shared SVG icon system
 * Thin-stroke monoline SVGs, Lucide/Heroicons style
 * Default: 24px, #5DC4E8 (--cyan)
 */

import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

const defaults = {
  size: 24,
  color: '#5DC4E8',
  strokeWidth: 1.75,
};

// ── Trophy / Award ──────────────────────────────────────────────
export const IconTrophy: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M6 9H4.5a2.5 2.5 0 000 5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 010 5H18" />
    <path d="M6 3h12v10a6 6 0 01-12 0V3z" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
);

// ── Lightning / Speed ────────────────────────────────────────────
export const IconBolt: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// ── Diamond / Ownership ──────────────────────────────────────────
export const IconDiamond: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M6 3h12l4 6-10 13L2 9z" />
    <path d="M2 9h20" />
    <path d="M12 22V9" />
    <path d="M6 3l3 6" />
    <path d="M18 3l-3 6" />
  </svg>
);

// ── Trending Up / Growth ─────────────────────────────────────────
export const IconTrendingUp: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

// ── Robot / AI ───────────────────────────────────────────────────
export const IconBot: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <path d="M8 15h.01" />
    <path d="M16 15h.01" />
    <path d="M8 19h8" />
  </svg>
);

// ── Star / Reviews ───────────────────────────────────────────────
export const IconStar: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ── Phone / Missed Call ──────────────────────────────────────────
export const IconPhone: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.74 2.02z" />
  </svg>
);

// ── Bar Chart / Analytics ────────────────────────────────────────
export const IconBarChart: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

// ── Map Pin / Local SEO ──────────────────────────────────────────
export const IconMapPin: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ── Message / Chat ───────────────────────────────────────────────
export const IconMessageSquare: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

// ── Sparkle / AI Generation ──────────────────────────────────────
export const IconSparkle: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M12 2l2.4 7.2H22l-6.2 4.6 2.4 7.2L12 17l-6.2 4L8.2 13.8 2 9.2h7.6L12 2z" />
  </svg>
);

// ── Activity / Dashboard ─────────────────────────────────────────
export const IconActivity: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

// ── Layers / Before–After ────────────────────────────────────────
export const IconLayers: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// ── Globe / Website ──────────────────────────────────────────────
export const IconGlobe: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

// ── Shield / Security / Guarantee ───────────────────────────────
export const IconShield: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// ── Users / Local Business ───────────────────────────────────────
export const IconUsers: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

// ── Clock / Delivery ─────────────────────────────────────────────
export const IconClock: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ── Check Circle / Guarantee ─────────────────────────────────────
export const IconCheckCircle: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ── Code / Ownership ─────────────────────────────────────────────
export const IconCode: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// ── Book / Research ──────────────────────────────────────────────
export const IconBook: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
);

// ── Gauge / PageSpeed ────────────────────────────────────────────
export const IconGauge: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M12 22a9 9 0 009-9H3a9 9 0 009 9z" />
    <path d="M12 13V7" />
    <path d="M5.636 5.636l1.414 1.414" />
    <path d="M16.95 7.05l1.414-1.414" />
    <path d="M3 13h2" />
    <path d="M19 13h2" />
  </svg>
);

// ── Zap Circle / AI Powered ──────────────────────────────────────
export const IconZapCircle: React.FC<IconProps> = ({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <circle cx="12" cy="12" r="10" />
    <path d="M13 8l-4 5h6l-4 5" />
  </svg>
);
