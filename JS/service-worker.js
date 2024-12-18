const CACHE_NAME = 'coffee-irbid-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/images/espresso.jpg',
  '/images/americano.jpg',
  '/images/cappuccino.jpg',
  '/images/latte.jpg',
  '/images/tea.jpg',
  '/images/iced-coffee.jpg',
  '/images/iced-tea.jpg',
  '/images/soda.jpg',
  '/images/lemonade.jpg',
  '/images/cheese-sandwich.jpg',
  '/images/chicken-wrap.jpg',
  '/images/caesar-salad.jpg',
  '/images/pasta.jpg',
  '/images/chocolate-cake.jpg'
];

// تثبيت Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// جلب البيانات من الـ Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
