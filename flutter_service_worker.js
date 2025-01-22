'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "ab1cacacfd0087ab749b4b10e30b23e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "4ab1752704fb94e6f06e257c283855ef",
"assets/assets/gifs/ant_thrower.gif": "fddaebab0fe5f59fc2a4d3175d5ec736",
"assets/assets/gifs/ant_scuba.gif": "1495c82327cd26d6114377c23394454f",
"assets/assets/gifs/ant_scary.gif": "33184415e16df49ea929ffec912ee12d",
"assets/assets/gifs/ant_tank.gif": "bdfd5ee5274e9864c94324cb4235ce23",
"assets/assets/gifs/ant_shortthrower.gif": "8173d61fdc6e82dd8575f16689c43723",
"assets/assets/gifs/ant_wall.gif": "707d379977a257d2be43b5dbc49ecfaa",
"assets/assets/gifs/ant_laser.gif": "fa6b6edb5b285fe481b54c48999675f5",
"assets/assets/gifs/ant_hungry.gif": "652d9490778896f4a07a8c05111fe500",
"assets/assets/gifs/ant_ninja.gif": "36678f74d97520af74f02d1c002ac8a0",
"assets/assets/gifs/bee.gif": "f54b21e0a9f855a1b3b559a554cb6e7e",
"assets/assets/gifs/ant_queen.gif": "bc415331ef50ffbd56746e7347d9d9a2",
"assets/assets/gifs/ant_longthrower.gif": "6017e4df248610b0b98353ff642af1fc",
"assets/assets/gifs/ant_fire.gif": "14ee524728d658fb9ef8435588396b78",
"assets/assets/gifs/ant_harvester.gif": "77b121458a35908013893f3c406eca7f",
"assets/assets/gifs/ant_slow.gif": "ded2812758c93a1ed61505dc6230d03f",
"assets/assets/gifs/ant_bodyguard.gif": "fe0abd4e86da52f55fc9225d580b6258",
"assets/assets/gifs/remove.png": "b98e0dc93c136bfcfc3b0b6ef239f19b",
"assets/assets/game_structure.json": "01b9d632436df0377c9e2f4a9eb03477",
"assets/assets/images/sky_2.png": "dfcf583e817e20b5fbc623c896023451",
"assets/assets/images/sky_1.png": "2cee66441611ce87c4cc1717dc09467d",
"assets/assets/images/sky_3.png": "ff8d90ef018f0e6201ff683efb628cf1",
"assets/assets/images/water.png": "81d9e3a3fd2e36a73855fb7be9be9ba1",
"assets/assets/images/ground_tile_2.png": "226735987be8ffc78385a851fa21bfb4",
"assets/assets/images/ground_tile_1.png": "7c3cbdfad27797a8b8b6b7cfacc239c2",
"assets/assets/images/splash.png": "fac697b07c87dcece3df26257dd09d24",
"assets/assets/images/ground_tile_3.png": "9367fa4ca4953e931e4864ad49b71098",
"assets/assets/images/swirl_pattern.png": "e756a00a1ec23a6f6b95dad00040455f",
"assets/assets/images/game_background.png": "3c1ab79b7e0eaebcab5dc86f53aea887",
"assets/AssetManifest.json": "6fdf3d96c5302ac0f0c11d2f2d3d0641",
"assets/AssetManifest.bin": "82ffd0c162fa79da4a38ef4af604aab2",
"assets/fonts/MaterialIcons-Regular.otf": "fd36a16819423120fc17ce4e8e081d88",
"assets/AssetManifest.bin.json": "9e1668ee70f93032978955fce7d056ab",
"main.dart.js": "63fa66b79478ea2c68c3026523c21c0a",
"flutter_bootstrap.js": "2edd22019b2d82a8c02251d0afa1c480",
"version.json": "16c7e3767583137292f15595a9883131",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"index.html": "ac2113a9b14ec41b049e9d3ce5378b04",
"/": "ac2113a9b14ec41b049e9d3ce5378b04",
"canvaskit/canvaskit.wasm": "e27b3442745a7282a5cf8572a3f0d5fe",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/skwasm.js.symbols": "a6bd1b7f2562a04db7cc22d151ad85fa",
"canvaskit/skwasm.wasm": "06280586b0c7423eb031389a7e814c16",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.wasm": "ecad3c5afedfd5f27f6a559f4a4e5d75",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "3d3bbf288ee82b5173c7b0ff77e94265",
"canvaskit/canvaskit.js.symbols": "e449cd46c52d2c804854790b396fd519"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
