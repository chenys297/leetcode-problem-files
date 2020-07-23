/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0, iMax = nums.length; i < iMax; i++) {
    let temp = target - nums[i];
    if (map.has(temp) && map.get(temp) !== i) {
      return [map.get(temp), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
// @lc code=end
