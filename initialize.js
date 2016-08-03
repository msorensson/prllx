'use strict';
require('scrollingelement');
require('classlist-polyfill');
module.exports  = function() {
    var self = this;

    document.body.classList.add('prllx');
    document.scrollingElement.scrollTop = 0;

    self.resize();
    self.setScrollLimit();

    if (self.options.onBeforeStart) {
        self.options.onBeforeStart();
    }

    if (self.options.autoStart) {
        self.start();
    }

    self.addControls();
    self.resetAnimations();
    self.loop();
};
