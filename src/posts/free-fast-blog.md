---
title: Get blogging for free with eleventy and github
description: how to set up and deploy a static blog with markdown content hosted for free on github pages
date: 2022-01-19
keywords: 
  - blogging
  - create a blog
  - eleventy
tags:
  - posts
layout: layouts/post.njk
---

### Keep it simple
[find video instruction on youtube](https://www.youtube.com/playlist?list=PLPxGjkM3XHQM51bWQd477Zirux9ySlBRV)


It gets easier and easier to spin up a simple markdown-based blog without reverting to hand-writing html files. If you have a little bit of code experience, or want to take a peak at a text editor, read on to learn how you can get your own custom blog page built and deployed with eleventy and github pages.

### Quick spin-up on Glitch

For the fastest code-to-site turnaround, [glitch has a starter app named glitch-hello-eleventy](glitch.com) that forks a demo repo of a blog built with the static site generator eleventy.

![glitch-hello-eleventy](https://kyliepace.imgix.net/tech-blog/Screen%20Shot%202022-01-19%20at%203.19.45%20PM.png)

Glitch gives you a new very random-looking project name and actually deploys your code to a url with that name, plus you get a live preview of the website through glitch's editor.

The `todo.md` file starts you on a small guided adventure walking through the codebase, so use that to get familiar making a new post, adding elements to `.njk` nunjucks templates, and changing the css file in `/public/style.css`

If you want to delete any of the sample posts, you'll need to re-run `npm run build` through the glitch terminal.

#### Upload to your github

Glitch is great for quickly spinning up a live demo, but maybe you want to take the next steps with this blog set up.

Since eleventy is a static site generator, we can throw those static files up on github pages for some FREE hosting.

Now that you've made the blog your own, download the project from glitch. It will download as a zipped file so unzip it and then treat it like any other repo to push to github.

- `npm install` to load dependencies
- double check the `.gitignore` file to make sure you're not committing anything unnecessary or worse secret

since the glitch demo is already a git project with a remote named origin set pointing to glitch, you'll need to either add github as a remote with a different name, or else remove the glitch origin remote.

```git remote add github https://github.com/[$your github username]/[$your repo].git```

or

```
git remote remove origin
git remote add origin https://github.com...
```

#### Deploy with github pages

There are a few steps to take to turn your code into static files deployed on github.

Fortunately, github actions can do that work, and [Sophia at rock your code has already written a great guide](https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/). There are three things you'll need to do: 

1. add a git action workflow
2. modify the `package.json` build script to include a `--pathprefix` flag with the name of your repo (for example, `"build": "NODE_ENV=production eleventy --pathprefix 'book-blog'`)
3. update all `<a>` and `<link>` `hrefs` from `"$/path"` to `"{{ $/path | url}}"`

make sure you've installed the npm dependencies locally and have a `package-lock.json` or else the deploy will fail.

The github action workflow runs `npm run build` and pushes the built files to a new `gh-pages` branch of your repo, which gets hosted on a url that will look like `https://[$your-github-username].github.io/[$your-github-repo-name]`


#### Add sitemap.xml and robots.txt files for SEO

Now that you have your live blog that automatically redeploys with updates once you push changes to your `main` branch, maybe you'd like search engines to discover it (and therefore people too!)

We can use nunjucks for this just like you use for all other html on your blog.

In the `src` folder, add two new files - `sitemap.njk` and `robots.njk`

<script src="https://gist.github.com/kyliepace/255f6cadf19870f3a8e33dd7490151b5.js"></script>

<script src="https://gist.github.com/kyliepace/1088a25de73e3961338cb900d8b7729d.js"></script>

When the build script is run, these templates will generate a sitemap and a robots file instructing web crawlers how to see your site.

#### Write some blog
Now get writing! Your posts will be markdown files saved in github, so if you're looking to expand into a media empire with multiple people creating content you should start looking for a CMS. Otherwise, enjoy your new free blog!