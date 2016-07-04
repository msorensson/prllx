'use strict';
var raf = require('raf');

var lastY,
    current,
    scrollDirection,
    paused = false;

var getScrollDirection = function(newScrollTop, currentScrollTop) {
    if (newScrollTop > currentScrollTop) {
        return 'down';
    } else if (newScrollTop < currentScrollTop) {
        return 'up';
    }
    return false;
};

var loop = function() {
    var self = this;

    if (self.scrollTop === lastY) {
        paused = true;
    } else {
        paused = false;
    }

    scrollDirection = getScrollDirection(self.scrollTop, lastY);
    lastY = self.scrollTop;

    for (var i = 0, len = self.animations.length; i < len; i++) {
        current = self.animations[i];

        if (current.start <= self.scrollTop &&
            current.end >= self.scrollTop) {
            self.animate(current);
        }

        if (scrollDirection === 'down') {
            // Mark active on way down.
            if (current.start <= self.scrollTop &&
                current.end > self.scrollTop &&
                !current.active) {

                current.active = true;
                current.atStart = false;

                if (typeof current.onStart === 'function') {
                    current.onStart.call(this, scrollDirection);
                }
            }

            // Unmark active on way down.
            if (current.end <= self.scrollTop &&
                !current.atEnd) {

                self.animate(current, 1);
                current.active = false;
                current.atStart = false;
                current.atEnd = true;

                if (typeof current.onEnd === 'function') {
                    current.onEnd.call(this, scrollDirection);
                }
            }
        }

        if (scrollDirection === 'up') {
            // Mark as active on way up.
            if (current.end >= self.scrollTop &&
                current.start < self.scrollTop &&
                !current.active) {

                current.active = true;
                current.atEnd = false;
                current.atStart = false;

                if (typeof current.onStart === 'function') {
                    current.onStart.call(this, scrollDirection);
                }
            }

            // Unmark active on way up.
            if (current.start >= self.scrollTop && !current.atStart && current.active) {

                self.animate(current, 0);
                current.active = false;
                current.atStart = true;
                current.atEnd = false;

                if (typeof current.onEnd === 'function') {
                    current.onEnd.call(this, scrollDirection);
                }
            }
        }

        if (typeof current.onScroll === 'function') {
            current.onScroll.call(current, scrollDirection, self.scrollTop);
        }
    }

    lastY = self.scrollTop;
    raf(function() { self.loop(); });
};

module.exports = loop;
