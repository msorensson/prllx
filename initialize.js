'use strict';
var $ = require('jquery');

module.exports  = function() {
    var self = this;

    $('body').addClass('prllx');
    $('body, html').scrollTop(0);

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
