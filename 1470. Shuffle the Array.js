// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// url: https://leetcode.com/problems/shuffle-the-array/

const shuffle = (nums, n) => {
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        if ((i + n) < nums.length) {
            result.push(nums[i], nums[i + n])
        }
    }

    return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

