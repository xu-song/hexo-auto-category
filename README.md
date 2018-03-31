# hexo-auto-category

[Hexo](hexo.io) plugin, which generates categories automatically from directory for each post.

## Installation 


```sh
$ npm install hexo-auto-category --save
```


## Configuration

You can configure this plugin in Hexo `_config.yml`

```yml
dir2category: true
```


build & preview
```sh
$ hexo clean
$ hexo g
$ hexo s 
```


## Sample

The generated categories for post `source/_post/web/framework/hexo.md` look like the following:

```yml
categories:
  - web
  - framework
```

## Demo

All the categories in [ESON's Blog](https://blog.eson.org/) are generated automatically by `hexo-auto-category`.

## How it works


As a Hexo user, you must be troubled with [front matter](https://hexo.io/zh-cn/docs/front-matter.html) setting for each post.
With this plugin, you don't need to set `categories` one by one.
`hexo-auto-category` generates static post `categories` based on directory automatically.



## Warning

Your original categories will be **overwriten**.
