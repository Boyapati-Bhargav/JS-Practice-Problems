/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray=[];
    for(let i =0 ; i<arr.length;i++){
        let returnVal = fn(arr[i],i)
        returnedArray.push(returnVal)
    }

    return returnedArray;
};