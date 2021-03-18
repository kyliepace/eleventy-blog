---
title: Snowpack
description: What could you build on top of this?
date: 2021-03-13
tags:
  - posts
layout: layouts/post.njk
---

We use [snowpack](https://snowpack.dev) in all of our generated static site starters. It has allowed us to ensure the same build process happens across them, and we can introduce Glitch specific plugins in the future.

Snowpack has kept on the edge of what browsers can support natively, and provides ES modules directly from [package](https://skypack.dev). We aren't using that in this starter, but might in the future.
