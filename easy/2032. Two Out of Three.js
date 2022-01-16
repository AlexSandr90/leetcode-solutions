// Given three integer arrays nums1, nums2, and nums3,
// return a distinct array containing all the values
// that are present in at least two out of the three
// arrays. You may return the values in any order.
//
//
//
// Example 1:
// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
//
// Example 2:
// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
//
// Example 3:
// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.

// const twoOutOfThree = (nums1, nums2, nums3) => {
//     const res = [];
//
//     for (let i = 0; i < nums1.length; i++) {
//         if ( nums2.includes(nums1[i]) || nums3.includes(nums1[i]) ) {
//             res.push(nums1[i])
//         }
//     }
//     for (let j = 0; j < nums2.length; j++) {
//         if (nums3.includes(nums2[j])) {
//             res.push(nums2[j])
//         }
//     }
//
//     return [...new Set(res)]
// };


// const twoOutOfThree = (nums1, nums2, nums3) => {
//     const res = [];
//
//     for (let num1 of nums1) {
//         if ( nums2.includes(num1) || nums3.includes(num1) ) {
//             res.push(num1)
//         }
//     }
//     for (let num2 of nums2) {
//         if (nums3.includes(num2)) {
//             res.push(num2)
//         }
//     }
//
//     return [...new Set(res)]
// };

const twoOutOfThree = (nums1, nums2, nums3) => {
    const res = [];

    for (let num1 of nums1) {
        if ( nums2.includes(num1) || nums3.includes(num1) ) {
            res.push(num1)
        }
    }
    for (let num2 of nums2) {
        if (nums3.includes(num2)) {
            res.push(num2)
        }
    }

    return [...new Set(res)]
};

const nums1 = [1,1,3,2];
const nums2 = [2,3];
const nums3 = [3];
console.log(twoOutOfThree(nums1, nums2, nums3));