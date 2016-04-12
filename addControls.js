'use strict';
var $ = require('jquery');

module.exports  = function() {
    var self = this;

    if (self.options.scroll) {
        self.scroll();

    } else {
        self.mousewheel();
        self.touch();
        self.keyboard();
    }
};
