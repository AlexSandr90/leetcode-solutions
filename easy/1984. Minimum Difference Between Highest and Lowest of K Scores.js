// You are given a 0-indexed integer array nums, where
// nums[i] represents the score of the ith student.
// You are also given an integer k.
//
// Pick the scores of any k students from the array so
// that the difference between the highest and the
// lowest of the k scores is minimized.
//
// Return the minimum possible difference.
//
// Example 1:
//
// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
//
// Example 2:
//
// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

// const minimumDifference = (nums, k) => {
//     if (k === 1) return 0;
//
//     let minimum;
//     nums.sort((a, b) => b - a);
//
//     for (let index = 0; index <= nums.length - k; index++) {
//         const max = nums[index];
//         const min = nums[index + k - 1];
//
//         minimum = Math.min(minimum, max - min);
//     }
//
//     return minimum;
// };

const minimumDifference = (nums, k) => {
    if (nums.length === 1) return 0;
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = k - 1;
    let min = Infinity;

    while (right < nums.length) {
        min = Math.min(min, nums[right] - nums[left]);
        right++;
        left++;
    }
    return min;
};

console.log(minimumDifference([90], 1));
console.log(minimumDifference([9,4,1,7], 2));