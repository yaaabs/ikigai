// This is the service worker with the Cache-first network strategy

const CACHE = "yabutech-portfolio-cache-v5.0.1";

const precacheResources = [
  '/',
  '/index.html',
  '/favicon.png',
  '/manifest.json',
];

self.addEventListener("install", (event) => {
  // Install should not fail if one resource 404s (hashed assets can change between deploys)
  console.log("Service Worker: Installed");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      console.log("Service Worker: Caching Files (best-effort)");
      // Use allSettled so a single failing fetch doesn't reject the whole install
      return Promise.allSettled(
        precacheResources.map((url) =>
          fetch(url, { cache: 'no-cache' })
            .then((res) => {
              if (!res || !res.ok) return Promise.resolve();
              return cache.put(url, res.clone());
            })
            .catch(() => Promise.resolve())
        )
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  // Take control immediately so clients use the new service worker
  self.clients && self.clients.claim && self.clients.claim();

  // Clean up old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE) {
            console.log("Service Worker: Clearing Old Cache", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // For navigation requests (HTML pages), prefer network-first then fall back to cached index.html
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          // Update cache with latest HTML so future navigations can be served from cache when offline
          if (networkResponse && networkResponse.ok) {
            const copy = networkResponse.clone();
            caches.open(CACHE).then((cache) => cache.put('/', copy));
          }
          return networkResponse;
        })
        .catch(() => caches.match('/').then((cached) => cached))
    );
    return;
  }

  // For other requests use cache-first with background update (stale-while-revalidate)
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      const networkFetch = fetch(req)
        .then((networkResponse) => {
          // Only cache successful responses
          if (!networkResponse || !networkResponse.ok) return networkResponse;
          const respClone = networkResponse.clone();
          caches.open(CACHE).then((cache) => cache.put(req, respClone));
          return networkResponse;
        })
        .catch(() => undefined);

      // If we have a cached response, return it immediately and also try to update cache in background
      if (cachedResponse) {
        // trigger network update but don't block the response
        networkFetch.then(() => {});
        return cachedResponse;
      }

      // No cache, wait for network (or fail gracefully)
      return networkFetch.then((r) => r).catch(() => new Response('', { status: 503, statusText: 'Service Unavailable' }));
    })
  );
});

// Allow the page to message the SW to trigger skipWaiting (install immediately)
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});