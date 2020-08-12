/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let firstIndex = -1;
  let lastIndex = -1;

  function searct(isFirst, startIndex, endIndex) {
    if (isFirst && nums[startIndex] === target) {
      firstIndex = startIndex;
      return;
    } else if (!isFirst && nums[endIndex] === target) {
      lastIndex = endIndex;
      return;
    }
    while (startIndex <= endIndex) {
      let midle = Number.parseInt((startIndex + endIndex) / 2);

      if (nums[midle] === target) {
        if (isFirst) {
          firstIndex =
            firstIndex > -1 && firstIndex < midle ? firstIndex : midle;
          endIndex = midle - 1;
        } else {
          lastIndex = lastIndex > -1 && lastIndex > midle ? lastIndex : midle;
          startIndex = midle + 1;
        }
      } else if (nums[midle] > target) {
        if (nums[endIndex] === target) {
          if (isFirst) {
            firstIndex =
              firstIndex > -1 && firstIndex < endIndex ? firstIndex : endIndex;
          } else {
            lastIndex =
              lastIndex > -1 && lastIndex > endIndex ? lastIndex : endIndex;
          }
        }
        endIndex = midle - 1;
      } else {
        if (nums[startIndex] === target) {
          if (isFirst) {
            firstIndex =
              firstIndex > -1 && firstIndex < startIndex
                ? firstIndex
                : startIndex;
          } else {
            lastIndex =
              lastIndex > -1 && lastIndex > startIndex ? lastIndex : startIndex;
          }
        }
        startIndex = midle + 1;
      }
    }
  }
  searct(true, 0, nums.length - 1);
  if (firstIndex > -1) {
    searct(false, firstIndex + 1, nums.length - 1);
    lastIndex = lastIndex > -1 ? lastIndex : firstIndex;
  }
  return [firstIndex, lastIndex];
};
// @lc code=end
