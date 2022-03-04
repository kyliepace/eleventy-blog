---
title: Building a NestJS GraphQL API with Prisma and MongoDB
description: 
date: 2022-02-10
tags:
  - posts
layout: layouts/post.njk
---

It's no secret that I like a good book shopping spree. Recently, after a flurry of book ordering, I decided to make a database and api to track my books, their authors and translators, and some of the characters in each book. Because, isn't making a database what everyone does for the things they love?

Naturally I chose nestjs, mongodb, and graphql. I really like what I've seen from prisma, so when I saw that their mongodb connector was finally in beta, I decided to have a go connecting all the pieces.

Things that I like about prisma: it's easy to set up, it creates the db layer for you, and it gives you a type-safe database schema
Although what I like about prisma: easy set-up, creates db repository service layer for you that just works out of the box. 

The one thing that really sold me on prisma over mongoose? The `@updatedAt` decorator that sits on the db schema, instead of having to write an update hook that doesn't even run on all types of updates.


### Up & Running ###
I started by following [nestjs docs to add prisma](https://docs.nestjs.com/recipes/prisma), but a few steps different if using mongodb instead of sql.
Like instead of `npx prisma migrate dev --name init`, you have to use `npx prisma db push`, and the `schema.prisma` syntax is a bit different. (I'll get back to that)

[see mongodb example on prisma docs](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)


[good example app](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nestjs)


On the nestjs side of things I had to make a few tweaks as well. [These prisma docs help](https://www.prisma.io/nestjs)

I added a prisma.service file in my src root that handles connecting to the database, and then each sub-module (Book, Author, Character) uses that PrismaService as a dependency injection loaded as a provider.

```book.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service'
@Module({
  providers: [BookResolver, PrismaService, BookService],
})
export class BookModule {}
```

At the resolver level, database queries are written through this injected prismaService, so something like adding a book to the book collection would look like `this.prismaService.book.create({data})`. This returns a `Book` object as defined by `@prisma/client`. 

<script src="https://gist.github.com/kyliepace/5ac32180c4ea66deb0427b2352f6ff20.js"></script>

One thing that I stumbled on while setting up the resolver was the difference between the prisma Book model and the Book model I still needed to defined for graphql (of course, this will depend on how you are choosing to use nestjs - code first or schema first). While the addBook method is returning the prisma Book, for graphql purposes it is returning the interface that I defined in `./models/book.model` to the client. This is one big difference between this strategy, and mongoose, where the database and the graphql strategy are combined in one model. 


### The challenge: many to many relationships 
I was running on the cutting edge of prisma because while I was working on this, the prisma team released support for mongodb embedded documents. Without this feature, I would have (and for a while, did) switched to a different ORM.

To back up for a second, I was building a database for books, authors, and characters.

Each book can have multiple authors, who can have multiple books (many-many)
Each book can have multiple characters, who can have multiple books (many-many)

In addition, I was thinking about the translators of books, who are their own type of author. Each translator can work on many books, and each book can have many translators (many-many)

Because Prisma was originally built for sql databases, the default way to model these relationships would be by giving each model an array of object ids that link to another collection. So each book could have an array of authorIds and each author an array of bookIds, and when I query a book and ask to include author information I'd then use those authorIds to query the author collection.

The way to set this up in Prisma looks like this:
<script src="https://gist.github.com/kyliepace/51d483c232b03c7bccced8aa61b442c5.js"></script>

This is optimized for writes, but not for reads, and since I think I'll be querying this information more often than I'll be writing it, I'd rather replace some of these relationships with duplicated data embedded in each record.



[prisma docs for reference](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/many-to-many-relations#mongodb)

Prisma doesn't actually populate a `Character.books` array or a `Book.characters` array in the database, but instead use the foreign keys stored in `Character.bookIds`.

This seems like it is not optimized for reads. I'd rather embed either partial book data in the character model, and/or partial character data in the book model, if these are going to be queried much more often than mutated.

Thank you, prisma team, for making this possible! Here I'm embedding the information about authors who created each character. If I update an author, I may now need to also update this duplicated information in the character collection, but it saves me a trip to the author collection when querying characters.

<script src="https://gist.github.com/kyliepace/687495991bded01a00e893999041ab29.js"></script>

When defining the graphql model, I needed to add `{nullable: 'itemsAndList'}` to the possible array of authors embedded in a graphql book model.



So that's how I glued all these pieces together - nestjs, mongodb, graphql, and prisma - to make my own little book database and api. Now I can put my legs up and actually get to reading these fresh finds!