'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');
debugger;
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
        // var categories = data.slug.split('/');
        var categories = data.source.split('/');
        // 3.1 handle depth
        var depth = this.config.auto_category.depth || categories.length-2;
        if (depth==0) { // Uncategorized
            //tmpPost.categories = ["Uncategorized"];
            return data;
        }
        var newCategories = categories.slice(1, 1 + Math.min(depth, categories.length - 2));
        // need to see if categories was defined in front-matter
        if (tmpPost.categories) {
            let postCategories = tmpPost.categories;
            // now check if user defined categories in front-matter as an array. Otherwise if they wrote it like ```categories: work``` then it's the string type!
            if (typeof(tmpPost.categories) === "object"){
                // now convert categories to a merged string
                postCategories = tmpPost.categories.join("_"); 
            }
            // since categories is already a string, we can now compare to newCategories
            if (postCategories == newCategories.join("_")) return data;
        } 
        tmpPost.categories = newCategories

        // 4. process post
        postStr = front.stringify(tmpPost);
        postStr = '---\n' + postStr;
        fs.writeFile(data.full_source, postStr, 'utf-8');
        log.i("Generated: categories [%s] for post [%s]", tmpPost.categories, categories[categories.length-1]);
    }
    return data
}



module.exports = logic;
