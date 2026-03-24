-- Proposals & Contracts tables for BDC admin dashboard
-- Run manually in Supabase SQL Editor

-- Proposals table
create table if not exists proposals (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_email text not null,
  client_business text not null,
  project_type text not null check (project_type in ('website', 'growth', 'dominate')),
  scope_items jsonb not null default '[]'::jsonb,
  total_setup numeric not null default 0,
  monthly_recurring numeric not null default 0,
  timeline text,
  status text not null default 'draft' check (status in ('draft', 'sent', 'viewed', 'accepted', 'declined', 'expired')),
  sent_at timestamptz,
  viewed_at timestamptz,
  accepted_at timestamptz,
  signature_data jsonb,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Contracts table
create table if not exists contracts (
  id uuid primary key default gen_random_uuid(),
  proposal_id uuid references proposals(id) on delete set null,
  client_name text not null,
  client_email text not null,
  contract_type text not null,
  terms jsonb not null default '{}'::jsonb,
  start_date date,
  end_date date,
  status text not null default 'draft' check (status in ('draft', 'sent', 'signed', 'active', 'cancelled', 'expired')),
  signature_data jsonb,
  signed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger proposals_updated_at
  before update on proposals
  for each row execute function update_updated_at_column();

create trigger contracts_updated_at
  before update on contracts
  for each row execute function update_updated_at_column();

-- Indexes
create index if not exists idx_proposals_status on proposals(status);
create index if not exists idx_proposals_client_email on proposals(client_email);
create index if not exists idx_contracts_status on contracts(status);
create index if not exists idx_contracts_proposal_id on contracts(proposal_id);

-- RLS (service role bypasses, but good practice)
alter table proposals enable row level security;
alter table contracts enable row level security;

-- Allow service role full access (admin API routes use service role key)
create policy "Service role full access on proposals"
  on proposals for all
  using (true)
  with check (true);

create policy "Service role full access on contracts"
  on contracts for all
  using (true)
  with check (true);
