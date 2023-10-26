'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "17817945740eb766a6c019dab1f65840",
"index.html": "89b79beb4112b0691d4652a77e229bef",
"/": "89b79beb4112b0691d4652a77e229bef",
"main.dart.js": "db0d0783bf30eaf9b0910ab96b6c06db",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fa613defe47784d8281d7a3ce2c6538",
".git/config": "4854b359fc93a27d72292017b033c58e",
".git/objects/66/f1933e524473072b4226a4097656fe5b010ac2": "04f92bb69041bc949b07062187245235",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/315348ce87391bce379e1a7fd0a37b793eb17f": "aeaab93e737c1a8ffd2b228efe57a37e",
".git/objects/9e/9aef7e295225c44bd5616cba5e831751484002": "9cd739fe4bd9af27c71c3f95ac3fc07b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/083b410750e5b7db30cd06d8816cace5074522": "488766f064ef0dac421891684b67ce6c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/eb773c1d56e2ca33d9250f414935ccf84adac1": "27b3172ebb4ce8ada766a717ea4b05f0",
".git/objects/9d/0a3acd978371b8cc9f7b48a9bfde6ae1de0cc6": "2f622ef1d6e51108e73a07d1b7c974b1",
".git/objects/a3/37597fe438d5082fb130fee21f177406063e28": "d1ccc49b6f87c6e240b482bcb90a4f1f",
".git/objects/b5/36221e9eb56597158f44652534cc84d6dc9de4": "8b8bfc6defd3ad279f87056eaa8b37df",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/f7dbaf7f7db802ccaab01c46fa9d787faef266": "c849589ac52b2174587ea2ce071297cf",
".git/objects/bb/265618c5f93038f25277cc5cef8acd30ec5ef3": "57ecc24fbb86b5b163d426bbd0f947c0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/2b61518238c158b4482a0b0dc57f2ec6aa0f75": "cc33066e1c64c46cb408a75876fef454",
".git/objects/df/7377f79aa049ec681f8bd48188ed4508716866": "9f66c3bf31425c047f380c7fab12b6bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b18a346c54a3e111560ae70b2be6f0857ac4bb": "70a6b303b0bf5f6c5fa730fc01b8dc43",
".git/objects/c1/e9055f4e9a932e7e158b546e40fcaef35fd674": "556fc3c43fa031df4c484e16d1fed2c9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/6d56a768313bc8936c4f9bd6968003cf04545e": "5ad1df442ff6e304115217fb17eccc31",
".git/objects/7d/edb2218ec58c3f3c2ea4fa7aaee71d0ccf55d3": "b9faa5646ac34a6da126bc7bb1cf46bd",
".git/objects/29/56c71fa0a7af4d678bea0b98ca6c996dc54c85": "597df04b7d6f1ac05e168b02eddf9eb1",
".git/objects/42/b69f7c5659bb8d604dd24993d9b40b49417469": "b8282c902f718a1e044ef3731fbab3c5",
".git/objects/28/91753c2f599ca3aafbb71262a3cc3e9e22dd34": "8e087474bb595d9a794565caa6bd8369",
".git/objects/17/60566fce86d2906e7dd1b867fb28482fea7c26": "a41e87b96f06beddf153e8acf144d18d",
".git/objects/17/37454c3491ca270c396dded86df3db3a59e88d": "6463973609d45ab371af38ebf32e7a17",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/97bd58b3010e0251e5ff04edd9f0423be8442d": "66b4bae35ec81a7d106004c9aee8c40b",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/54a522c568706e6ee7c113a1ede40ea6cb6a81": "a3d752c2c678bf368af6bab95f855a1a",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/9a/63e12d688f99d57ba5a108d382f650b4856487": "0f0df8fc93664abb5855685ba8b958b3",
".git/objects/31/ab71a13f285cb6b54667842f5b3cb982dc7e19": "aa4beae98f0da49729159936b66eaebc",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/b0423382be061c4a4580974522560a398db2e0": "d3ab7edabf6d6f5436175838f62a3590",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/a1b79f72aa44130e3c80e543c97e91a39b9fb2": "bd624cbcb073341081c79e050861246b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/46d6ad06acb1f18723d164ebfe597c7fbb85b9": "5d6b593dda60aa2d0a4217ec558f1003",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/c74c37c9efb584b93694ca993fabaf1a652f65": "eec966544380142e0661017ba31a764b",
".git/objects/f6/71cb856dcd20483455b1e831473d3731a02e14": "5b93674a215aa1a2c4f0a52adda9c395",
".git/objects/f6/1abf698ee95610c24a233d9b56cf7909ffae74": "bbe63de73c8e3c23d78103a3db8ecf52",
".git/objects/2c/d621ff3d84ae8b798830d4e184d1d3438ce787": "448538388f8fa80dd3f977ade91489f1",
".git/objects/1b/11ffadf162f31034f4b10626b0969a2a973f57": "5d169b0fa8b5dd88581dba3501a698ec",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/7f82ff77dcd3fc9231122157f23a52c3979ef2": "de85325c6cd029741bd2a271d647cc15",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8c/21656bec3c8033b9ac359caf6cf86da2842419": "e07a0aad090e325889f53e179c08f969",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/49/411e893fcae9a641e15142ca44f601b92cab0f": "30bdd8a2fb58b9bcaeab082f47adb5f3",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "30627c5b17f6c117570d5ebbf0e3d9d8",
".git/logs/refs/heads/master": "41b3d08e7ad71c4fc084f8b8ea0bb7fd",
".git/logs/refs/remotes/origin/master": "e3026f4b3275c2056c4b4fcc1447ce15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "db1d0c14c038374d994cde21699953ea",
".git/refs/remotes/origin/master": "db1d0c14c038374d994cde21699953ea",
".git/index": "b01ee00991be759af9795df7bc2fbcba",
".git/COMMIT_EDITMSG": "3caf974da7c4b37165013f9aba546992",
"assets/AssetManifest.json": "e38527a48a503c863e8105733b80daf2",
"assets/NOTICES": "d7c5b4967a86d76ded87d79441579606",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "11c2bc782e33dc130e68146c617bd9cc",
"assets/fonts/MaterialIcons-Regular.otf": "d4384d72ac8587a0aa600b109b0265d2",
"assets/assets/applePayLogo.png": "b75460a6b6e7999e80b346416e528fb6",
"assets/assets/ghostwriter-logo.png": "0a55f76097431d2933d7f378a5705183",
"assets/assets/motion-text-logo-white.png": "b21d9ce5379fbb1ded7d00765af25f19",
"assets/assets/blank-image-asset@3x.png": "aa29bdb10fac8c2bf663d120f9e07b9b",
"assets/assets/googlePayLogo.png": "54f42984faac170a0a89039c7c08b9b3",
"assets/assets/blank-image-asset@2x.png": "f59d2e7ceb3c5ebc3a7e4740d6ab3422",
"assets/assets/ghostwriter-logo@2x.png": "503c9367457dec19fe4c36a1dba746f8",
"assets/assets/blank-image-asset.png": "2ecdb58979fde5f4afecc24fc6d1c258",
"assets/assets/spaceboat-logo.png": "a989bc686f8b2fd67f435fd7e8b17814",
"assets/assets/ghostwriter-logo@3x.png": "8d2468dca4080953655e9df7e573a6ae",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
