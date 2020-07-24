/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];
  //   let reultStr = "";
  while (nums.length > 0) {
    let lastElement = nums.pop();
    if (nums.includes(lastElement)) {
      result.unshift(lastElement);
      //   reultStr = lastElement + "," + reultStr;
    }
  }
  return result;
  //   return reultStr.split(",");
};
// @lc code=end
