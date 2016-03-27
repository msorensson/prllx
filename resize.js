var $ = require('jquery');
var _ = require('underscore');

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
        .on('resize', _.debounce(beforeWindowResize, 200, true))
        .on('resize', _.debounce(afterWindowResize, 300));
};
