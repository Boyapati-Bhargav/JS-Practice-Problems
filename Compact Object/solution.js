/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(typeof obj === 'object'){
        if(Array.isArray(obj)){
            let result=[]
            for(i of obj){
                if(Boolean(i)) result.push(compactObject(i))
            }

            return result
        }
        else{
            let result ={}
            for(i in obj){
                if(Boolean(obj[i])) result[i] = compactObject(obj[i])
            }
            return result
        }

    }

    return obj;
};