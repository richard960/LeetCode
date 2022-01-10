/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let length = nums.length - 1
    let recurse = function(arr) {
        let count = 0; 
        for(var i = 0; i < length; i++) {
        if(nums[i] > nums[i + 1]) {
            count++
            let swap = nums[i + 1];
            nums[i + 1] = nums[i];
            nums[i] = swap;
        }
    }
    if(count > 0) {
        length -= 1;
     recurse(nums);
    }
  }
    recurse();
    return nums;
};