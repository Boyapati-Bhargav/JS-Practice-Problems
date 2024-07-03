/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {

    let matrix = new Array(rowsCount)
    for(i=0;i<matrix.length;i++){
        matrix[i] = []
    }
    let reverse = false

    if(rowsCount*colsCount !== this.length) return []

    for(let i=0,j=0,k=0;k<this.length;k++){
        matrix[i][j] = this[k]
        reverse ? i-- : i++

        if(i === rowsCount){
            j++
            i--
            reverse = true
        }

        if(i === -1){
            j++
            i++
            reverse = false
        }
    }

    return matrix
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */