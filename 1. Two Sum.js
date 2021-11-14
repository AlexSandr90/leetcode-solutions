// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Враховуючи масив цілих чисел nums і ціле число, поверніть
// індекси двох чисел так, щоб вони дорівнювали цілі.
// Ви можете припустити, що кожен вхід матиме рівно одне рішення,
// і ви не можете використовувати один і той самий елемент двічі.
// Відповідь можна повернути в будь-якому порядку.

//Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// const twoSum = (arr, target) => {
//     const result = [];
//     let initialIndex = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[initialIndex] + arr[j] === target) {
//                 if (!result.includes(initialIndex) && !result.includes(j)) {
//                     result.push(initialIndex, j);
//                 }
//             }
//         }
//         initialIndex++;
//     }
//     return result;
// };

const twoSum = (arr, target) => {
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j] === target)) {
                result.push(i, j);
            }
        }
    }
    return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15, 7, 2], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,2,3], 6));