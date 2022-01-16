---
title: Choosing eleventy over a CMS for Jamstack blog
description: why I chose markdown over graphQL for my little blog
date: 2022-01-02
tags:
  - posts
layout: layouts/post.njk
---

I generally avoid markdown. 

I'm a backend developer - I like databases, json, APIs. Storing content in files and treating github as my database just doesn't scale, and I've been on those projects before where managers try to make it.

But, I know as a developer I'm also prone to shiny overkill. Why be up and running in five minutes when I could orchestrate an event-driven system in five hours that, who knows, could pivot into the next hot niche app?

I've enjoyed many a combination of static site generator and CMS. I like Strapi and Retool for being able to connect them to your own database. I love Crystallize for making it easy to manage products and ecommerce. Ghost is great if your dad is the one writing and publishing the content. Once upon a time I even had a skillshare video that made me a few bucks every month all about setting up a Hugo blog. Or was it Hexo? 

😜

So, I definitely feel spoiled for choice and detrimentally so, because I spend more time trying each tool than I do ever writing posts. Maybe, my attraction to the sleekest database integration and scalability wasn't helping me do the actual thing I'd set out to do.

I decided to bite the templating/markdown bullet so I could just build and deploy directly from github, for free. I went with Eleventy because it really is seamless to get up and running.

🚀

There are [official and community](https://www.11ty.dev/docs/starter/) starters and a scattering of to-the-point [plugins](https://www.11ty.dev/docs/plugins/) to be flexible, but just flexible enough to keep me focused. I'm not tapping into any React useEffects, and the css is basic. No less, let alone styled components (which is an amazing library). 

The only thing I've really modified are the links so that this could be deployed as a github page. [thanks Sophia for a great guide](https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/). 

I've kept [the repo](https://github.com/kyliepace/eleventy-blog) for this blog public, in case you want to check out the details.

I don't think that eleventy does much differently about the tried-and-trusted method of rendering static pages from markdown.

Here is what the beginning of this very file looks like:

```
---
title: Choosing eleventy over a CMS for Jamstack blog
description: why I chose markdown over graphQL for my little blog
date: 2022-01-02
tags:
  - posts
layout: layouts/post.njk
---

I generally avoid markdown. 
```

At some point I'd like to modify this so that github can insert the date whenever a post is created or updated. The templating engine transforms this into html.

I don't have many opinions about templating languages as my enthusiasm for them ranges from middling to avoid at all costs.

Honestly what I've enjoyed about eleventy so far was that their blog demo which I forked had good examples that I really haven't had to touch. I'm sure if I need to make a change, it will bug me to no end to not be able to use es6. 

So, I'd better keep things simple.
