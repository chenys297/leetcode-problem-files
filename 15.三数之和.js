/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let numsLen = nums.length;
  // 先排好序好比较和直接判断是否还有可能的组合
  nums.sort((a, b) => a - b);

  if (nums[numsLen - 1] < 0 || nums[0] > 0) return [];
  let retArr = [];
  for (let i = 0; i < numsLen - 2; i++) {
    // 任意三个正整数相加不可能等于0
    if (nums[i] > 0) return retArr;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = numsLen - 1;
    let sum = 0 - nums[i];
    while (left !== right && right > left) {
      // 重复的直接跳过
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
      } else if (right < numsLen - 1 && nums[right] === nums[right + 1]) {
        right--;
      } else {
        let tmepSum = nums[left] + nums[right];
        if (tmepSum > sum) {
          right--;
        } else if (tmepSum < sum) {
          left++;
        } else if (tmepSum === sum) {
          retArr.push([nums[i], nums[left], nums[right]]);
          // 随便移动一个指针
          right--;
          // left++;
        }
      }
    }
  }
  return retArr;
};
// @lc code=end
