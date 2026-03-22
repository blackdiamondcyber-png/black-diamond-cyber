-- Migration 002: Add auth user link and project status to clients table
-- Run this in Supabase SQL Editor (pearson_403@hotmail.com account)

-- Add new columns
ALTER TABLE clients
  ADD COLUMN IF NOT EXISTS auth_user_id uuid REFERENCES auth.users(id),
  ADD COLUMN IF NOT EXISTS project_status text DEFAULT 'in_progress',
  ADD COLUMN IF NOT EXISTS project_status_updated_at timestamptz;

-- Index for auth user lookup
CREATE INDEX IF NOT EXISTS idx_clients_auth_user_id ON clients(auth_user_id);

-- RLS: Allow authenticated users to read their own client record
CREATE POLICY "clients_select_own"
  ON clients FOR SELECT
  TO authenticated
  USING (auth.uid() = auth_user_id);

-- Keep existing service role full access (already enabled)
-- The service_role key bypasses RLS automatically

-- Configure Supabase Auth settings (do this in Dashboard → Auth → URL Configuration):
-- Site URL: https://bd-cyber.com
-- Redirect URLs: https://bd-cyber.com/auth/callback
