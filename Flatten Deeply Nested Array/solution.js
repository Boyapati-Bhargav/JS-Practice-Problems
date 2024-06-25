/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    var result = []
    var count = 0;
    function func(arr,n){
        if(count <= n){
            for(i of arr){
                if(Array.isArray(i)){
                    func(i,n-1)
                }
                else{
                    result.push(i)
                }
            }
        }
        else{
            result.push(arr)
        }
        
    }
    func(arr,n)
    return result;
};