/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init
    let i = 0;
    while(i<nums.length){
        val = fn(val,nums[i])
        i++;
    }

    return val;
};