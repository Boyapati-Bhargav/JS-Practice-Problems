/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let bothArr = [...arr1,...arr2];
    let result = {}
    for(obj of bothArr){
        if(result[obj.id]){
            result[obj.id] = {...result[obj.id],...obj}
        }
        else{
            result[obj.id] = obj
        }
    }

    return Object.values(result)
};