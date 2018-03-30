# hexo-dir2category


A plugin to generate categories automatically for each post in [Hexo](hexo.io)


As a Hexo user, you must be troubled with [front matter](https://hexo.io/zh-cn/docs/front-matter.html) setting for each post.
With this plugin, you don't need to set `categories` one by one. 
`hexo-dir2category` generate static post category based on directory.

## How to install

Add plugin to Hexo:

```
npm install hexo-dir2category --save
```

config.yml file:

```yml
dir2category: true
```


build & preview
```sh
hexo clean
hexo g
hexo s 
```


## Sample

The generated categories for post `_post\web\framework\hexo.md` will look like the following:

```yml
categories:
  - web
  - framework
```

# Warning

Your original categories will be **overwriten**.
