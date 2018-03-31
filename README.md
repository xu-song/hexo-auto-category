# hexo-dir2category

Directory to Category for [Hexo](hexo.io).

A plugin to generate categories automatically for each post.

## Installation 


```sh
$ npm install hexo-dir2category --save
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

The generated categories for post `_post\web\framework\hexo.md` look like the following:

```yml
categories:
  - web
  - framework
```

## Demo

All the categories in [ESON's Blog](https://blog.eson.org/) are generated automatically by `hexo-dir2category`.

## How it works


As a Hexo user, you must be troubled with [front matter](https://hexo.io/zh-cn/docs/front-matter.html) setting for each post.
With this plugin, you don't need to set `categories` one by one.
`hexo-dir2category` generates static post `categories` based on directory automatically.



## Warning

Your original categories will be **overwriten**.
