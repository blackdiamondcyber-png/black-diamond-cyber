'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';

interface PhotoFile {
  name: string;
  url: string;
  size: number;
  created_at: string;
}

interface UploadTracker {
  name: string;
  status: 'uploading' | 'done' | 'error';
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [uploads, setUploads] = useState<UploadTracker[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const fetchPhotos = useCallback(async () => {
    const res = await fetch('/api/photos/list');
    if (res.ok) {
      const data = await res.json();
      setPhotos(data.photos ?? []);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
      await fetchPhotos();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MAX_SIZE = 10 * 1024 * 1024;
  const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];

  const handleFiles = async (files: FileList | File[]) => {
    if (!userId) return;

    const validFiles = Array.from(files).filter((f) => {
      if (!ACCEPTED_TYPES.includes(f.type)) return false;
      if (f.size > MAX_SIZE) return false;
      return true;
    });

    if (validFiles.length === 0) return;

    const trackers: UploadTracker[] = validFiles.map((f) => ({
      name: f.name,
      status: 'uploading' as const,
    }));
    setUploads((prev) => [...prev, ...trackers]);

    await Promise.all(
      validFiles.map(async (file, i) => {
        const { error } = await supabase.storage
          .from('client-uploads')
          .upload(`${userId}/${file.name}`, file, { upsert: true });

        setUploads((prev) =>
          prev.map((u) =>
            u.name === trackers[i].name
              ? { ...u, status: error ? 'error' : 'done' }
              : u,
          ),
        );
      }),
    );

    await fetchPhotos();

    setTimeout(() => {
      setUploads((prev) => prev.filter((u) => u.status === 'uploading'));
    }, 2000);
  };

  const handleDelete = async (fileName: string) => {
    const res = await fetch('/api/photos/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName }),
    });
    if (res.ok) {
      setPhotos((prev) => prev.filter((p) => p.name !== fileName));
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => {
    setDragOver(false);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      e.target.value = '';
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '80px' }}>
        <p style={{ fontSize: '14px', color: 'var(--t2)' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <span
          className="tag"
          style={{ marginBottom: '12px', display: 'inline-flex' }}
        >
          Your Photos
        </span>
        <h1
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(28px, 3.6vw, 42px)',
            color: 'var(--text)',
            fontWeight: 400,
            marginTop: '12px',
          }}
        >
          Upload Business Photos
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--t2)',
            lineHeight: 1.7,
            marginTop: '8px',
            maxWidth: '560px',
          }}
        >
          Team photos, office shots, service images, logos — anything you&apos;d
          like on your website.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        style={{
          border: `2px dashed ${dragOver ? 'var(--cyan)' : 'var(--hr)'}`,
          borderRadius: 'var(--rr)',
          padding: '48px 24px',
          textAlign: 'center',
          cursor: 'pointer',
          background: dragOver ? 'rgba(93,196,232,.04)' : 'var(--bg1)',
          transition: '.3s ease',
          marginBottom: '32px',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            color: dragOver ? 'var(--cyan)' : 'var(--t2)',
            fontWeight: 500,
            marginBottom: '8px',
          }}
        >
          {dragOver ? 'Drop files here' : 'Drag & drop photos here'}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--t3)' }}>
          or click to browse — JPEG, PNG, WebP, SVG up to 10MB each
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/svg+xml"
          multiple
          onChange={onFileChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* Upload indicators */}
      {uploads.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {uploads.map((u) => (
            <div
              key={u.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                background: 'var(--bg1)',
                border: '1px solid var(--hr)',
                borderRadius: 'var(--r)',
                fontSize: '12px',
              }}
            >
              {u.status === 'uploading' && (
                <span style={{ color: 'var(--cyan)' }}>Uploading...</span>
              )}
              {u.status === 'done' && (
                <span style={{ color: 'var(--green)' }}>Done</span>
              )}
              {u.status === 'error' && (
                <span style={{ color: '#EF4444' }}>Error</span>
              )}
              <span style={{ color: 'var(--t2)' }}>{u.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Counter */}
      <p
        style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'var(--t3)',
          marginBottom: '16px',
        }}
      >
        {photos.length} photo{photos.length !== 1 ? 's' : ''} uploaded
      </p>

      {/* Photo grid */}
      {photos.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '48px 24px',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
          }}
        >
          <p style={{ fontSize: '14px', color: 'var(--t3)' }}>
            No photos uploaded yet
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '12px',
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.name}
              style={{
                position: 'relative',
                borderRadius: 'var(--r)',
                overflow: 'hidden',
                background: 'var(--bg2)',
                border: '1px solid var(--hr)',
                aspectRatio: '1',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={photo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <button
                onClick={() => handleDelete(photo.name)}
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,.7)',
                  border: '1px solid var(--hr)',
                  color: 'var(--t2)',
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                  transition: '.2s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = '#EF4444';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = 'var(--t2)';
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
