'use strict';
require('classlist-polyfill');
var debounce = require('lodash/debounce');

module.exports = function() {
    var self = this,
        waitForStart = false;

    function beforeWindowResize() {
        document.body.classList.add('resizing');
    }

    function afterWindowResize() {
        if (!self.isStarted) {
            waitForStart = true;
        }
        self.stop();

        self.wWidth = window.innerWidth;

        if (self.options.onBeforeResize) {
            self.options.onBeforeResize();
        }

        self.resetAnimations();
        self.setScrollLimit();

        document.body.classList.remove('resizing');

        if (!waitForStart) {
            self.start();
        }
    }

    window.addEventListener('resize', debounce(beforeWindowResize, 200, {}, true));
    window.addEventListener('resize', debounce(afterWindowResize, 300));
};
