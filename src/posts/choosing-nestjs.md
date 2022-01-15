---
title: My Favourite Typescript Framework - NestJS
description: Add posts and your site build will publish them
date: 2022-01-10
tags:
  - posts
layout: layouts/post.njk
---

The body of your posts will be in Markdown. With Glitch, you can edit Markdown right in the editor, and the preview will update as you type. While you work you can switch between editing Markdown and seeing a preview of your formatted text by toggling the __Markdown__ button just above the editor window.

> 💡 Are the live updates to your site distracting you while you write or work? Go to the project menu in the top-left of your Glitch editor, and uncheck the box for **Refresh App on Changes**.

### The problem

I had been writing backend code like it was already minified and compiled, and that was a headache for colleagues, for testing, and for myself! 
### Attempts at cleaning up my life

Ok, I thought, these services just need some organization. I started by trying to be consistent in how I divided files amongst folders. Maybe all singletons go together here, and all database-related code here. Is that better?

My colleague started talking about design patterns. "Wouldn't this work well as an adapter? Shouldn't this just be a factory, and this part a builder?"

Er...was he making these words up?

And that's how [refactoring guru](https://refactoring.guru/) came into my life, and we refactored several repos using patterns that would be recognizable to more brains than just my own.
### The ah-hah

As soon as my team was rolling with consistent design patterns, someone posted a link to [NestJs](https://nestjs.com/)

Now, maybe this shows that there is truth to the stereotype of JavaScript having turned into a wild-west type environment, because being handed a framework that anticipates more needs than just wiring up an api (hi express) (not that there's anything wrong with an api) felt like being handed keys to a castle.


