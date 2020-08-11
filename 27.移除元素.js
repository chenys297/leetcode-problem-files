/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (val < nums[left] || val > nums[right]) {
      return nums.length;
    } else {
      if (nums[left] === val) {
        nums.splice(left, 1);
        left--; // 一轮比较后left必定往右移，这里是为了保证删除原数组后left指向的元素不会出错
      }
      if (nums[right] === val) {
        nums.splice(right, 1);
      }
      left++;
      right--;
    }
  }
  return nums.length;
};
// @lc code=end
