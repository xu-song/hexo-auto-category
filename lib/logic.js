'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');

let logic = function(data) {
    var log = this.log;
    if (data.layout == 'post') {
        var overwrite = true;
        if (this.config.auto_category && overwrite) {
            let postStr;
            if (!/.*\.org/.test(data.source)){
            // 1. parse front matter
            var tmpPost = front.parse(data.raw);
            // 2. read old categories
            //
            // 3. generate categories from directory
            tmpPost.categories = data.slug.split('/').slice(0, -1);
            // 4. process post
            postStr = front.stringify(tmpPost);
            postStr = '---\n' + postStr;
            fs.writeFileSync(data.full_source, postStr, 'utf-8');
            }
            else
            {
            }
            log.i("Generated: categories [%s] for post [%s]", tmpPost.categories, data.title);
        }
    }
    return data
}



module.exports = logic;
