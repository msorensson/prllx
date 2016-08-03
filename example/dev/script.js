var Prllx = require('../../index');
var animations = [
    {
        el: document.querySelector('#box-1'),
        start: 0,
        end: 500,
        transitions: {
            translateY: [0, 800]
        }
    }
];

new Prllx(document.body, animations, {
    scroll: false
});
