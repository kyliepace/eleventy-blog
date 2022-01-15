---
title: My favourite Typescript framework - NestJS
description: How I left behind the chaos
date: 2022-01-10
tags:
  - posts
layout: layouts/post.njk
---

### The problem

I had been writing backend code like it was already minified and compiled, and that was a headache for colleagues, for testing, and for myself! 
### Attempts at cleaning up my life

Ok, I thought, these services just need some organization. I started by trying to be consistent in how I divided files amongst folders. Maybe all singletons go together here, and all database-related code here. Is that better?

My colleague started talking about design patterns. "Wouldn't this work well as an adapter? Shouldn't this just be a factory, and this part a builder?" 

Er...was he making these words up?

And that's how [refactoring guru](https://refactoring.guru/) came into my life, and we refactored several repos using patterns that would be recognizable to more brains than just my own. And we got that business logic far, far away from the controller. 
### 💡 The ah-hah

As soon as my team was rolling with consistent design patterns, someone posted a link to [NestJs](https://nestjs.com/)

Now, maybe this shows that there is truth to the stereotype of JavaScript having turned into a wild-west type environment, because being handed a framework that anticipates more needs than just wiring up an api (hi express) (not that there's anything wrong with an api) felt like being handed keys to a castle.

We had *just* struggled for a month adding trace-level logging to one project, something that seemed so useful and yet so foreign to javascript server-side code, and voilà, nest can do this.

What makes Nest feel so powerful, other than just giving JavaScript developers a system for organization, is the full embrace of dependency injection via `@Module` classes.

I found I did need to play around to understand how to use these, but the core organization principle of NestJS is to set everything up through these module classes:
```

import { Module } from '@nestjs/common';
import { MyLogger } from './my-logger.service';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
```

Routes for APIs definitely look a little bit different (I'm taking all these examples [from the nestjs docs](https://docs.nestjs.com/controllers)):

```

import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

This works nicely with GraphQL, although instead of controller they're called resolvers

```

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(returns => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
```

The injected authorsService and postsService there make it really easy to isolate code when testing, keep business logic separated, and minimize code changes when you decide to completely change databases.

🪥

As someone who has only known JavaScript for web development for most of her career, I used to get annoyed when other developers would dismiss JS for being too flexible, too willy-nilly. I still think that freedom is the language's superpower, but I've also seen the light when it comes to implementing design decisions onto the code I work with and share daily. I'm glad to see the NestJS community accelerate.