if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"c1UIc337eLYDQiYPjfyUn"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/_buildManifest.js",revision:"43b6d0608b019ed42df631159a83acba"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/_apollo_example.js",revision:"210cb20866fb2eeb7f9d20a0cf8fab83"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/_app.js",revision:"83cdd3abbecd0514034db96589597e4f"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/_error.js",revision:"7d8c2952f43cf454e47c57fccb6c3585"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/about-ava.js",revision:"838f13c4001c1637f482caa96a6a4a11"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/add-to-homescreen.js",revision:"22c70d18e2f6957b625c04ea3599dc79"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/am-i-in-an-abusive-relationship.js",revision:"9cc8c812b0fa0f30ff2c3405891b4bae"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/contact.js",revision:"c4e441cc39d2efa45ab30fdbbedc2c25"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/cookies.js",revision:"9e1542af12a0b0db40794cdceaf2e06e"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/index.js",revision:"bd25ab8902c4e3a1d09832462425fa3e"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/landing.js",revision:"5fa1edafad9e2e66befc34081281876f"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/onboarding.js",revision:"521e2977752d343e6be20a270d5d2064"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/privacy.js",revision:"0f0fc8c60efb9fa42192de6185648840"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/self-care.js",revision:"887a485b45227956635911766ff13f88"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/self-care/%5Btechnique%5D.js",revision:"56912785bcaa4c32b6a0a91d48bb30f7"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/stories.js",revision:"b2850b1abf887d4e0c6441d08b52f414"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/stories/%5Bstory%5D.js",revision:"fff07c56b622faede7b533c2f616ac08"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/stories/share-your-story.js",revision:"67ae5222fd6bcbf0d6f50cbf3dbfe662"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/support/%5Bcategory%5D.js",revision:"4fc7fd39dc2343520705a3a69465d3b9"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/support/%5Bcategory]/%5Bservice%5D.js",revision:"0b8b3cd52356f6cf2c628d4db3c52606"},{url:"/_next/static/c1UIc337eLYDQiYPjfyUn/pages/support/%5Bcategory]/filter.js",revision:"3e3f60c52b30284ccbb6daa93709e4d0"},{url:"/_next/static/chunks/0f1f980099342eb3bdd4d402e302f95490671392.7f8426fd65106e42641d.js",revision:"56c0709f08884b37acb536a8f6c9b2bb"},{url:"/_next/static/chunks/1da1af52b0b34384ee6d1ff4abe7804e82cc63a5.88b05b0184d160ab1732.js",revision:"abd7e64124f82d8e148ff4007f3ff900"},{url:"/_next/static/chunks/43dd7b64b4ed0aca9653a32bc3a19605bbe2ca82.7ffc938a2030fbeefdcf.js",revision:"ae5790b9fa501b6a4bd30eb546b8103f"},{url:"/_next/static/chunks/6920c70a6512e6731311e252a79998dabfe4b28c.60acf6099a3a4923090e.js",revision:"57a1512008ebbf32f0717361e0d4f9dd"},{url:"/_next/static/chunks/8070d1318bc177f54d0bf794e4da36124f6cdecc.7c5308416790f2b9a650.js",revision:"ac94371b7965767ea30d9c004d170db1"},{url:"/_next/static/chunks/a6805eef.c3e0d77a914e49ba43f7.js",revision:"652b897c0616e0afd2674b5c374972e8"},{url:"/_next/static/chunks/b29924f5feea32e7993a31af843e20c62ccb8030.1377f28eb8968ae15bb6.js",revision:"5ce9ff5c4ff437f1d1e37ce098d4addd"},{url:"/_next/static/chunks/c5d0e193c34ead0073c9844fd249b651fc0b7288.71e2d81aafe050506146.js",revision:"4eaae050fdc7387f186664a800c4efc7"},{url:"/_next/static/chunks/d5f5a0ac036f4b28e4dac2b7b42ba507b49e09ff.f13bb10e797bdb8c55e4.js",revision:"67e814c5854b2c9470ab988d6b7053b8"},{url:"/_next/static/chunks/f5fe3b7576817267c50c957a8d9861b890a878b2.c156fa2c5e5691d2ccb5.js",revision:"62ded101060f451a346b03ab03be1a94"},{url:"/_next/static/chunks/framework.4dd1003cc9c949c7fcd3.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/chunks/styles.1ea5d065deebfd0d77d6.js",revision:"31ca9b52457041c81237ac92a03b4a61"},{url:"/_next/static/css/a6805eef.47fcc592.chunk.css",revision:"36dbe39ea77581b226408a6a9e28bd14"},{url:"/_next/static/runtime/main-9bc10f5a2b6f230dd644.js",revision:"5b21ce3dd5531c8530c854cbd07030e4"},{url:"/_next/static/runtime/polyfills-6d6f52812362f087d75f.js",revision:"9bdf6a23a3e2492ba9e5c4703606e871"},{url:"/_next/static/runtime/webpack-83bd83ab777f80a6c75c.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-chrome-192x192.png",revision:"c87b3ef459c3d9e2ca89a7ce214ea64d"},{url:"/android-chrome-512x512.png",revision:"efa98c7406efc5721bade2c73ffb7ec5"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/fonts/caladea-v1-latin-regular.eot",revision:"8c187d3ae793150ec4c8054145080d49"},{url:"/fonts/caladea-v1-latin-regular.svg",revision:"eafdfaa360fef8bd125a93ffa3249499"},{url:"/fonts/caladea-v1-latin-regular.ttf",revision:"77ecd4059bfe360cede8f1b02b456404"},{url:"/fonts/caladea-v1-latin-regular.woff",revision:"ec24dc571a9b42b75a902dcd8ea9f038"},{url:"/fonts/caladea-v1-latin-regular.woff2",revision:"0610fc99421e0e6ca4c4c7c14ae2f43d"},{url:"/fonts/karla-v13-latin-700.eot",revision:"9c56478b8cf084983b407c96f657a2d1"},{url:"/fonts/karla-v13-latin-700.svg",revision:"a2332f3209bfe951084c20133c2e5a5d"},{url:"/fonts/karla-v13-latin-700.ttf",revision:"561294dc58294f56b0983bb5619d93da"},{url:"/fonts/karla-v13-latin-700.woff",revision:"a44f3c2705f046cd0afac4bfc2fe1eed"},{url:"/fonts/karla-v13-latin-700.woff2",revision:"57214306eebeea47c94e695a778c3f7b"},{url:"/fonts/karla-v13-latin-regular.eot",revision:"84572d5ccb359b1ae5481312e8db43ab"},{url:"/fonts/karla-v13-latin-regular.svg",revision:"581de7ca06f14fd645f791c8a283be71"},{url:"/fonts/karla-v13-latin-regular.ttf",revision:"61c4f9d8015142b069ab5e7f838594b4"},{url:"/fonts/karla-v13-latin-regular.woff",revision:"1ba33869ba2e0b430fb9cdc948dd0d54"},{url:"/fonts/karla-v13-latin-regular.woff2",revision:"c4aa4ca22f0c3e52b9e4593f63ca57a7"},{url:"/fonts/porpara-regular.ttf",revision:"49b774e03bef78a8bf8942a43fd363c9"},{url:"/icons/arrow.svg",revision:"c80dbb2c7c8ef269eb1da98c43b932f9"},{url:"/icons/back-black.svg",revision:"ab5a3aa611e11274a50ef988d38b09e5"},{url:"/icons/clock.svg",revision:"abde8858933f38dbca2c682c8499df80"},{url:"/icons/email.svg",revision:"c721c9873dcdb77b8b855ee0081a1680"},{url:"/icons/exit-white.svg",revision:"8487fd73fa6cb6e7fbf687fd9a845a50"},{url:"/icons/forwardArrow.svg",revision:"e230f09c9e2bc1337ef785dfbbcee2a2"},{url:"/icons/heart-black.svg",revision:"58370e8d994fd4619735f587e1a6e1ba"},{url:"/icons/icon-128x128.png",revision:"db7481a04968b3ad4716436d30b3e409"},{url:"/icons/icon-144x144.png",revision:"689a1926530ed6ca26db537029c1dfd7"},{url:"/icons/icon-152x152.png",revision:"98af072da209b3b297308717b06ea86c"},{url:"/icons/icon-192x192.png",revision:"7ab8c82581552c7558c5b009ffcb3cd2"},{url:"/icons/icon-384x384.png",revision:"aae6d1f552c78e06bf42aae2462a98fa"},{url:"/icons/icon-512x512.png",revision:"837ab4469c705c188326cec571ecb227"},{url:"/icons/icon-72x72.png",revision:"cb6e3fb9db7db52f0986da1ff9bab188"},{url:"/icons/icon-96x96.png",revision:"7d8348b60cdd985bd24b48cb56855c1a"},{url:"/icons/info.svg",revision:"bc2c7b826d1d41884dcd2e224d33f01b"},{url:"/icons/phone.svg",revision:"6854b54332adb9d004a730dc6fecd95e"},{url:"/icons/right-arrow.svg",revision:"1de339a612f220fda976721291a7a5ee"},{url:"/icons/url.svg",revision:"de9d153bbe15ab7d7121eef87bf12ca8"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/site.webmanifest",revision:"86e7fdaa2bd5af2341bbe0f006f05576"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
