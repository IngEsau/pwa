var cacheName = 'cacheTest';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                './sw.js',
                './index.html',
                './lib1.js',
                './hola.jpg',
                './iconos/homescreen192.png',
                './iconos/homescreen144.png',
                './unicornio.jpg',
                './favicon.ico' 
            ]))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});