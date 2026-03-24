// ============================================================
// Black Diamond Cyber — Service Worker
// Bump SW_VERSION and CACHE_NAME after each deploy.
// ============================================================

const SW_VERSION = "1.0.0";
const CACHE_NAME = "bdc-cache-v1";

const STATIC_ASSETS = ["/offline.html"];

// -----------------------------------------------------------
// Install: pre-cache the offline fallback
// -----------------------------------------------------------
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// -----------------------------------------------------------
// Activate: delete old caches, claim clients
// -----------------------------------------------------------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// -----------------------------------------------------------
// Fetch strategy
//   - API routes & HTML pages: network-first
//   - Static assets (CSS, JS, fonts, images): cache-first
// -----------------------------------------------------------
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) return;

  // Network-first for API routes
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Network-first for HTML navigation requests
  if (request.mode === "navigate") {
    event.respondWith(
      networkFirst(request).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // Cache-first for static assets
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Default: network-first
  event.respondWith(networkFirst(request));
});

// -----------------------------------------------------------
// Helpers
// -----------------------------------------------------------
function isStaticAsset(pathname) {
  return /\.(css|js|woff2?|ttf|otf|eot|png|jpe?g|gif|svg|webp|avif|ico)$/i.test(
    pathname
  );
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response("", { status: 408 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw new Error("Network unavailable and no cache");
  }
}
