var $ = require('jquery');

module.exports = function() {
    var self = this,
        timer,
        direction,
        keyDown,
        speed = 6;

    function onKeyDown(e) {
        if (e.keyCode !== 40 && e.keyCode !== 38) {
            return;
        }

        direction = (e.keyCode === 38) ? 1 : -1;

        if (!keyDown) {
            keyDown = true;
            timer = setInterval(function() {
                self.setScrollTop(speed * direction);
            }, 20);
        }
    }

    function onKeyUp(e) {
        if (keyDown) {
            clearInterval(timer);
            keyDown = false;
        }
    }

    $('body')
        .on('keydown', onKeyDown)
        .on('keyup', onKeyUp);
};
