'use strict';
function addItemClass(el, self) {
    if (el.nodeType) {
//        el.classList.add(self.options.itemClass);
    } else {
        el.addClass(self.options.itemClass);
    }
}

module.exports = function(animation, index, update) {
    var self = this,
        newAnimation = {};

    // Store a reference in the
    // animationsOrigin array
    // only if this is not an update.
    if (!update) {
        self.animationsOrigin.push(animation);
    }

    newAnimation.$el = animation.$el;

    if (!self.initialized) {
        addItemClass(newAnimation.$el, self);
    }

    if (animation.breakpoint && animation.breakpoint > self.wWidth) {
        return;
    }

    if (animation.anchor) {
        self.targets[animation.anchor] = animation.start();
    }

    if (typeof animation.start === 'function') {
        newAnimation.start = animation.start();
    } else {
        newAnimation.start = animation.start;
    }

    if (typeof animation.end === 'function') {
        newAnimation.end = animation.end();
    } else {
        newAnimation.end = animation.end;
    }

    if (animation.hasOwnProperty('transitions')) {
        newAnimation.transitions = {};

        for (var key in animation.transitions) {
            newAnimation.transitions[key] = [];

            if (typeof animation.transitions[key][0] === 'function') {
                newAnimation.transitions[key][0] = animation.transitions[key][0]();
            } else {
                newAnimation.transitions[key][0] = animation.transitions[key][0];
            }

            if (typeof animation.transitions[key][1] === 'function') {
                newAnimation.transitions[key][1] = animation.transitions[key][1]();
            } else {
                newAnimation.transitions[key][1] = animation.transitions[key][1];
            }

            newAnimation.transitions[key][2] = animation.transitions[key][2];
        }
    }

    if (animation.ease) {
        newAnimation.ease = animation.ease;
    }

    if (animation.onStart) {
        newAnimation.onStart = animation.onStart;
    }

    if (animation.onEnd) {
        newAnimation.onEnd = animation.onEnd;
    }

    if (animation.onScroll) {
        newAnimation.onScroll = animation.onScroll;
    }

    if (index) {
        self.animations[index] = newAnimation;
    } else {
        self.animations.push(newAnimation);
    }
};
