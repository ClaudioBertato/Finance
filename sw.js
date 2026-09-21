self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('finanza-app-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        // Aggiungi qui eventuali file CSS o JS locali se li carichi da file esterni
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
