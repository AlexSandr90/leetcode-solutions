// Given an integer array nums, move all the even integers
// at the beginning of the array followed by all the odd
// integers.
//
// Return any array that satisfies this condition.
//
// Example 1:
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3],
// and [4,2,1,3] would also be accepted.
//
// Example 2:
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const sortArrayByParity = nums => {
//     let arrParity = [];
//     let arrOthers = [];
//     for (let number of nums) {
//         number % 2 === 0 ? arrParity.push(number) : arrOthers.push(number);
//     }
//     return [...arrParity, ...arrOthers];
// };

const sortArrayByParity = nums => {
    let result = [];
    for (let number of nums) {
       number % 2 === 0 && result.push(number);
    }

    for (let number of nums) {
        number % 2 !== 0 && result.push(number);
    }
    return result;
};


console.log(sortArrayByParity([3, 1, 2, 4]));