/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let swapIndex1 = nums.length - 2;
  while (swapIndex1 >= 0 && nums[swapIndex1 + 1] <= nums[swapIndex1]) {
    swapIndex1--;
  }
  if (swapIndex1 >= 0) {
    let swapIndex2 = nums.length - 1;
    while (swapIndex2 >= 0 && nums[swapIndex2] <= nums[swapIndex1]) {
      swapIndex2--;
    }
    const temp = nums[swapIndex1];
    nums[swapIndex1] = nums[swapIndex2];
    nums[swapIndex2] = temp;
    nums.splice(
      swapIndex1 + 1,
      nums.length - swapIndex1,
      ...nums.slice(swapIndex1 + 1).reverse()
    );
  } else {
    nums.sort((a, b) => a - b);
  }

  return nums;
};
// @lc code=end
