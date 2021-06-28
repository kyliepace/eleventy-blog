---
title: Next Steps
description: Alter your site config
date: 2021-06-20
tags:
  - posts
layout: layouts/post.njk
---

Earlier you added a new post and it appeared at the end of the list–if you're keeping a blog you probably want newer posts to appear first! Let's tweak the Eleventy config and use this to learn how you can customize your site build.

### Change the order of posts

Open any of the blog posts in `/posts`. In the front matter, each one has a `date` property we can use to specify the order posts appear in the site.

Take a look in `.eleventy.js`–there's some config in there that determines how your site builds and functions. Scroll down to the section that starts `eleventyConfig.addCollection`. This is where the site builds the collection of blog posts your users will be able to navigate and read.

The first line inside the function creates the collection of posts by filtering on the "posts" tag included in each one:

```
const coll = collection
      .getFilteredByTag("posts");
```

Alter this line to sort the posts using the `date` property in the front matter (find the comment that includes `EDIT HERE`):

```
const coll = collection
      .getFilteredByTag("posts")
      .sort((a, b) => b.data.date - a.data.date);
```

The rest of the code in the function sets the posts up to point to each other so that the reader can progress through them.

Take a look at the Home or Posts page in the preview!
