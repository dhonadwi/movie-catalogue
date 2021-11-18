import "regenerator-runtime";
import cacheHelper from "../scripts/utils/cache-helper";

const { assets } = global.serviceWorkerOption;

self.addEventListener("install", (event) => {
  event.waitUntil(cacheHelper.cachingAppShell([...assets, "./"]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(cacheHelper.deleteOldCache());
  console.log("delete cache");
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith("http")) {
    event.respondWith(cacheHelper.revalidateCache(event.request));
  }
});
