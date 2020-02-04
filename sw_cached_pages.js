const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    'dom.js'
];

// call install event
self.addEventListener('install', (e) => {
    console.log('installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('cashing files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    )
});

// call activate event
self.addEventListener('activate', (e) => {
    console.log('activated');
    // remove unwanted caches
    e.waitUntil(
        caches.keys()
            .then((cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if(cache !== cacheName) {
                            console.log('service worker clearing old cache');
                            return caches.delete(cache);
                        }
                    })
                )
            }))
    )
});

// call fetch event (offline)
self.addEventListener('fetch', e => {
    console.log('fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});