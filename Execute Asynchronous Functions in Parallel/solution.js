/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    let results= new Array(functions.length);
    let count=0;
    return new Promise((resolve,reject) => {
        for(let i=0; i< functions.length ; i++){
                functions[i]().then((res) => {
                    results[i] = res
                    count++
                    if(count == functions.length){
                        resolve(results)
                    }
                    })
                    .catch((error) => reject(error))
        }
    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */