import "regenerator-runtime";
import cacheHelper from "../scripts/utils/cache-helper";

const { assets } = global.serviceWorkerOption;

self.addEventListener("install", (event) => {
  event.waitUntil(cacheHelper.cachingAppShell([...assets, "./"]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(cacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith("http")) {
    //skip request
    event.respondWith(cacheHelper.revalidateCache(event.request));
  }
  // TODO: Add/get fetch request to/from caches
});
