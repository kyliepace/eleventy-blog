# Hello Eleventy!

This project is a blog powered by [Eleventy](https://www.11ty.dev/), a lightweight static site generator. That means you get all the power of a server-side framework but it builds plain HTML files for fast loading by your visitors. This project includes some default posts and layouts you can use as a foundation, and you can customize how your site builds in the JavaScript code. 📚

_While you're working on the content in the editor your changes will happen ✨ immediately in the preview window. As you code the site is serving files from a local build directory. When you close the editor your site will run a `build` script then serve the output as a fast and always-on static site._

## Prerequisites

You'll get best use out of this project if you're familiar with basic HTML and JavaScript. This is a static site, which means the server builds it using the content of the `src` folder, then is able to serve it to your users quickly. The posts are in Markdown, which is similar to HTML (markup) but with a lot less syntax!

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `public/style.css`: The styling rules for your pages and posts.

← `.eleventy.js`: Here you can configure how Eleventy builds your content into the site. Read through the initial blog posts in the site for steps on extending this code.

← `src/`: This folder contains all the files Eleventy will use to build your site.

### Working in the `src/` folder 📁

← `index.md`, `posts.md`, `about.md`: These Markdown files include the content for your Home, Posts, and About pages.

← `posts/`: These are the Markdown files for the posts that make up your blog–you can add new posts here and remove any you don't want. Each one includes front matter that Eleventy uses to build the content into the site, passing the data into the template referenced as `layout` at the top of the file.

← `_includes/layouts/`: This is where all of your page level layouts go. The **\_** tells you that this is an _eleventy only_ folder. Each layout uses [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) to build the page or post data into an HTML page. There is one base layout that all others extend.

← `seo.json`: When you're ready to share your new site or add a custom domain, change SEO/meta settings in here.

___Want a basic template version of this project to build your own Eleventy app? Check out [Minimal Eleventy](https://glitch.com/edit/#!/remix/11ty)!___

## Try this next 🏗️

With the site preview open on the right and the Glitch editor open on the left, navigate through the initial blog posts to learn more and carry out some development on your Eleventy site!

Check out `TODO.md` for some more optional next steps.

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Want more details about Eleventy on Glitch? We've got a [Help Center article](https://help.glitch.com/kb/article/111) just for that.
- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
