var htmlTags = require('html-tags');

module.exports = function(tag){
    return htmlTags.indexOf(tag) > -1;
}
