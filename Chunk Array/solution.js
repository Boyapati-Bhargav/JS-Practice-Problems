/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let subs=[]
    while(arr.length > 0)  {
        subs.push(arr.splice(0,size))
    }

    return subs;
};
