/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * 解析：双指针
   * 左右两个指针，比较当前位置左右的指针上值得大小
   * 如果右指针上的值比较大，则将左指针向右移动一次
   * 如果左指针上的值比较大，则将有指针向左移动一次
   * 如果左右指针上的值相等，则顺便移动某一个指针一次
   * 直到左右指针指向同一个位置
   *
   * 证明双指针的正确性：
   * 设：左右指针对应的数分别为 x 和 y ，左右指针之间的距离为 t  并且 x ≤ y
   * 则：min(x, y) * t = x * t
   * 假设：右指针向左移动，此时右指针指向的数为 y1 ，两个指针之间的距离为 t1
   * 显然 t1 < t 并且 min(x, y1) ≤ min(x, y)
   * 此时：
   *    如果：y1 ≤ y 则 min(x, y1) ≤ min(x, y)
   *    如果：y1 > y 则 min(x, y1) = x = min(x, y)
   * 因此：
   * min(x, yt) * t1 < min(x, y) * t
   * 所以不管我们怎么移动右指针，移动后获得的容积都不会比之前的更大
   * 所以移动左指针比较前后两次的获得的容器的大小
   * 不断重复 直到左指针和右指针指向同一位置
   * 注：每次左右指指向的数中最大的那个就相当于新的右指针 (即相等于翻转了一下数组) 重复步骤
   */
  let area = -1;
  let left = 0;
  let right = height.length - 1;
  while (left !== right) {
    let tempArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(tempArea, area);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
};
// @lc code=end
