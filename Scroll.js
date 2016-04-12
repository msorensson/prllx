'use strict';
var $ = require('jquery');
var $window = $(window);

module.exports = function() {
    var self = this;

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        var delta = self.scrollTop - scrollTop;
        self.setScrollTop(delta);
    });
};
