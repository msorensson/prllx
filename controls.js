var Scroll = require('./Scroll');

Scroll.prototype.controls = function() {
    var self = this,
        wheelTimeout = null,
        options = {
            mouseWheelSpeed: 20,
            invertWheelDirection: 1
        };


    function wheel(e) {
        var wheelDeltaX,
            wheelDeltaY,
            newX,
            newY;

        if (!self.isStarted) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (self.wheelTimeout === undefined ) {
            // that._execEvent('scrollStart');
        }

        // Execute the scrollEnd event after 400ms the wheel stopped scrolling
        clearTimeout(self.wheelTimeout);
        self.wheelTimeout = setTimeout(function () {
            //            self._execEvent('scrollEnd');
            self.wheelTimeout = undefined;
        }, 400);

        if ('deltaX' in e) {
            if (e.deltaMode === 1) {
                wheelDeltaX = -e.deltaX * options.mouseWheelSpeed;
                wheelDeltaY = -e.deltaY * options.mouseWheelSpeed;

            } else {
                wheelDeltaX = -e.deltaX;
                wheelDeltaY = -e.deltaY;
            }

        } else if ('wheelDeltaX' in e) {
            wheelDeltaX = e.wheelDeltaX / 120 * options.mouseWheelSpeed;
            wheelDeltaY = e.wheelDeltaY / 120 * options.mouseWheelSpeed;

        } else if ('wheelDelta' in e) {
            wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * options.mouseWheelSpeed;

        } else if ('detail' in e) {
            wheelDeltaX = wheelDeltaY = -e.detail / 3 * options.mouseWheelSpeed;

        } else {
            return;
        }

        wheelDeltaX *= options.invertWheelDirection;
        wheelDeltaY *= options.invertWheelDirection;

        newX = self.x + Math.round(wheelDeltaX);
        newY = self.y + Math.round(wheelDeltaY);

        // if ( newX > 0 ) {
        //     newX = 0;

        // } else if ( newX < this.maxScrollX ) {
        //     newX = this.maxScrollX;

        // }

        // if ( newY > 0 ) {
        //     newY = 0;

        // } else if ( newY < this.maxScrollY ) {
        //     newY = this.maxScrollY;

        // }

        self.scrollTo(newX, newY, 0);
    };

    document.addEventListener('wheel', wheel);
    document.addEventListener('mousewheel', wheel);
    document.addEventListener('DOMMouseScroll', wheel);
};
