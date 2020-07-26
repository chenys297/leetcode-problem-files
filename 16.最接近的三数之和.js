/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 使用双指针法解决
  // 先排序
  nums.sort((a, b) => a - b);
  // 默认最近的和是数组前三个数的和
  let closestDiff = nums[0] + nums[1] + nums[2] - target;
  if (closestDiff === 0) return target;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] === target) return target;
    let left = i + 1;
    let right = nums.length - 1;
    while (left !== right) {
      let tempDiff = nums[i] + nums[left] + nums[right] - target;
      if (tempDiff === 0) return target;
      if (Math.abs(closestDiff) > Math.abs(tempDiff)) {
        closestDiff = tempDiff;
      }
      tempDiff > 0 ? right-- : left++;
    }
  }
  return target + closestDiff;
};
// @lc code=end
