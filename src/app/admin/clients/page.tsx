'use client';

import { useState, useCallback, useEffect } from 'react';
import type { Client } from '@/types';

const STATUS_OPTIONS = [
  { value: 'in_progress', label: 'In Progress' },
  { value: 'review', label: 'Review' },
  { value: 'live', label: 'Live' },
];

export default function AdminClientsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [clients, setClients] = useState<(Client & { project_status: string | null; status_detail: string | null })[]>([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState<string | null>(null);
  const [statusDetails, setStatusDetails] = useState<Record<string, string>>({});

  const handleAuth = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setAuthError('');
      setLoading(true);

      try {
        const res = await fetch(`/api/admin/clients?password=${encodeURIComponent(password)}`);
        if (!res.ok) {
          setAuthError('Incorrect password');
          setLoading(false);
          return;
        }
        const data = await res.json();
        setClients(data.clients || []);
        setAuthenticated(true);
      } catch {
        setAuthError('Failed to authenticate');
      } finally {
        setLoading(false);
      }
    },
    [password],
  );

  const fetchClients = useCallback(async () => {
    const res = await fetch(`/api/admin/clients?password=${encodeURIComponent(password)}`);
    if (res.ok) {
      const data = await res.json();
      setClients(data.clients || []);
    }
  }, [password]);

  const handleStatusChange = useCallback(
    async (clientId: string, newStatus: string) => {
      setUpdating(clientId);
      try {
        const res = await fetch('/api/admin/update-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clientId, status: newStatus, password }),
        });

        if (res.ok) {
          await fetchClients();
        }
      } catch {
        // Status update failed silently
      } finally {
        setUpdating(null);
      }
    },
    [password, fetchClients],
  );

  const handleDetailSave = useCallback(
    async (clientId: string) => {
      const detail = statusDetails[clientId] ?? '';
      const client = clients.find((c) => c.id === clientId);
      setUpdating(clientId);
      try {
        await fetch('/api/admin/update-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId,
            status: client?.project_status || 'in_progress',
            password,
            statusDetail: detail,
          }),
        });
        await fetchClients();
      } catch {
        // Save failed silently
      } finally {
        setUpdating(null);
      }
    },
    [password, fetchClients, statusDetails, clients],
  );

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!authenticated) return;
    const interval = setInterval(fetchClients, 30000);
    return () => clearInterval(interval);
  }, [authenticated, fetchClients]);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--bg)',
    border: '1px solid var(--hr-b)',
    borderRadius: 'var(--r)',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    marginBottom: '16px',
  };

  if (!authenticated) {
    return (
      <>
        <div className="amb">
          <div className="orb" />
          <div className="orb" />
        </div>
        <div className="grain" />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            minHeight: '100dvh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <div
              style={{
                background: 'var(--bg1)',
                border: '1px solid var(--hr)',
                borderRadius: 'var(--rr)',
                padding: '40px 32px',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span className="tag">Admin</span>
              </div>
              <h1
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '28px',
                  textAlign: 'center',
                  color: 'var(--text)',
                  marginBottom: '24px',
                  fontWeight: 400,
                }}
              >
                Client Manager
              </h1>
              <form onSubmit={handleAuth}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Admin password"
                  style={inputStyle}
                />
                {authError && (
                  <p style={{ fontSize: '12px', color: '#EF4444', marginBottom: '12px', textAlign: 'center' }}>
                    {authError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="bp"
                  style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? 'Verifying...' : 'Access'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="amb">
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="grain" />
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100dvh', padding: '24px' }}>
        <div className="c">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', paddingTop: '24px' }}>
            <div>
              <span className="tag" style={{ marginBottom: '12px', display: 'inline-flex' }}>
                Admin
              </span>
              <h1
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '32px',
                  color: 'var(--text)',
                  fontWeight: 400,
                  marginTop: '12px',
                }}
              >
                Client Manager
              </h1>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--t2)' }}>
              {clients.length} client{clients.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Table */}
          <div
            style={{
              background: 'var(--bg1)',
              border: '1px solid var(--hr)',
              borderRadius: 'var(--rr)',
              overflow: 'hidden',
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: '1px solid var(--hr)',
                    }}
                  >
                    {['Business', 'Email', 'Tier', 'Monthly', 'Status', 'Actions', 'Status Detail'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '14px 16px',
                          textAlign: 'left',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '1.6px',
                          textTransform: 'uppercase',
                          color: 'var(--t3)',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr
                      key={client.id}
                      style={{
                        borderBottom: '1px solid var(--hr)',
                      }}
                    >
                      <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>
                        {client.business_name}
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--t2)' }}>{client.email}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span
                          style={{
                            padding: '3px 10px',
                            borderRadius: '40px',
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '.5px',
                            textTransform: 'uppercase',
                            background: 'rgba(93,196,232,.08)',
                            color: 'var(--cyan)',
                            border: '1px solid rgba(93,196,232,.15)',
                          }}
                        >
                          {client.subscription_tier || 'N/A'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--text)' }}>
                        ${client.monthly_price ?? 0}/mo
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span
                          style={{
                            padding: '3px 10px',
                            borderRadius: '40px',
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '.5px',
                            textTransform: 'uppercase',
                            background:
                              client.subscription_status === 'active'
                                ? 'rgba(52,211,153,.08)'
                                : 'rgba(239,68,68,.08)',
                            color:
                              client.subscription_status === 'active' ? 'var(--green)' : '#EF4444',
                            border: `1px solid ${
                              client.subscription_status === 'active'
                                ? 'rgba(52,211,153,.15)'
                                : 'rgba(239,68,68,.15)'
                            }`,
                          }}
                        >
                          {client.subscription_status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <select
                          value={client.project_status || 'in_progress'}
                          onChange={(e) => handleStatusChange(client.id, e.target.value)}
                          disabled={updating === client.id}
                          style={{
                            padding: '8px 12px',
                            background: 'var(--bg)',
                            border: '1px solid var(--hr-b)',
                            borderRadius: '8px',
                            color: 'var(--text)',
                            fontSize: '12px',
                            fontFamily: 'inherit',
                            cursor: updating === client.id ? 'wait' : 'pointer',
                            outline: 'none',
                            opacity: updating === client.id ? 0.5 : 1,
                          }}
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <input
                            type="text"
                            placeholder="e.g. Finalizing homepage design"
                            value={statusDetails[client.id] ?? client.status_detail ?? ''}
                            onChange={(e) =>
                              setStatusDetails((prev) => ({ ...prev, [client.id]: e.target.value }))
                            }
                            style={{
                              padding: '8px 10px',
                              background: 'var(--bg)',
                              border: '1px solid var(--hr-b)',
                              borderRadius: '8px',
                              color: 'var(--text)',
                              fontSize: '11px',
                              fontFamily: 'inherit',
                              outline: 'none',
                              width: '200px',
                            }}
                          />
                          <button
                            onClick={() => handleDetailSave(client.id)}
                            disabled={updating === client.id}
                            style={{
                              padding: '8px 12px',
                              background: 'rgba(93,196,232,.1)',
                              border: '1px solid rgba(93,196,232,.2)',
                              borderRadius: '8px',
                              color: 'var(--cyan)',
                              fontSize: '10px',
                              fontWeight: 700,
                              letterSpacing: '.5px',
                              textTransform: 'uppercase',
                              cursor: updating === client.id ? 'wait' : 'pointer',
                              opacity: updating === client.id ? 0.5 : 1,
                              fontFamily: 'inherit',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {clients.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        style={{
                          padding: '40px 16px',
                          textAlign: 'center',
                          color: 'var(--t3)',
                          fontSize: '13px',
                        }}
                      >
                        No clients yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
