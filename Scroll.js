var $ = require('jquery');

var Scroll = function($el, options) {
    var self = this;

    self.$el = $el;
    self.scrollTop = 0;
    self.scrollDirection = 0;
    self.isStarted = false;
    self.animations = [];
    self.animationsOrigin = [];
    self.targets = {};

    self.options = $.extend({}, self.defaults, options);

    if (self.options.onBeforeResize && typeof self.options.onBeforeResize === 'function') {
        self.onBeforeResize = self.options.onBeforeResize;
    }
    self.initialize();
};

module.exports = Scroll;
