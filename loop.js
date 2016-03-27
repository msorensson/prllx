module.exports = function() {
    var self = this;
    var lastY = self.scrollTop,
        current,
        direction;

    function loop() {
        requestAnimationFrame(loop);

        if (self.scrollDirection === 1 && self.tick < self.scrollTop) {
            self.tick = self.tick + 15;
        } else if (self.scrollDirection === -1 && self.tick > self.scrollTop) {
            self.tick = self.tick - 15;
        }

        if (lastY === self.scrollTop) {
            return;
        } else {
            if (self.options.onScroll && typeof self.options.onScroll === 'function') {
                self.options.onScroll.call(this, (self.scrollDirection === 1) ? 'down' : 'up', self.scrollTop);
            }

            lastY = self.scrollTop;
        }

        for (var i = 0, len = self.animations.length; i < len; i++) {
            current = self.animations[i];

            if (current.start <= self.tick &&
                current.end >= self.tick) {
                self.animate(current);
            }

            if (self.scrollDirection === 1) {
                // Mark active on way down.
                if (current.start <= self.tick &&
                    current.end > self.tick &&
                    !current.active) {

                    direction = 'down';

                    if (typeof current.onStart === 'function') {
                        current.onStart.call(this, direction);
                    }

                    current.active = true;
                }

                // Unmark active on way down.
                if (current.end <= self.tick &&
                    current.active) {

                    direction = 'down';

                    if (typeof current.onEnd === 'function') {
                        current.onEnd.call(this, direction);
                    }

                    self.animate(current, 1);
                    current.active = false;
                }
            }

            if (self.scrollDirection === -1) {
                // Mark as active on way up.
                if (current.end >= self.tick &&
                    current.start < self.tick &&
                    !current.active) {

                    direction = 'up';

                    if (typeof current.onStart === 'function') {
                        current.onStart.call(this, direction);
                    }

                    current.active = true;
                }

                // Unmark active on way up.
                if (current.start >= self.tick &&
                    current.active) {

                    direction = 'up';

                    if (typeof current.onEnd === 'function') {
                        current.onEnd.call(this, direction);
                    }

                    self.animate(current, 0);

                    current.active = false;
                }
            }

            if (typeof current.onScroll === 'function') {
                current.onScroll.call(this, direction);
            }
        }
    }

    requestAnimationFrame(loop);
};
