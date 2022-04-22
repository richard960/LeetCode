/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    for(var i = 1; i <= nums.length; i++) {
        if(nums.indexOf(i) === -1) {
            arr.push(i);
        }
    }
    return arr;
};