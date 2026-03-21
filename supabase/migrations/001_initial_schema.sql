-- Black Diamond Cyber — Initial Schema
-- Run this in Supabase SQL Editor after creating the project

-- Clients table
create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  business_name text not null,
  owner_name text not null,
  email text not null,
  phone text,
  industry text not null,
  city text,
  state text,
  website_url text,
  stripe_customer_id text,
  subscription_tier text,
  subscription_status text default 'pending',
  site_url text,
  monthly_price numeric,
  setup_fee numeric,
  notes text
);

-- Contact form submissions
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  business_name text,
  industry text,
  message text,
  source text default 'website',
  status text default 'new'
);

-- Enable RLS
alter table clients enable row level security;
alter table contact_submissions enable row level security;

-- Service role full access policies
create policy "Service role full access on clients"
  on clients for all
  using (true)
  with check (true);

create policy "Service role full access on contact_submissions"
  on contact_submissions for all
  using (true)
  with check (true);

-- Indexes for common queries
create index if not exists idx_clients_email on clients(email);
create index if not exists idx_clients_stripe_id on clients(stripe_customer_id);
create index if not exists idx_clients_status on clients(subscription_status);
create index if not exists idx_submissions_status on contact_submissions(status);
create index if not exists idx_submissions_created on contact_submissions(created_at desc);
