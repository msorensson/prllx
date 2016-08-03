'use strict';
require('scrollingelement');

module.exports = function() {
    var self = this;

    window.addEventListener('scroll', function() {
        var scrollTop = document.scrollingElement.scrollTop;
        var delta = self.scrollTop - scrollTop;
        self.setScrollTop(delta);
    });
};
