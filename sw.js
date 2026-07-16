// Service Worker מינימלי למערכת בטיחות OMIS
// מטרתו העיקרית: לאפשר ל-Chrome/Edge להציע התקנת PWA (אייקון בשורת הכתובת).
// לא מבצע caching אגרסיבי כדי שהאפליקציה תמיד תיטען עדכנית מהרשת.

const CACHE_NAME = "omis-safety-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// fetch handler מינימלי - עובר ישר לרשת, בלי caching (כדי שתמיד תקבל את הגרסה העדכנית)
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
