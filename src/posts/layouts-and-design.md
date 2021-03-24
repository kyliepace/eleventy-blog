---
title: Layouts & Design
description: How to edit layouts
date: 2021-03-11
tags:
  - posts
layout: layouts/post.njk
---

We've included a few helpful templates to get you started, which you can find nested in the `src/_includes/layouts` folder. 

By default eleventy uses a templating language called [nunjucks](https://mozilla.github.io/nunjucks/), and has files ending in `.njk`.

### base.njk

This is your default template and each template extends from this one.

### home.njk

Home extends the base template, and makes a list of the blog posts that you've made, to display in a list.

```
{%- for post in collections.posts -%}
        <li{% if page.url == post.url %} aria-current="page"{% endif %}>{{ post.data.page.date | htmlDateString }} — <a href='{{ post.url }}'>{{ post.data.title }}</a></li>
      {%- endfor -%}
```

This loops through all of your posts and displays a link to them. A quick optimization might be limiting this to 5 posts!

### page.njk

Page is a template for additional pages like [about](/about). 