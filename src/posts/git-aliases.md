---
title: Fav Git aliases for quicker commits
description: Quicken your github steps with these alias configs
date: 2022-01-14
tags:
  - posts
layout: layouts/post.njk
---

When I finally set these up after years of coding, I went home and mourned the lost time I'd been spending typing out `git add .` `git commit`, over and over again each day.

But every time I switch machines I have to dig these up again, so here are my favourite git aliases, for your (and my) reference

> 💡 note - I add these using the command line, and set them globally



| alias name |    task | code to add |
| :---------- | :--------- | :--- |
| amend |   add a change to the previous commit | `git config --global alias.amend '!git add . && git commit --amend` |
| commit changes | add . && commit | `git config --global.ready '!git add . && git commit -m'`|
| send | push to origin | `git config --global.send '!git push origin HEAD'`|
| co | create new branch | `git config --global.co '!git checkout -b'`|
| del | delete a branch | `git config --global.del '!git branch -D'`|

\
\
Check out your aliases with `git config --list | grep alias`


Then when I'm githubbing in the terminal, instead of typing \
`git add . && git commit -m "commit message"`, \
I can shorten that to \
`git ready "commit message"`
