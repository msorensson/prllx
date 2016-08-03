'use strict';
var mousewheel = require('mouse-wheel');

module.exports = function() {
    var self = this,
        scrollSpeed = 0.5;

    mousewheel(function(dx, dy, dz, ev) {
        self.setScrollTop(dy * scrollSpeed);
    });
};
