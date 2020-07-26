/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let retArr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left !== right) {
        if (left > j + 1 && nums[left] === nums[left - 1]) {
          left++;
        } else if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
          right--;
        } else {
          if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
            retArr.push([nums[i], nums[j], nums[left], nums[right]]);
          }
          nums[i] + nums[j] + nums[left] + nums[right] > target
            ? right--
            : left++;
        }
      }
    }
  }
  return retArr;
};
// @lc code=end
