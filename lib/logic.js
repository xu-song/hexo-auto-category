'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');

let logic = function(data) {
    var log = this.log;

    if (data.layout != 'post') 
        return data;
    if (!this.config.render_drafts && data.source.startsWith("_drafts/"))
        return data;


    var overwrite = true;
    if (this.config.auto_category.enable && overwrite) {
        let postStr;
        // 1. parse front matter
        var tmpPost = front.parse(data.raw);
        // 2. read old categories
        //
        // 3. generate categories from directory
        var categories = data.slug.split('/');
        var depth = this.config.auto_category.depth || categories.length-1;
        tmpPost.categories = categories.slice(0, Math.min(depth, categories.length-1));
        // 4. process post
        postStr = front.stringify(tmpPost);
        postStr = '---\n' + postStr;
        fs.writeFileSync(data.full_source, postStr, 'utf-8');
        log.i("Generated: categories [%s] for post [%s]", tmpPost.categories, data.title);
    }
    return data
}



module.exports = logic;
