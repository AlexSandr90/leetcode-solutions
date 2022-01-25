// Given two integer arrays nums1 and nums2, return
// an array of their intersection. Each element in
// the result must appear as many times as it shows
// in both arrays and you may return the result in
// any order.
//
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
//
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const inp1 = [1,2,2,1];
const inp2 = [2,2];
const inp3 = [4,9,5];
const inp4 = [9,4,9,8,4];

const intersect = (nums1, nums2) => {
    let result = [];

    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
    }, {});

    for (let i = 0; i < nums2.length; i++) {
        let count = map[nums2[i]];

        if (count && count > 0) {
            result.push(nums2[i]);
            map[nums2[i]] -= 1;
        }
    }

    return result;
};

console.log(intersect(inp1, inp2));
console.log(intersect(inp3, inp4));