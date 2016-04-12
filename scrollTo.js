'use strict';
module.exports = function(newScrollTop) {
    var self = this;

    var autoscroll = setInterval(function() {
        self.scrollTop = self.scrollTop + 40;
        if (self.scrollTop >= newScrollTop) {
            clearInterval(autoscroll);
        }
    }, 10);
};
