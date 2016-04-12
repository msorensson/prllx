'use strict';
var $ = require('jquery');
var debounce = require('lodash/debounce');

module.exports = function() {
    var self = this,
        $body = $('body'),
        waitForStart = false;

    function beforeWindowResize() {
        $body.addClass('resizing');
    }

    function afterWindowResize() {
        if (!self.isStarted) {
            waitForStart = true;
        }
        self.stop();

        self.wWidth = $(window).width();

        if (self.options.onBeforeResize) {
            self.options.onBeforeResize();
        }

        self.resetAnimations();
        self.setScrollLimit();

        $body.removeClass('resizing');

        if (!waitForStart) {
            self.start();
        }
    }

    $(window)
        .on('resize', debounce(beforeWindowResize, 200, {}, true))
        .on('resize', debounce(afterWindowResize, 300));
};
