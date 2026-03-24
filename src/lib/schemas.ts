import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  businessName: z.string().optional(),
  industry: z.string().min(1, 'Please select an industry'),
  message: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const checkoutSchema = z.object({
  tier: z.enum(['starter', 'professional', 'premium', 'cinematic']),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;

export const generateSiteSchema = z.object({
  practiceName: z.string().min(2),
  ownerName: z.string().min(2),
  services: z.array(z.string()).min(1),
  location: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  brandPrimary: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .optional(),
  brandSecondary: z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .optional(),
  description: z.string().optional(),
});

export type GenerateSiteInput = z.infer<typeof generateSiteSchema>;

export const INDUSTRIES = [
  'Dental',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Med Spa',
  'Veterinary',
  'Landscaping',
  'Auto Repair',
  'Chiropractic',
  'Law Firm',
  'Real Estate',
  'Other',
] as const;
