const EventEmitter = require('events')

class Emiter extends EventEmitter {
    Emit(){
        this.emit('personReady')
    }
}
module.exports = Emiter 