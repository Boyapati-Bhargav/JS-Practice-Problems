/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj ={}
    for(i of this){
        let val = fn(i)
        if(obj[val]){
            obj[val].push(i)
        }
        else{
            obj[val] = [i]
        }  
    }

    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */