---
title: Trimming JavaScript to x number of decimal places
description: How to handle floats without rounding or weird multiplication surprises
date: 2022-01-20
tags:
  - posts
  - javascript
keywords:
  - javascript floats
  - javascript math
layout: layouts/post.njk
---

If you're a JavaScript developer, you know about the language's fun take on math. But if you're a JavaScript developer like me, it seems to work out most of the time, so when should you be on the lookout for those unexpected JS math results?

I finally met this beast recently while trying to figure out why a function to trim numbers to a certain number of decimal places was behaving badly. 

The typical method to do this is to use the `.toFixed(int)` method. But, this method helpfully rounds the value into its new constraints, so for example `4.248.toFixed(2)` becomes `4.25`, which I think makes the most sense. Unfortunately, one of the requirements for the function I was working with was that the value could not be rounded - 4.248 should become 4.24.

One solution was to multiply the input number by 10 to the number of desired decimal places, Math.floor() the result to remove any additional decimal places, and divide by that 10 to the number power value.

```
const power = 10 ** decimalPlaces
const truncatedNumber = Math.floor(number * power) / power
```

But here's where JS math rears its wild head. `number * power` with floats sometimes give results that are like 0.0000000001 too low, throwing the entire result off.

At the end of the day, I wanted to treat the number value like a string, and just chop off any characters after a certain number of decimals.

And, you can use regex to do this.

<script src="https://gist.github.com/kyliepace/a1ff779de53815e3803174d1067d4c75.js"></script>

And I believe more thorough libraries like decimal.js are using regex under the hood to account for JS math madness.