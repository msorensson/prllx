module.exports = function(target) {
    var self = this;
    var delta = 20;
    var targetPosition = self.targets[target];
    var dir = (targetPosition > self.scrollTop) ? -1 : 1;

    var interval = setInterval(function() {
        self.setScrollTop(delta * dir);

        if ((dir === -1 && self.scrollTop >= targetPosition) ||
           (dir === 1 && self.scrollTop <= targetPosition)) {
            clearInterval(interval);
        }
    }, 10);
};
