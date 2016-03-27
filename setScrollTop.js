'use strict';
module.exports = function(newScrollTop, d) {
    var self = this;
    newScrollTop = newScrollTop || self.scrollTop - d;

    if (self.isStarted && newScrollTop !== self.scrollTop) {

        self.scrollDirection = self.utils.setScrollDirection(newScrollTop, self.scrollTop);
        self.scrollTop = Math.min(Math.max(newScrollTop, 0), self.scrollLimit);

    }
};
