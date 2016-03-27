var $ = require('jquery');
require('jquery-mousewheel')($);

module.exports = function() {
    var self = this,
        scrollSpeed = .5;

    function onMouseWheel(e) {
        var delta;

        // isNaN? Sometimes jquery mousewheel plugin returns 1.
        if (isNaN(e) && e.hasOwnProperty('deltaY') && e.hasOwnProperty('deltaFactor')) {
            delta = (e.deltaY * e.deltaFactor) * scrollSpeed;
            self.setScrollTop(delta);
        }
    }

    $('body').on('mousewheel', onMouseWheel);
};
