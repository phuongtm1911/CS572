var EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();  
    }
    boom() {
        setInterval(() => this.emit('boom'), 1000);
    }
}

var g = new Gym();
g.on('boom', () => console.log('Athlete is working out'));
g.boom();

