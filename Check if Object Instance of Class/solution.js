/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {

    if(obj === null || obj === undefined || typeof(classFunction) != 'function'){
        return false
    }
    if (Object(obj) instanceof classFunction){
        return true
    }
    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */