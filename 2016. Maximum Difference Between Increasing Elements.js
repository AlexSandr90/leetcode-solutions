// Given a 0-indexed integer array nums of size n,
// find the maximum difference between nums[i] and nums[j]
// (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and
// nums[i] < nums[j].
//
// Return the maximum difference. If no such i and j exists, return -1.
//
// Example 1:
// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and
// j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the
// difference nums[j] - nums[i] = 7 - 1 = 6,
// but i > j, so it is not valid.
//
// Example 2:
// Input: nums = [9,4,3,2]
// Output: -1
// Explanation:
// There is no i and j such that i < j and nums[i] < nums[j].
//
// Example 3:
// Input: nums = [1,5,2,10]
// Output: 9
// Explanation:
// The maximum difference occurs with i = 0 and j = 3,
// nums[j] - nums[i] = 10 - 1 = 9.

// const maximumDifference = nums => {
//     let res = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if ((nums[j] - nums[i]) > res) {
//                 res = nums[j] - nums[i]
//             }
//         }
//     }
//     return res > 0 ? res : -1;
// };

const maximumDifference = nums => {
    let res = -1;
    let pointer1 = 0;
    let pointer2 = 1;
    while (pointer2 <= nums.length - 1) {
        if (nums[pointer1] < nums[pointer2]) {
            if ((nums[pointer2] - nums[pointer1]) > res ) {
                res = nums[pointer2] - nums[pointer1];
            }
            pointer2++;
        } else {
            pointer1 = pointer2;
            pointer2++;
        }
    }
    return res;
};

console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([9,4,3,2]));
console.log(maximumDifference([1,5,2,10]));