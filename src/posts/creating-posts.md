---
title: It's time to write some posts
description: Add posts and your site build will publish them
date: 2021-03-09
tags:
  - posts
layout: layouts/post.njk
---

The body of your posts will be in Markdown. With Glitch, you can edit Markdown right in the editor, and the preview will update as you type. While you work you can switch between editing Markdown and seeing a preview of your formatted text by toggling the __Markdown__ button just above the editor window.

> 💡 Are the live updates to your site distracting you while you write or work? Go to the project menu in the top-left of your Glitch editor, and uncheck the box for **Refresh App on Changes**.

### Post metadata

Above the content of your posts, you'll include front matter that tells Eleventy about details like the title and date.

Any values you include in the front matter are accessible in the template (e.g. `_includes/layouts/post.njk`). The template can build this data into the HTML page along with your post content.

### Add a post!

Click the three little dots next to the `/posts` folder in Glitch and add a new file, naming it `my-first-post.md`.

Add the following content to your new post, including the front matter and one line of text content:

```
---
title: My First Blog Post
description: Writing my first post on my new Eleventy blog
date: 2030-01-01
tags:
  - posts
layout: layouts/post.njk
---

OMG this is my first post!

```

_Feel free to change the date to today's date if you like._

Go to Posts or Home to see your new post added, and open it to see how the content appears, then come back here to __It's time to write some posts__!

You might have noticed that your new post was added at the end of the list–we'll change that soon.
