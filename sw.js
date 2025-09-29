self.addEventListener(
    'fetch',
    function (evento) {
        console.log(evento.request.url);
        if (/\.jpg$/.test(evento.request.url)) {
            evento.respondWith(fetch('unicorn.jpg'));
        }
        else if (/\.png$/.test(evento.request.url)) {
            evento.respondWith(fetch('utp.jpg'));
        }
    }
)
var cacheName = 'cacheTest';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                'sw.js',
                'hola.jpg',
                'index.html',
                'lib1.js'
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