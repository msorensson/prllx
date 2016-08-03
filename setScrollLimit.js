'use strict';
module.exports = function() {
    var self = this;
    self.scrollLimit = self.el.offsetHeight - window.innerHeight;
};
