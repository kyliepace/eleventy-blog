---
title: It's time to write some posts
description: Eleventy makes it really easy to create a blog
date: 2021-03-10
tags:
  - posts
layout: layouts/post.njk
---

This is a standard Eleventy blog post, written entirely in Markdown. (Don't know Markdown? Here are [some tips](https://www.markdownguide.org/cheat-sheet/).) With Glitch, you can edit Markdown right in the editor, and this page will update as you type. 

Want to switch between editing Markdown and seeing a preview of your formatted text? Click on the "Markdown" button just above this editor window.

* **Try this**: Are the live updates to your site distracting you while you write or work? Go to the project menu in the top-left of your Glitch editor, and uncheck the box for "Refresh App on Changes"

### Post Metadata

In addition to the text of your blog post, there's some metadata that tells Eleventy about things like the title and date of your post. That's stored in a "front matter block" at the top of the markdown file, which looks like this. You'll figure it out, no problem.

```
---
title: Your First Blog Post
description: Eleventy makes it really easy to create a blog
date: 2021-03-17
tags:
  - posts
layout: layouts/post.njk
---
```

This allows you to attach details to your blog posts, that your templates (`layouts/post.njk`) can read.
