'use strict';
module.exports = function(d) {
    var self = this;
    var newScrollTop = self.scrollTop - d;

    if (self.isStarted && newScrollTop !== self.scrollTop) {
        self.scrollDirection = self.utils.setScrollDirection(newScrollTop, self.scrollTop);
        self.scrollTop = Math.min(Math.max(newScrollTop, 0), self.scrollLimit);
    }
};
