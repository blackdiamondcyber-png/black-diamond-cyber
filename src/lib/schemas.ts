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

export const chatMessageSchema = z.object({
  message: z.string().min(1, 'Message is required').max(2000),
  conversationId: z.string().uuid().optional(),
  visitorName: z.string().optional(),
  visitorEmail: z.string().email().optional(),
  businessType: z.string().optional(),
  visitorPhone: z.string().optional(),
});

export type ChatMessageInput = z.infer<typeof chatMessageSchema>;

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

/* -------------------------------------------------- */
/* Proposals & Contracts                               */
/* -------------------------------------------------- */

export const scopeItemSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  included: z.boolean(),
});

export const proposalCreateSchema = z.object({
  client_name: z.string().min(2, 'Client name is required'),
  client_email: z.string().email('Valid email required'),
  client_business: z.string().min(2, 'Business name is required'),
  project_type: z.enum(['website', 'growth', 'dominate']),
  scope_items: z.array(scopeItemSchema).min(1, 'At least one scope item required'),
  total_setup: z.number().min(0),
  monthly_recurring: z.number().min(0),
  timeline: z.string().optional(),
  notes: z.string().optional(),
});

export type ProposalCreateInput = z.infer<typeof proposalCreateSchema>;

export const proposalAcceptSchema = z.object({
  signature_image: z.string().min(1, 'Signature is required'),
  signer_name: z.string().min(2, 'Name is required'),
});

export type ProposalAcceptInput = z.infer<typeof proposalAcceptSchema>;

export const proposalGenerateSchema = z.object({
  client_business: z.string().min(2),
  industry: z.string().min(1),
  project_type: z.enum(['website', 'growth', 'dominate']),
  notes: z.string().optional(),
});

export type ProposalGenerateInput = z.infer<typeof proposalGenerateSchema>;

export const contractCreateSchema = z.object({
  proposal_id: z.string().uuid().optional(),
  client_name: z.string().min(2, 'Client name is required'),
  client_email: z.string().email('Valid email required'),
  contract_type: z.string().min(1, 'Contract type is required'),
  terms: z.object({
    description: z.string().min(1),
    paymentTerms: z.string().min(1),
    cancellationPolicy: z.string().min(1),
    deliverables: z.array(z.string()).min(1),
    additionalTerms: z.string().optional(),
  }),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

export type ContractCreateInput = z.infer<typeof contractCreateSchema>;

export const contractSignSchema = z.object({
  signature_image: z.string().min(1, 'Signature is required'),
  signer_name: z.string().min(2, 'Name is required'),
});

export type ContractSignInput = z.infer<typeof contractSignSchema>;
