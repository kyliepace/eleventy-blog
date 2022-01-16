---
title: When to not choose GraphQL for your API
description: sometimes it's not the best choice
keywords: grpc, graphql, rest, apis, api architecture
date: 2022-01-15
tags:
  - posts
layout: layouts/post.njk
---

GraphQL is amazing. It puts data types and validation front and center, and lets the api user decide exactly what data they want returned without managing a handful of different http requests.

However, just because it's a great query language doesn't mean it's always the best choice. Here are some alternatives to graphQL and when you might want to choose them.

#### rest

A REST API will usually have a handful of different operations like `GET /dog`, `POST /DOG`, `DELETE /dog`. The fields returned from an operation will always be the same so, even if you don't need to get the entire dog object, you're going to get it.

In some situations, this is totally fine.

For example, once I was building an API for a social media website. There were multiple clients using the API, but they all wanted the same fields from their get requests. In fact, they wanted all the fields. Each client had to write up this long graphQL request that had to be updated each time the data schema changed. In this case REST would have been easier.

Caching and rate limiting are also easier to get up and running in REST.

Finally, GraphQL has a more sophisticated error messaging system, but if your client is relying on http status codes to evaluate success, then be ready for some refactoring.

#### soap
er....yeah you probably might as well use graphQL then

#### gRPC
gRPC is a light and fast framework for transferring data that can be used in backend situations where REST and GraphQL couldn't be.

Like GraphQL, gRPC methods can be as verby as needed. By that I mean it can handle situations where you don't just need a CRUD verb. Instead of GET /dog, maybe you need to check that the dog did the right trick and if so reward with a treat.


```
// The greeting service definition.
service Greeter {
  // SayHello method 
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message
message HelloRequest {
  string name = 1;
}

// The response message
message HelloReply {
  string message = 1;
}
```



[![flowchart showing summary](https://kyliepace.imgix.net/tech-blog/Ivory%20Doughnut%20Illustration%20Decision%20Tree%20Chart.png?fit=fill)](https://kyliepace.imgix.net/tech-blog/Ivory%20Doughnut%20Illustration%20Decision%20Tree%20Chart.png)

### conclusion

There is a always a tradeoff, so if you don't need the features GraphQL delivers really well, then you're probably getting a bad deal.