'use strict';
var $ = require('jquery');

var Scroll = function($el, animations, options) {
    var self = this;

    self.$el = $el;
    self.scrollTop = 0;
    self.scrollDirection = 0;
    self.isStarted = false;
    self.animations = [];
    self.animationsOrigin = animations || [];
    self.targets = {};

    self.options = $.extend({}, self.defaults, options);

    if (self.options.onBeforeResize && typeof self.options.onBeforeResize === 'function') {
        self.onBeforeResize = self.options.onBeforeResize;
    }
    self.initialize();
};

Scroll.prototype = {
    tick: 0,
    defaults: {
        autoStart: true,
        translateZ: true
    },
    utils: require('./utils'),
    setAnimation: require('./setAnimation'),
    resetAnimations: require('./resetAnimations'),
    scrollTo: require('./scrollTo'),
    animate: require('./animate'),
    initialize: require('./initialize'),
    start: require('./start'),
    loop: require('./loop'),
    mousewheel: require('./mousewheel'),
    touch: require('./touch'),
    keyboard: require('./keyboard'),
    resize: require('./resize'),
    setScrollTop: require('./setScrollTop'),
    setScrollLimit: require('./setScrollLimit'),
    jump: require('./jump')
};

require('./requestAnimationFrame');

$.fn.scroll = function(animations, opts) {
    var $this = $(this);
    var scroll = new Scroll($this, animations, opts);
};

module.exports = Scroll;
