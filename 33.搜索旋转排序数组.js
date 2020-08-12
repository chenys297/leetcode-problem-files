/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let midle = Number.parseInt((right + left) / 2);
  while (left <= right) {
    if (nums[left] === target) {
      return left;
    } else if (nums[midle] === target) {
      return midle;
    } else if (nums[right] === target) {
      return right;
    } else if (nums[left] < nums[midle]) {
      // 左边是升序的
      if (nums[left] === target) {
        return left;
      } else if (nums[midle] === target) {
        return midle;
        // 在左边区间内
      } else if (nums[left] < target && nums[midle] > target) {
        right = midle - 1;
      } else {
        left = midle + 1;
      }
    } else {
      // 右边是升序的
      if (nums[midle + 1] === target) {
        return midle + 1;
      } else if (nums[right] === target) {
        return right;
        // 在右边区间内
      } else if (nums[midle] < target && nums[right] > target) {
        left = midle + 1;
      } else {
        right = midle - 1;
      }
    }
    midle = Number.parseInt((right + left) / 2);
  }
  return -1;
};
// @lc code=end
