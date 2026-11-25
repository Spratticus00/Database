/* Keeps Database working offline after the first visit.
   Shows the saved copy right away and fetches any update in the background,
   so a new version appears the next time the app is opened. */
const CACHE = 'database-v11';
const FILES = ['./', './index.html', './pdf-lib.min.js', './manifest.webmanifest',
  './apple-touch-icon.png', './icon-192.png', './icon-512.png', './favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const saved = await cache.match(e.request, {ignoreSearch: true});
    const fresh = fetch(e.request).then(res => {
      if (res && res.ok) cache.put(e.request, res.clone());
      return res;
    }).catch(() => saved);
    return saved || fresh;
  }));
});
