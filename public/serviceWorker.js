// This is the service worker with the Cache-first network strategy

const CACHE = "yabutech-portfolio-cache-v1";
const precacheResources = [
  '/',
  '/index.html',
  '/favicon.png',
  '/manifest.json',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/App.css',
  '/src/index.css',
  // Add other important assets here
];

self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");

  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      console.log("Service Worker: Caching Files");
      return cache.addAll(precacheResources);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  
  // Clean up old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Otherwise, fetch from network
      return fetch(event.request)
        .then((response) => {
          // Make a copy of the response
          const responseClone = response.clone();
          
          // Open cache
          caches.open(CACHE).then((cache) => {
            // Add response to cache
            cache.put(event.request, responseClone);
          });
          
          return response;
        })
        .catch(() => {
          // If both cache and network fail, serve offline page if it's a document request
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
    })
  );
});