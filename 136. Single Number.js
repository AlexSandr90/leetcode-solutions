// Given a non-empty array of integers nums, every
// element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime
// complexity and use only constant extra space.
//
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
//
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
//
// Example 3:
// Input: nums = [1]
// Output: 1
// Враховуючи непорожній масив цілих чисел, кожен
// елемент з’являється двічі, крім одного. Знайдіть ту єдину.
// Ви повинні реалізувати рішення з лінійною складністю часу
// виконання та використовувати лише постійний додатковий простір.

const singleNumber = nums => {
    if (nums.length === 1) {
        return nums[0];
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));
console.log(singleNumber([1,0,1]));