/*
 * @lc app=leetcode.cn id=1025 lang=javascript
 *
 * [1025] 除数博弈
 */

// @lc code=start
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  let count = 0;
  let x = 1;
  while (x < N) {
    if (0 < x && x < N && N % x === 0) {
      N = N - x;
      count++;
      x = 1;
    } else {
      x++;
    }
  }
  return count % 2 === 1;
};
// @lc code=end
