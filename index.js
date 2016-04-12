'use strict';
/* global window */
var $ = require('jquery');
var prllx;

var Prllx = function($el, animations, options) {
    var self = this;

    self.wWidth = $(window).width();
    self.$el = $el;
    self.scrollTop = 0;
    self.scrollDirection = 0;
    self.isStarted = false;
    self.animations = [];
    self.animationsOrigin = animations || [];
    self.targets = {};

    self.initialized = false;

    self.options = $.extend({}, self.defaults, options);

    if (self.options.onBeforeResize && typeof self.options.onBeforeResize === 'function') {
        self.onBeforeResize = self.options.onBeforeResize;
    }
    self.initialize();
};

Prllx.prototype = {
    tick: 0,
    defaults: {
        autoStart: true,
        translateZ: true,
        itemClass: 'prllx__item'
    },
    utils: require('./utils'),
    setAnimation: require('./setAnimation'),
    resetAnimations: require('./resetAnimations'),
    scrollTo: require('./scrollTo'),
    animate: require('./animate'),
    initialize: require('./initialize'),
    start: require('./start'),
    stop: require('./stop'),
    loop: require('./loop'),
    scroll: require('./scroll'),
    mousewheel: require('./mousewheel'),
    touch: require('./touch'),
    keyboard: require('./keyboard'),
    addControls: require('./addControls'),
    resize: require('./resize'),
    setScrollTop: require('./setScrollTop'),
    setScrollLimit: require('./setScrollLimit'),
    jump: require('./jump')
};

$.fn.prllx = function(animations, opts) {
    var $this = $(this);
    prllx = new Prllx($this, animations, opts);
};

module.exports = Prllx;
