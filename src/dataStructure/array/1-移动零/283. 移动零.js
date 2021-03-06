/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let i = (j = 0);
  for (; j < nums.length; j++) {
    if (nums[j] !== 0) {
      if (i < j) {
        // special swap
        nums[i] = nums[j];
        nums[j] = 0;
      }
      i++;
    }
  }
};
