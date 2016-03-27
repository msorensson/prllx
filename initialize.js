var $ = require('jquery');
module.exports  = function() {
    var self = this;

    $('body').addClass('parallax');
    $('body, html').scrollTop(0);

    self.resize();
    self.setScrollLimit();

    self.resetAnimations();

    if (self.options.onBeforeStart) {
        self.options.onBeforeStart();
    }

    if (self.options.autoStart) {
        self.start();
    }

    if (self.options.scroll) {
        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();
            self.setScrollTop(scrollTop);
        });
    } else {
        self.mousewheel();
        self.touch();
        self.keyboard();
    }

    self.loop();
};
