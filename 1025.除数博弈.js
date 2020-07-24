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
  // 规律法 当N=2，谁先手谁就赢了  奇数的因数永远都是奇数 偶数的因数可奇可偶
  // 最有利的情况是先手的那个人必须保证在自己选完之后下一个N为奇数
  // return N % 2 === 1;

  // 递推法
  // N = 1 时,谁先手谁输
  // N = 2 时,谁先手谁赢
  // 一直往后面推，查看因数中是否存在必输的情况
  let firstWinRes = [false, false, true]; // N为index时，先手是否必赢
  for (let i = 3; i <= N; i++) {
    firstWinRes[i] = false;
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !firstWinRes[i - j]) {
        firstWinRes[i] = true;
        break;
      }
    }
  }
  // console.log(firstWinRes);
  return firstWinRes[N];
};
// @lc code=end
// divisorGame(3);
