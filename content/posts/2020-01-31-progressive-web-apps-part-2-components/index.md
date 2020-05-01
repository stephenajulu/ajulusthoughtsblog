---
title: "Progressive Web Apps Part 2: Components"
date: "2020-01-31"
---

Hey everyone. So i hope you checked out part 1 of this series, if you didn't here's the link: [**PWA Part 1**](https://ajulusthoughts.wordpress.com/2020/01/28/progressive-web-apps-part-1/). Today we will talk about part 2, components.

So component number one that is needed for a PWA to be a PWA is:

## The Web App Manifest

This is a JSON file responsible for the native app interface of PWAs. The developer will use the manifest to control the app’s display to its eventual user and its launch. This file also allows the developer to get a centralized location for your web app’s metadata.

It contains an app’s short and full names, links to icons, the starting URL, and the icon’s location, size, and type. The app’s developer can also use the manifest to define a theme color and splash screen for the app’s address bar.

## Service Worker

This supports the primary features of PWAs, including the background syncs, push notifications, and offline work mode. The service worker of PWAs is a JavaScript file that runs independently from the app or web page.

It will respond to the users’ exchanges with the PWA but is short term and only runs for specific events. The service worker of your PWA also allows the caching of an application shell so that it instantly loads on repeat user visits. It basically stores the website in cache allowing for faster loading times and in some cases can be used to make sure the website can be navigated through offline.

## The App’s Shell Architecture

Maintaining and building PWAs entails the separation of dynamic and static content. Shell architecture is the app’s underlying interface.

It will include the core design features that make the app run with no internet connection. This mainly works for JavaScript-heavy applications comprising a single page and apps that have changing content and moderately stable navigation.

## [**Structure of our example application - Mozilla**](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure)

The [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) website structure is quite simple: it consists of a single HTML file ([index.html](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html)) with basic CSS styling ([style.css](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css)), and a few images, scripts, and fonts. The folder structure looks like this:

![Folder structure of js13kPWA.](images/js13kpwa-directory.png)

### The HTML

From the HTML point of view, the app shell is everything outside the content section:

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>js13kGames A-Frame entries</title>
	<meta name="description" content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps.">
	<meta name="author" content="end3r">
	<meta name="theme-color" content="#B12A34">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="og:image" content="icons/icon-512.png">
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" href="style.css">
	<link rel="manifest" href="js13kpwa.webmanifest">
	<script src="data/games.js" defer></script>
	<script src="app.js" defer></script>
</head>
<body>
<header>
	<p><a class="logo" href="http://js13kgames.com"><img src="img/js13kgames.png" alt="js13kGames"></a></p>
</header>
<main>
	<h1>js13kGames A-Frame entries</h1>
	<p class="description">List of games submitted to the <a href="http://js13kgames.com/aframe">A-Frame category</a> in the <a href="http://2017.js13kgames.com">js13kGames 2017</a> competition. You can <a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa">fork js13kPWA on GitHub</a> to check its source code.</p>
	<button id="notifications">Request dummy notifications</button>
	<section id="content">
		// Content inserted in here
	</section>
</main>
<footer>
	<p>© js13kGames 2012-2018, created and maintained by <a href="http://end3r.com">Andrzej Mazur</a> from <a href="http://enclavegames.com">Enclave Games</a>.</p>
</footer>
</body>
</html>

The [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) section contains some basic info like title, description and links to CSS, web manifest, games content JS file, and app.js — that's where our JavaScript application is initialized. The [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) is split into the [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) (containing linked image), [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) page (with title, description and place for a content), and [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) (copy and links).

The app's only job is to list all the A-Frame entries from the js13kGames 2017 competition. As you can see it is a very ordinary, one page website — the point is to have something simple so we can focus on the implementation of the actual PWA features.

### The CSS

The CSS is also as plain as possible: it uses [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) to load and use a custom font, and it applies some simple styling of the HTML elements. The overall approach is to have the design look good on both mobile (with a responsive web design approach) and desktop devices.

### The main app JavaScript

The app.js file does a few things we will look into closely in the next articles. First of all it generates the content based on this template:

var template = "<article>\\n\\
    <img src='data/img/SLUG.jpg' alt='NAME'>\\n\\
    <h3>#POS. NAME</h3>\\n\\
    <ul>\\n\\
    <li><span>Author:</span> <strong>AUTHOR</strong></li>\\n\\
    <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>\\n\\
    <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>\\n\\
    <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>\\n\\
    <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>\\n\\
    </ul>\\n\\
</article>";
var content = '';
for(var i=0; i<games.length; i++) {
    var entry = template.replace(/POS/g,(i+1))
        .replace(/SLUG/g,games\[i\].slug)
        .replace(/NAME/g,games\[i\].name)
        .replace(/AUTHOR/g,games\[i\].author)
        .replace(/TWITTER/g,games\[i\].twitter)
        .replace(/WEBSITE/g,games\[i\].website)
        .replace(/GITHUB/g,games\[i\].github);
    entry = entry.replace('<a href=\\'http:///\\'></a>','-');
    content += entry;
};
document.getElementById('content').innerHTML = content;

Next, it registers a service worker:

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-examples/js13kpwa/sw.js');
};

The next code block requests permission for notifications when a button is clicked:

var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
});

The last block creates notifications that display a randomly-selected item from the games list:

function randomNotification() {
    var randomItem = Math.floor(Math.random()\*games.length);
    var notifTitle = games\[randomItem\].name;
    var notifBody = 'Created by '+games\[randomItem\].author+'.';
    var notifImg = 'data/img/'+games\[randomItem\].slug+'.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}

### The service worker

The last file we will quickly look at is the service worker: sw.js — it first imports data from the games.js file:

self.importScripts('data/games.js');

Next, it creates a list of all the files to be cached, both from the app shell and the content:

var cacheName = 'js13kPWA-v1';
var appShellFiles = \[
  '/pwa-examples/js13kpwa/',
  '/pwa-examples/js13kpwa/index.html',
  '/pwa-examples/js13kpwa/app.js',
  '/pwa-examples/js13kpwa/style.css',
  '/pwa-examples/js13kpwa/fonts/graduate.eot',
  '/pwa-examples/js13kpwa/fonts/graduate.ttf',
  '/pwa-examples/js13kpwa/fonts/graduate.woff',
  '/pwa-examples/js13kpwa/favicon.ico',
  '/pwa-examples/js13kpwa/img/js13kgames.png',
  '/pwa-examples/js13kpwa/img/bg.png',
  '/pwa-examples/js13kpwa/icons/icon-32.png',
  '/pwa-examples/js13kpwa/icons/icon-64.png',
  '/pwa-examples/js13kpwa/icons/icon-96.png',
  '/pwa-examples/js13kpwa/icons/icon-128.png',
  '/pwa-examples/js13kpwa/icons/icon-168.png',
  '/pwa-examples/js13kpwa/icons/icon-192.png',
  '/pwa-examples/js13kpwa/icons/icon-256.png',
  '/pwa-examples/js13kpwa/icons/icon-512.png'
\];
var gamesImages = \[\];
for(var i=0; i<games.length; i++) {
  gamesImages.push('data/img/'+games\[i\].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);

The next block installs the service worker, which then actually caches all the files contained in the above list:

self.addEventListener('install', function(e) {
  console.log('\[Service Worker\] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('\[Service Worker\] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

Last of all, the service worker fetches content from the cache if it is available there, providing offline functionality:

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('\[Service Worker\] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('\[Service Worker\] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

### The JavaScript data

The games data is present in the data folder in a form of a JavaScript object ([games.js](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js)):

var games = \[
    {
        slug: 'lost-in-cyberspace',
        name: 'Lost in Cyberspace',
        author: 'Zosia and Bartek',
        twitter: 'bartaz',
        website: '',
        github: 'github.com/bartaz/lost-in-cyberspace'
    },
    {
        slug: 'vernissage',
        name: 'Vernissage',
        author: 'Platane',
        twitter: 'platane\_',
        website: 'github.com/Platane',
        github: 'github.com/Platane/js13k-2017'
    },
// ...
    {
        slug: 'emma-3d',
        name: 'Emma-3D',
        author: 'Prateek Roushan',
        twitter: '',
        website: '',
        github: 'github.com/coderprateek/Emma-3D'
    }
\];

Every entry has its own image in the data/img folder. This is our content, loaded into the content section with JavaScript.

So i hope you learned something today. I'll see you on the next one. Progressive Web Apps Part 3: Required Features Checklist and to finish the mini series Progressive Web Apps Part 4: How to Build One.

Have a great one!
