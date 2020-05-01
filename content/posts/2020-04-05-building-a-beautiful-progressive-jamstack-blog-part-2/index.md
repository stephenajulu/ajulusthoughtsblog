---
title: "Building a Beautiful Progressive JAMstack Blog Part 2: Day 4 to 7"
date: "2020-04-05"
---

Hey guys? Today we continue to build building the beautiful, fast, SEO optimized, progressive JAMstack blog.

If you didn't check out part 1, kindly go do so here: [**https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/**](https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/)

So we are continuing with Part 2.

Shall we begin?

## Day 4

Nothing much to do so i did a bit of research

## DAY 5

Here's where the knowledge of Day 4 come to play.

- Linked the Manifest.json and all the app icons/favicons to the head section as you can remember i couldn't do this because i was using the original theme's layout folder so the only way was to copy their layout file to mine and that wasn't an ideal situation. So i found a solution, Netlify's Snippet Injection tool.(oh thank you [**netlify**](https://netlify.com)) I had heard of this tool but it was back then when i was using [**Jekyll**](https://jekyllrc.org)(another very good static site generator with thousands of themes), back then i only had 1 site deployed in netlify and i didn't need to tool. So to continue i managed to link them successfully and the website began acting like and app.
- Linked the Service Worker Register to the bottom of the body using the same Netlify Snippet Tool
- Added the SEO meta tags together with the manifest.json and app icons
- Added more Hugo Shortcodes and paired them with forestry snippets(since am using forestry as my CMS there's no need to add the shortcodes manually just create a \_\_\_.snippet file in /.forestry/snippets/....... as for shortcodes they go under /layouts/shortcodes/........ I'll show you how to do this in just a bit.
- Researched
- **End of Day 5**

## DAY 6

- Added more hugo shortcodes and their respective forestry snippets
- Added a [**json feed**](https://blog.stephenajulu.com/feed.json) because ........... why not?
- Added a [**custom 404**](https://blog.stephenajulu.com/404/) page replacing Netlify's version
- Added a Comment system that uses Github Issues as the base, the comments system is called [**Utterances**](https://utteranc.es)
- Researched
- **End of Day 6**

## DAY 7

- Did a few tweaks and hacks
- Added Google Analytics
- Turned all images to .webp format because of it's compression and small file size therefore bringing the total homepage size to 432kb from 3.4mb
- Resized my author image from 1124x1024 to 160x60 or something there about(cant remember the correct sizes but they near those i have mentioned)
- Minified and Unified a few Javascript files
- Removed Google Analytics 🤣 It was slowing down my site because of the requests it made and also privacy issues
- Managed to make the PageSpeed Desktop Score 100 while Mobile is at 98 99(fluctuates)
- Increase page size from 432kb to 532kb(🤣 by adding an important images that was 50 49kb each that were required for SEO)

Now to the good relationship i have discovered between hugo shortcodes and forestry snippets.

![](https://ajulusthoughts.files.wordpress.com/2020/04/screenshot_2020-04-05-stephenajulu-ajulusthoughts1-hugo-shortcodes.png?w=1012)

![](https://ajulusthoughts.files.wordpress.com/2020/04/screenshot_2020-04-05-stephenajulu-ajulusthoughts1-forestry-snippets.png?w=1012)

As you can see for every shortcode there's a snippet, that's because shortcodes usually have a small piece of code to embed in the page you want it to be activated.

An example is this.

```
{{/* DEFAULTS */}}
{{ $user    := "stephenajulu" }}
{{ $height  := 700 }}
{{ $tab     := "result" }}{{/* html|css|js|result */}}
{{ $theme   := 8862 }}{{/* create on codepen.io */}}


<script
    data-slug-hash="{{ .Get "id" }}"
    data-user="{{ or (.Get "user") $user }}"
    data-height="{{ or (.Get "height") $height }}"
    data-default-tab="{{ or (.Get "tab") $tab }}"
    data-theme-id="{{ or (.Get "theme") $theme }}"
    class='codepen'
    async
    src="//codepen.io/assets/embed/ei.js"
></script>
```

{{< codepen id="add last part of codepen url" >}}

So the first piece of code goes to the /layouts/shortcodes/shortcodename.html while the last one goes to .forestry/snippets/snippetname.snippet. This ensures that i don't have to copy the last code everywhere manually, i just access them within forestry cms's ui like this

https://youtu.be/M-P0lVXehWM

So now instead of copying the shortcode link everywhere you can just add it as a forestry cms snippet and use it where you would like. Note: This only works if you use Forestry CMS

## UNFINISHED WORK

- Resize all images to a good size
- SEO Optimize the site
- Find a good free resource light analytic service
- Copy all posts from [**Ajulu's Thoughts**](https://ajulusthoughts.wordpress.com) to [**Ajulu's Blog**](https://blog.stephenajulu.com)
- Cache all assets
- Add Web Share
- Add Push Notifications
- Link back to [**https://stephenajulu.com**](https://stephenajulu.com)
- Add Service Worker Version 3 that caches everything
- Debug
- Optimize
- Make changes to ui
- Release it back to the wild as Novela v3

### _PageSpeed Insights_ FOR BLOG.STEPHENAJULU.COM

**_Mobile Score_ : 98 99**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 1.3 seconds  
**_Desktop Score_ : 100**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 0.5 seconds  
_**Our Goal is 100 in Both**_

### **[Ajulu’s Thoughts](https://ajulusthoughts.wordpress.com)** – DELIVERING Quality Tech, Cybersecurity & Dev Content Since November 2016

Hey Devs? Found anything wrong with this info? Kindly write your comment down below on what to change.

Before i go, i would like to praise and thank all my favorite tools, products and companies

- [**Github**](https://github.com)
- [**Netlify**](https://netlify.com)
- **Cloudflare**
- [**Forestry CMS**](https://forestry.io)
- [**Formspree**](https://formspree.io)
- [**PWAStarter**](https://pwastarter.love2dev.com)
- [**PWABuilder**](https://pwabuilder.com)
- [**Namecheap**](https://namecheap.com)
- [**Hugo**](https://gohugo.io)
- [**Jekyll**](https://jekyllrc.org)

Il'l do a review of each but for now i can recommend anyone to these. They are the best.
