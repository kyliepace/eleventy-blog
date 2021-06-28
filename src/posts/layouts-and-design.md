---
title: Layouts & Design
description: How to edit layouts
date: 2021-04-12
tags:
  - posts
layout: layouts/post.njk
---

We've included a few helpful templates to get you started, which you can find nested in the `src/_includes/layouts` folder. By default eleventy uses a templating language called [Nunjucks](https://mozilla.github.io/nunjucks/), with files ending in `.njk`.

You can use front matter to pass data about the content of your pages and posts into the template, which builds it into the page.

* Your default template is `base.njk`–the other templates extend this
* The `home.njk` template includes an intro section then lists the posts
* Your About page uses `page.njk`–you can add more pages and use this or another template
* Each individual post uses `post.njk`
* The Posts page uses `posts.njk` to list all posts

Check out the code in `home.njk`–it lists posts using the Eleventy `collections` object, pulling in data about each one, including some from the front matter (the `post.data` properties):


```
{% raw %}
{%- for post in collections.posts -%}
<li{% if page.url == post.url %} aria-current="page"{% endif %}>
{{ post.data.page.date | htmlDateString }} — 
<a href='{{ post.url }}'>{{ post.data.title }}</a></li>
{%- endfor -%}
{% endraw %}
```

This loops through all of your posts and displays a link to each. As you add more posts you might want to optimize this to only include a limited number!

To add new pages, you can use the existing templates or create your own new ones. Reference the template you want at the top of a page in its front matter:

```
---
layout: layouts/page.njk
---
```
