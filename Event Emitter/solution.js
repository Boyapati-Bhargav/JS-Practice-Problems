class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    constructor(){
        this.events = {}
    }

    subscribe(eventName, callback) {
        
        if(!this.events.hasOwnProperty(eventName)){
            this.events[eventName] = new Set();
        }
        
        this.events[eventName].add(callback)

        return {
            unsubscribe: () => {
                this.events[eventName].delete(callback)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let result=[];

        this.events[eventName]?.forEach((cb) => result.push(cb(...args)))

        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */