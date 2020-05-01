---
title: "JAMstack, Headless CMS and beyond! Part 1"
date: "2019-11-05"
---

#### Why i and many others believe JAMstack, PROGRESSIVE WEB APPS, Static Site Generators and Headless CMS are the future! PART 1.

I am sure some of you have heard or seen some of these terms before. But for those who haven't let us start from the beginning.

During the start of the age of the internet, static site were prevalent. You had to know how to write HTML to be called a Web Developer. Back then WordPress didn't exist. All you had was HTML, CSS and JavaScript, eventually WordPress came and promised a clean interface, no coding skills need and a whole lot of themes/templates which you could edit by yourself through their interface. Since then wordpress has pretty much become an internet ruler along side Google. But now the tide is shifting, will you shift as well.

![](https://ajulusthoughts.files.wordpress.com/2019/11/external-content.duckduckgo.com_.png?w=600)

#### Introducing Static Site Generators, Headless CMS and JAMstack

## JAMstack

![](https://ajulusthoughts.files.wordpress.com/2019/11/1-bt8qgnl3p9g3bun8cf80cg.png?w=1024)

#### What is the JAMstack?

You may have already seen or worked on a JAMstack site! They do not have to include _all_ attributes of JavaScript, APIs, and Markup. They might be built using by hand, or with Jekyll, Hugo, Nuxt, Next, Gatsby, or another [static site generator](https://www.staticgen.com)...

The thing that they all have in common is that they don’t depend on a web server.

### **JAVASCRIPT**

Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any front end framework, library, or even vanilla JavaScript. eg Jekyll, Gatsby, Nuxtjs, Nextjs, Hugo, Hexo, Vuejs.

### API

All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript. These can be custom-built or leverage third-party services. eg GitHub API PI, Vero API, Google sheets API, YouTube API.

### MARKUP

Templated markup should be pre-built at deploy time, usually using a site generator for content sites, or a build tool for web apps.

#### When is your site **not** built with the JAMstack?

Any project that relies on a tight coupling between client and server is not built with the JAMstack. This would include:

- A single page app that uses isomorphic rendering to build views on the server at run time.
- A monolithic server-run web app that relies on Ruby, Node, or another backend language.
- A site built with a server-side CMS like WordPress, Drupal, Joomla, or Squarespace.

#### Why choose JAMstack?

- **Better performance** - Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.
- **Higher Security** - With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services. And also with server side CMS you get a larger surface area prone to attack.
- **Affordable, Easier Scaling** - When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.
- **Better Developer Experience** - Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.

## STATIC SITE GENERATORS

![](https://ajulusthoughts.files.wordpress.com/2019/11/hvbhkjvv.jpg?w=900)

#### First, How does a static website work?

Static websites do not generate content on the fly. This means that when a users visits the page, the content that is displayed is pulled directly from a file and does not require compilation or generation prior to showing up in the browser.

A great analogy that I read over on [David Walsh's blog](https://davidwalsh.name/introduction-static-site-generators) is to consider a static website like a newspaper. Once it's printed, you simply open it and read it exactly as intended with no need to wait. The newspaper is already on your step, waiting to be read whenever you choose to pick it up.

This is essentially how a static site generator works. The content is usually stored in a flat file format as opposed to a database and uses templates to generate the structure of the page. This means you receive a pure HTML file when visiting the page as opposed to waiting for the database to generate it on the fly.

Site generators or Static Site Generators are a must-use build tool for modern websites. They basically make it much easier to create, build and compile a modern website. They come and all shapes and sizes, and even though HTML, CSS and Javascript always comes out the other end, the language the site generators are written in varies.

Static site generators expand on static websites to make them more appealing to developers and offer several benefits. In a nutshell, most static site generators offer the following features:

#### Templates

Most static site generators offer an easy means of templating a website by allowing it to be built more easily using layouts and templating engines. [Jekyll](https://jekyllrb.com/), for instance, uses the [Liquid](https://shopify.github.io/liquid/) templating language to process templates.

#### Writing Content

Most of these use Markdown as a way of writing a post or page. It is a faster than writing pure html. This way markdown is then converted to HTML.

#### Now to the generators

[**Jekyll**](https://jekyllrb.com/) is by far the most popular one of those generators. It’s built with Ruby and integrated into GitHub Pages. So, it’s quite popular for personal projects and/or documentation. It has a huge user base and a big directory of plugins.

[**Hugo**](https://gohugo.io/) is quite like Jekyll. It’s built on Go and its main point against Jekyll is its blazing fast speed. Jekyll can be quite slow when the actual site is being generated , especially when the number of posts/pages goes up.  
But Hugo generates the site in a matter of seconds. There are other abstractions that make Hugo more user-friendly and easier to start with. It does not need as much configuration to create something from scratch.

[**Hexo**](https://hexo.io/) is a newer addition and created with NodeJS. Advertised, and mostly used as a blog platform, it combines the extensibility of Jekyll with the speed of Hugo. (actually faster than Hugo)

[**Wintersmith**](http://wintersmith.io/) is another one built on top of NodeJS. This one is different as it is quite minimalistic. It basically is a platform that you can customize through some plugins to your needs. It definitely requires some tweaking to make it work, but leaves more space for customization.

**[Gatsby](https://www.gatsbyjs.org/)** is the one framework that brings the static pages to stacks nowadays. It uses React.js and Webpack to create a SPA ( Single Page Application ) with your content. It promises to remove much of the configuration needed for such an application. Doing so, it provides the developer with an easy to use solution that will, in the end, produce a modern and high-end application.  
The truth is that Gatsby can be used for many other things than just a blog. Its true limit hasn’t been found yet.(As it only reached its first stable release earlier this month.) This seems to be the WordPress for static sites.

#### Advantages of static

#### 1) Speed

Perhaps the most immediately noticeable characteristic of a static site is how fast it is. As mentioned above, there are no database queries to run, no templating and no processing whatsoever on every request.

Web servers are really good at delivering static pages quickly, and the entire site consists of static HTML files that are sitting on the server, waiting to be served, so a request is served back to the user pretty much instantly.

![](https://ajulusthoughts.files.wordpress.com/2019/11/92_faster-static-site-builds-part-1-process-only-what-you-need.png.jpg?w=1024)

#### 2) Version control for content

You can't even imagine working on a project without version control anymore, can you? Having a repository where people can collaboratively work on files, control exactly who does what and rollback changes when something goes wrong is essential in any software project, no matter how small.

But what about the content? That's the keystone of any site and yet it usually sits in a database somewhere else, completely separated from the codebase and its version control system. In a static site, the content is typically stored in flat files and treated as any other component of the codebase. In a blog, for example, that means being able to have the actual posts stored in a GitHub repository and allowing your readers to file an issue when something is wrong or to add a correction with a pull request — how cool is that?

#### 3) Security

Platforms like WordPress are used by millions of people around the world, meaning they're common targets for hackers and malicious attacks — no way around it. Wherever there's user input/authentication or multiple processes running code on every request, there's a potential security hole to exploit. To be on top of the situation, site administrators need to keep patching their systems with security updates, constantly playing cat and mouse with attackers, a routine that may be overlooked by less experienced users.

Static sites keep it simple, since there's not much to mess up when there's only a web server serving plain HTML pages.

#### 4) Less hassle with the server

Installing and maintaining the infrastructure required to run a dynamic site can be quite challenging, especially when multiple servers are involved or when something needs to be migrated. There's packages, libraries, modules and frameworks with different versions and dependencies, there's different web servers and database engines in different operating systems.

Sure, a static site generator is a software package with its dependencies as well, but that's only relevant at build time, when the site is generated. Ultimately, the end result is a collection of HTML files that can be served anywhere, scaled and migrated as needed regardless of the server-side technologies. As for the site generation process, that can be done from an environment that you control locally and not necessarily on the web server that will run the site — heck, you can build an entire site on your laptop and push the result to the web when it's done.

![](https://ajulusthoughts.files.wordpress.com/2019/11/jbjhbvjkfv.png?w=528)

#### 5) Traffic surges

Unexpected traffic peaks on a website can be a problem, especially when it relies intensively on database calls or heavy processing. Introducing caching layers such as Varnish or Memcached surely helps, but that ends up introducing more possible points of failure in the system.

A static site is generally better prepared for those situations, as serving static HTML pages consumes a very small amount of server resources.

## Headless CMS

![](https://ajulusthoughts.files.wordpress.com/2019/11/jk-lsc.png?w=1024)

A headless CMS is like a traditional CMS, but without a way to present the content being created and stored within it. It simply allows for the creation, reading, updating and deleting (CRUD) of content.

That might sound counterproductive at first, but the idea is that — thanks to the lack of a front-end delivery layer — brands can use any front-end tool they want to present the content, meaning they can deliver content beyond websites and apps, reaching any channel from kiosks to smartwatches and even inside virtual reality headsets.

A decoupled CMS works in the same way, but it throws in some handy front-end tools like templates and advanced drag-and-drop content modeling features. Hence, it has a head, it’s just decoupled from it, allowing the organization to draft in other front-end tools on an ad-hoc basis.

While [headless and decoupled architecture are nothing new](https://www.cmswire.com/web-cms/with-content-delivery-what-goes-around-comes-around/), the demand for this kind of solution is, as businesses look to deliver content to locations outside of the standard web browser.

Headless CMS architecture separates back-end content functions (like creation, management, and storage) from front-end functions (like presentation and delivery).

Headless CMS' are the opposite of legacy systems like Wordpress, Drupal, Joomla, etc. They are all CMS’ that traditionally have to be hosted and built together with the site every time it’s served.

![](https://css-tricks.com/wp-content/uploads/2016/03/headless.svg)

A headless CMS doesn’t care where it’s serving its content to. It’s no longer attached to the frontend, and the content can be viewed on any platform.

Headless architecture is partly a response to the way web content has evolved. For a long time, most web content was delivered through a browser, often as a web page. But new connected devices are arriving all the time.

The advantages of this approach is huge, and it works with [JAMstack](https://www.jamstack.org/) sites that are many times faster safer and cheaper to scale than traditional sites.

![](https://ajulusthoughts.files.wordpress.com/2019/11/ituilfrz.png?w=944)

### Types of Headless CMS

### Type: Git-based / API Driven

Here we focus on what type of CMS it fall under.

#### **Git-based**

With a git-based CMS you are pushing changes to git that then triggers a new build of your site.

_Pros_

- Full version control on all content out of the box.
- All content lives as normal text files so developers can use all the normal tools they use as a developer.
- Much easier to rollback.
- Is the most homogenous approach with the existing git-based workflow of most web-developers.

_Cons_

- Not a good solution if you want several apps or sites to pull content from the same CMS.
- If you have _tons_ of content, you would in some cases want a database instead.

#### **API-driven**

A CMS that is purely API driven. It does need to run every time a site has a visitor, but it’s an external api instead of having to run it as part of your site.

For some API-driven CMS Like Contentful and Prismic, you can also just use the api in the build phase, eliminating the need for anything being build on the fly. Though that will lead to longer build times.

_Pros_

- The best solution if you have several different apps or sites pulling the same managed content.

_Cons_

- Not version controlled in Git.
- Not as integrated in developer workflow as git-based CMS.

![](https://ajulusthoughts.files.wordpress.com/2019/11/mvhjhxfhj.png?w=1024)

### List of the most common

1. Butter CMS
2. Contentstack
3. Contentful
4. dotCMS
5. Mura
6. Forestry
7. Netlify CMS
8. Cloud CMS
9. Cockpit CMS
10. Core dna
11. Craft CMS
12. Zesty.io
13. Directus
14. Storyblok
15. GraphQL CMS
16. Gentics Mesh
17. Cosmic JS
18. Kentico Cloud
19. Prismic.io
20. Quintype
21. Sanity
22. Scrivito
23. Squidex
24. DNN Evoq Content
25. Strapi
26. Superdesk

#### My top personal favorites

1. Contentful
2. Netlify CMS
3. Forestry
4. Storyblok

![](https://ajulusthoughts.files.wordpress.com/2019/11/lguxtfgx.jpg?w=638)

**Headless CMS, PWA, Static Site Generators ARE the Future!**

And that's the end of part 1.

Part 2, we will cover Progressive Web Apps and get deeper into Static Site Generators and Headless CMS. This was just surface level. I didn't put them all into 1 post in order to save my reader mental and eye torture through reading a 5000 words post.

Well. That's it for today. I would like to ask you to kindly donate to the blog. Donations are on the sidebar on your right.

A word from Samuel Snopko

> I would also highlight that Better Developer Experience leads to Better User Experience and more focus/time on presentation layer (frontend)
> 
> Samuel Snopko

Thank you. Have a wonderful day!

* * *

**Images Sources:**

[**Bejamas.io**](https://bejamas.io)

[**Contentful**](https://www.contentful.com/)
