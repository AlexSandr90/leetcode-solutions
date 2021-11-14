// Given a 1-indexed array of integers numbers that is already sorted in
// non-decreasing order, find two numbers such that they add up to a
// specific target number. Let these two numbers be numbers[index1] and
// numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one
// as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.

const twoSum = (arr, target) => {
    const res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                if (!res.includes(i + 1) && !res.includes(j + 1)) {
                    res.push(i + 1, j + 1);
                }
            }
        }
    }

    return res;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1, 0], -1));