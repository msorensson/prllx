var Scroll = require('./Scroll');

module.exports = function(animation, prog) {
    var self = this,
        styles = {},
        progress,
        translateZ = 'translateZ(0) ',
        now, start, end, unit;

    progress = (typeof prog === 'undefined') ? self.utils.getProgress(animation, self.tick) : prog;

    for (var key in animation.transitions) {
        if (animation.transitions.hasOwnProperty(key)) {
            start = animation.transitions[key][0];
            end = animation.transitions[key][1];
            now = start + ((end - start) * progress);
            unit = 'px';

            if (animation.transitions[key][2]) {
                unit = animation.transitions[key][2];
            }

            switch (key) {
            case 'translateX':
                now = (unit === 'px') ? Math.round(now) : Math.round(now * 100) / 100;
                styles.transform = styles.transform || '';
                styles.transform += 'translateX(' + now + unit + ') ' + translateZ;
                break;

            case 'translateY':
                now = (unit === 'px') ? Math.round(now) : Math.round(now * 100) / 100;
                styles.transform = styles.transform || '';
                styles.transform += 'translateY(' + now + unit + ') ' + translateZ;
                break;

            case 'scale':
                styles.transform = styles.transform || '';
                styles.transform += 'scale(' + now + ') ' + translateZ;
                break;

            case 'rotate':
                now = Math.round(now);
                styles.transform = styles.transform || '';
                styles.transform += 'rotate(' + now + 'deg) ' + translateZ;
                break;

            case 'opacity':
                now = Math.round(now * 100) / 100;
                styles.opacity = now;
                break;

            default:
                styles[key] = now + unit;
            }
        }
    }

    if (styles.transform) {
        styles.transform = styles.transform.substring(0, styles.transform.length - 1);
    }

    animation.$el.css(styles);
}
