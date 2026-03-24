-- Chatbot conversations table for lead capture and visitor engagement
create table if not exists chatbot_conversations (
  id uuid primary key default gen_random_uuid(),
  visitor_name text,
  visitor_email text,
  visitor_phone text,
  business_type text,
  messages jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for querying by email (lead lookup)
create index if not exists idx_chatbot_conversations_email
  on chatbot_conversations (visitor_email)
  where visitor_email is not null;

-- Index for recent conversations
create index if not exists idx_chatbot_conversations_created
  on chatbot_conversations (created_at desc);

-- RLS policies
alter table chatbot_conversations enable row level security;

-- Service role can do everything (API route uses admin client)
create policy "Service role full access"
  on chatbot_conversations
  for all
  using (true)
  with check (true);
