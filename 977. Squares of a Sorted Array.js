// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in
// non-decreasing order.
//
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
//
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// const sortedSquares = nums => {
//     let res = nums.map(item => Math.pow(item, 2));
//     return res.sort((a, b) => a - b);
// };

// const sortedSquares = nums => {
//     let res = nums.map(item => item ** 2);
//     return res.sort((a, b) => a - b);
// };

// const sortedSquares = nums => nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b);

// const sortedSquares = nums => {
//     let left = 0;
//     let right = nums.length - 1;
//     const arr = [];
//
//     for (let i = nums.length - 1; i >= 0; i--) {
//         let numToSquare;
//         if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//             numToSquare = nums[left];
//             left++;
//         } else {
//             numToSquare = nums[right];
//             right--;
//         }
//
//         arr[i] = numToSquare ** 2;
//     }
//     return arr;
// };

const sortedSquares = nums => {
    let left = 0;
    let right = nums.length - 1;

    let output = new Array(nums.length);
    let count = nums.length - 1;
    let cur = 0;
    while (left <= right) {
        let x = nums[left] ** 2;
        let y = nums[right] ** 2;
        if (x > y) {
            cur = x;
            ++left;
        } else {
            cur = y;
            --right;
        }
        output[count--] = cur;
    }
    return output;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7,-3,2,3,11]));

console.log(Math.pow(-4, 2));

console.log(Math.sqrt(1));
console.log(Math.sqrt(4));
console.log(Math.sqrt(16));

// const isPowerOfTwo = num => {
//     // if (num === 1) return true;
//     const degree = Math.ceil(Math.log(num) / Math.log(2));
//     console.log(Math.log(num) / Math.log(2));
//     console.log(Math.pow(2, degree));
//     return Math.pow(2, degree) === num;
// };

const isPowerOfTwo = num => {
    if (num <= 0) return false;

    return (2 ** 32 % num) === 0
};


console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(16));