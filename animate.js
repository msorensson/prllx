'use strict';
var vendorPrefixes = ['-webkit', '-moz', '-ms'],
    vendorPrefixedCssProperties = ['transform'];

var getProgress = function(current, scrollTop) {

    var progress = (current.start - scrollTop) / (current.start - current.end);

    // if (animation.hasOwnProperty('easing') &&
    //     self.ease.hasOwnProperty(animation.easing)) {
    //     progress = self.ease[animation.easing](null, progress, 0, 1, 1);
    // }

    return progress;
};

var applyCss = function(el, css) {
    for (var key in css) {
        el.style[key] = css[key];

        if (vendorPrefixedCssProperties.indexOf(key) !== -1) {
            for (var k = 0; k < vendorPrefixes.length; k++) {
                el.style[vendorPrefixes[k]] = css[key];
            }
        }
    }
};

var animate = function(current, prog) {
    var self = this,
        progress,
        start,
        end,
        now,
        unit,
        styles = {},
        translateZ = '', //'translateZ(0)',
        translate3dObj = {
            x: 0,
            y: 0,
            z: 0
        },
        translate3d,
        transform3d = false;

    progress = (typeof prog === 'undefined') ? getProgress(current, self.scrollTop) : prog;

    for (var key in current.transitions) {
        if (current.transitions.hasOwnProperty(key)) {
            start = current.transitions[key][0];
            end = current.transitions[key][1];
            now = start + ((end - start) * progress);
            unit = 'px';

            if (current.transitions[key][2]) {
                unit = current.transitions[key][2];
            }

            switch (key) {
            case 'translateX':
                now = (unit === 'px') ? Math.round(now) : Math.round(now * 100) / 100;
                translate3dObj.x = now + unit;
                transform3d = true;
                break;

            case 'translateY':
                now = (unit === 'px') ? Math.round(now) : Math.round(now * 100) / 100;
                translate3dObj.y = now + unit;
                transform3d = true;
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

    if (transform3d) {
        styles.transform = styles.transform || '';
        translate3d = 'translate3d(' + translate3dObj.x + ',' + translate3dObj.y + ',' + translate3dObj.z + ') ';
        styles.transform = styles.transform + translate3d;
    }

    if (styles.transform) {
        styles.transform = styles.transform.substring(0, styles.transform.length - 1);
//        styles['-webkit-transform'] = styles.transform; //styles.transform.substring(0, styles.transform.length - 1);
    }

    applyCss(current.$el[0], styles);
//    current.$el.css(styles);
};

module.exports = animate;
