import { z } from 'zod';

export const auditFormSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  websiteUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  cityState: z.string().min(2, 'Please enter your city and state'),
  industry: z.string().min(1, 'Please select an industry'),
  email: z.string().email('Please enter a valid email address'),
});

export type AuditFormInput = z.infer<typeof auditFormSchema>;

export interface RankingResult {
  score: number;
  position: number | null;
  query: string;
  details: string;
}

export interface ReputationResult {
  score: number;
  rating: number | null;
  reviewCount: number | null;
  details: string;
}

export interface PerformanceResult {
  score: number;
  loadTime: string | null;
  mobileScore: number | null;
  accessibilityScore: number | null;
  seoScore: number | null;
  details: string;
}

export interface DirectoryResult {
  score: number;
  found: string[];
  missing: string[];
  details: string;
}

export interface AuditResult {
  overall: number;
  ranking: RankingResult;
  reputation: ReputationResult;
  performance: PerformanceResult;
  directories: DirectoryResult;
}

export function hashScore(input: string, min: number, max: number): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const normalized = (Math.abs(hash) % 1000) / 1000;
  return Math.round(min + normalized * (max - min));
}

export function calculateOverall(
  ranking: number,
  reputation: number,
  performance: number,
  directories: number,
): number {
  return Math.round(
    ranking * 0.3 + reputation * 0.25 + performance * 0.25 + directories * 0.2,
  );
}

export const AUDIT_INDUSTRIES = [
  'Dental',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Med Spa',
  'Veterinary',
  'Landscaping',
  'Other',
] as const;

export const DIRECTORIES = [
  'Yelp',
  'Google Business Profile',
  'Healthgrades',
  'BBB',
  'YellowPages',
  'Facebook',
] as const;
