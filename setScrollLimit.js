var $ = require('jquery');
var $window = $(window);

module.exports = function() {
    var self = this;
//    self.scrollLimit = self.$el.height() - $window.height();
    self.scrollLimit = 20000;
};
