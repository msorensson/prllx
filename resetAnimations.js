module.exports = function() {
    var self = this;
    self.animations = [];

    for (var i = 0; i < self.animationsOrigin.length; i++) {
        self.setAnimation(self.animationsOrigin[i], null, true);
    }
};
