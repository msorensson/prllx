'use strict';
var raf = require('raf');

module.exports = function() {
    var self = this,
        pressed = false,
        lastY = 0,
        velocity,
        amplitude,
        ticker,
        frame,
        timestamp,
        target,
        timeConstant = 325;

    function tap(e) {
        pressed = true;
        lastY = getPositionY(e);

        velocity = amplitude = 0;
        frame = self.scrollTop;
        timestamp = self.utils.getTime();
        clearInterval(ticker);
        ticker = setInterval(track, 100);
    }

    function drag(e) {
        var y,
            delta;

        if (pressed) {
            y = getPositionY(e);
            delta = lastY - y;

            if (delta > 2 || delta < -2) {
                lastY = y;
                self.setScrollTop(-delta);
            }
        }

        e.preventDefault();
    }

    function release(e) {
        pressed = false;

        clearInterval(ticker);
        if (velocity > 10 || velocity < -10) {
            amplitude = 0.8 * velocity;
            target = Math.round(self.scrollTop + amplitude);
            timestamp = self.utils.getTime();
            raf(autoScroll);
        }
    }

    function getPositionY(e) {
        if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientY;
        }

        return e.clientY;
    }

    function autoScroll() {
        var elapsed, delta;

        if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = -amplitude * Math.exp(-elapsed / timeConstant);
            if (delta > 0.5 || delta < -0.5) {
                self.scrollTop = target + delta;
                raf(autoScroll);
            } else {
                self.scrollTop = target;
            }
        }
    }

    function track() {
        var now, elapsed, delta, v;

        now = self.utils.getTime();
        elapsed = now - timestamp;
        timestamp = now;
        delta = self.scrollTop - frame;
        frame = self.scrollTop;

        v = 1000 * delta / (1 + elapsed);
        velocity = 0.8 * v + 0.2 * velocity;
    }

    self.$el[0].addEventListener('mousedown', tap);
    self.$el[0].addEventListener('mousemove', drag);
    self.$el[0].addEventListener('mouseup', release);

    self.$el[0].addEventListener('touchstart', tap);
    self.$el[0].addEventListener('touchmove', drag);
    self.$el[0].addEventListener('touchend', release);
};
