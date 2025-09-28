import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service worker registration and update flow to auto-apply updates
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js').then((registration) => {
      console.log('Service Worker registered:', registration.scope);

      // If there's an updated SW waiting, ask it to skipWaiting
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New update available, tell it to activate
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });
    }).catch((err) => {
      console.warn('Service Worker registration failed:', err);
    });

    // When the controlling service worker changes, reload the page once to use the new SW
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('Service worker controller changed — reloading to apply update');
      // Avoid infinite reload loop by checking a flag
  if ((window as unknown as { __sw_reloaded?: boolean }).__sw_reloaded) return;
  (window as unknown as { __sw_reloaded?: boolean }).__sw_reloaded = true;
      window.location.reload();
    });
  });
}
