**[Installation](#installation)** |
**[Configuration](#configuration)** |
**[Demo](#demo)** |
**[中文文档](https://blog.eson.org/pub/e2f6e239/)** |

# hexo-auto-category

<!--
[![Build Status](https://travis-ci.org/hexojs/hexo-server.svg?branch=master)](https://travis-ci.org/hexojs/hexo-server) 
[![NPM version](https://badge.fury.io/js/hexo-server.svg)](http://badge.fury.io/js/hexo-server) [![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-server.svg)](https://coveralls.io/r/hexojs/hexo-server?branch=master) [![Build status](https://ci.appveyor.com/api/projects/status/ycbw8t7w3kjju0tv/branch/master?svg=true)](https://ci.appveyor.com/project/tommy351/hexo-server/branch/master)
-->


[Hexo](hexo.io) plugin, which generates categories automatically from folder structure for each post.

## Installation 


```sh
$ npm install hexo-auto-category --save
```


## Configuration

You can configure this plugin in site `_config.yml`

```yml
# Generate categories from directory-tree
# Dependencies: https://github.com/xu-song/hexo-auto-category
# depth: the max_depth of directory-tree you want to generate, should > 0
auto_category:
 enable: true
 depth: 
```


build & preview
```sh
$ hexo clean && hexo g && hexo s
```


## Example 

The generated categories for post `source/_post/web/framework/hexo.md` is as follows:

```yml
categories:
  - web
  - framework
```

## Demo

All the categories in [ESON's Blog](https://blog.eson.org/) are generated automatically by [`hexo-auto-category`](https://github.com/xu-song/hexo-auto-category).

## Background 


As a Hexo user, you must be troubled with [front matter](https://hexo.io/zh-cn/docs/front-matter.html) setting for each post.
With this plugin, you don't need to set `categories` one by one.
`hexo-auto-category` generates static post `categories` automatically based on directory/folder name.

## Warning

Your original categories will be **overwriten**.

