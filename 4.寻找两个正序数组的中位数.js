/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let concatArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (concatArr.length % 2 !== 0) {
    return concatArr[Math.floor(concatArr.length / 2)];
  } else {
    return (
      (concatArr[concatArr.length / 2] + concatArr[concatArr.length / 2 - 1]) /
      2
    );
  }
};
// @lc code=end
