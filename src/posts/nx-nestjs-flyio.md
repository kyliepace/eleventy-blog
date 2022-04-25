---
title: Deploying an nx monorepo of nestjs apps to fly.dev
description: 
date: 2022-04-25
tags:
  - posts
  - nestjs
  - deployment
  - monorepo
layout: layouts/post.njk
---

In this post, we'll go over how to deploy nestjs microservices to [fly.io](fly.io). 

Fly.io deploys docker images at the edge using AWS Firecracker to distribute lots of little VMs close to your apps' users. I like that it doesn't have the v8 limitations of cloudflare workers and manages devops for a lovely developer experience.

## poc

Since I'm working with nestjs, I first had to add a Dockerfile to build my nestjs application as an image. I followed [this example in the fly-apps repo](https://github.com/fly-apps/fly-nestjs). [Installing flyctl](https://fly.io/docs/getting-started/installing-flyctl/) and running `flyctl launch` deployed my entire repo application to a fly.dev domain.

## Getting started

I used [nx](https://nx.dev/) to generate separate nestjs apps within the same github repo, following the documentation for [nx's nestjs plugin](https://nx.dev/nest/overview).

My project structure looked like this:

```
.
├── apps/
│   ├── api/
│   │   ├── src
│   │   │   ├── // source files
│   │   ├── jest.config.js
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
│   └── html/
│   │   ├── src
│   │   │   ├── // source files
│   │   ├── jest.config.js
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
├── libs/
│   └── todos/
├── tools/
├── jest.config.js
├── jest.preset.js
├── nx.json
├── package.json
├── tsconfig.base.json
└── workspace.json
```

Instead of adding a Dockerfile to the project root, I want one separate Dockerfile per nestjs app.

My Dockerfile instructions were now different than in the POC example. Here's what my dockerfile looks like:

``` apps/api/Dockerfile
FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3333
EXPOSE ${PORT}
RUN yarn install --production
# dependencies that nestjs needs
RUN yarn add reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js
```

When I first ran `flyctl launch --dockerfile ./apps/api/Dockerfile`, the `fly.toml` file was created in the wrong place, at the project root. I moved it into the apps/api directory and changed some port variables to match how I had defined things in the Dockerfile.

``` apps/api/fly.toml

app = "(fly.dev host here)"

[env]
  PORT = "3333"

[[services]]
  http_checks = []
  internal_port = 3333
  processes = ["app"]
  protocol = "tcp"
  script_checks = []

  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 6
    timeout = "2s"
```

Then from the project root running `flyctl deploy --config ./apps/api/fly.toml --dockerfile ./apps/api/Dockerfile` deploys just the api app to its own fly.dev url.