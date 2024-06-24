/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray = [];

    for(let i =0 ; i<arr.length;i++){
        let filteredVal = fn(arr[i],i);
        if(filteredVal) filteredArray.push(arr[i])
    }

    return filteredArray;
};