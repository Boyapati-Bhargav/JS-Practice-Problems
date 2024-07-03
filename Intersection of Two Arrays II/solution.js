/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result=[]
    let index;
    for(i of nums1){
        if(nums2.includes(i)){
            result.push(i)
            index = nums2.indexOf(i)
            nums2.splice(index,1)
        }
    }

    return result
};