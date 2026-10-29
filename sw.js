// Minimaler Service Worker: reicht alle Anfragen unverändert an das Netz durch (kein Zwischenspeicher).
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
