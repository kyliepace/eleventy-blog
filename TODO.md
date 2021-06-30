# TODO 🚧

Your new site is all yours so it doesn't matter if you break it! Try making an edit.

The site posts walk you through making some initial edits, adding a post, and tweaking the script.

## Keep going! 🚀

If you take another look in your site layout file for posts `src/_includes/layouts/post.njk` you'll see that the pages can include the post data from the frontmatter in the markdown files using Nunjucks templating. Each one of the posts includes a `description` property, so in `post.njk`, add that to the HTML template after the `h1`:

```
<p>
  <em>{{description}}</em>
</p>
```

Take a look at one of your posts to see the result!
