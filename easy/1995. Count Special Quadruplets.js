// Given a 0-indexed integer array nums, return the
// number of distinct quadruplets (a, b, c, d) such that:
//
//     nums[a] + nums[b] + nums[c] == nums[d], and
//     a < b < c < d
//
// Example 1:
//
// Input: nums = [1,2,3,6]
// Output: 1
// Explanation: The only quadruplet that satisfies the requirement
// is (0, 1, 2, 3) because 1 + 2 + 3 == 6.
//
// Example 2:
// Input: nums = [3,3,6,4,5]
// Output: 0
// Explanation: There are no such quadruplets in [3,3,6,4,5].
//
// Example 3:
// Input: nums = [1,1,1,3,5]
// Output: 4
// Explanation: The 4 quadruplets that satisfy the requirement are:
// - (0, 1, 2, 3): 1 + 1 + 1 == 3
// - (0, 1, 3, 4): 1 + 1 + 3 == 5
// - (0, 2, 3, 4): 1 + 1 + 3 == 5
// - (1, 2, 3, 4): 1 + 1 + 3 == 5

const countQuadruplets1 = nums => {
    let quadruplesArr = [];
    let tmp, tmpArr = [], res = 1, p1 = 0, p2 = 1, shift = 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i< nums.length; i++) {
        tmp = Array.from({length: nums[i]}, (v, item) => item);
        for (let j = 0; j < tmp.length; j++) {
            // console.log(nums[i], j);
            // console.log(nums[i] % j);
            if (nums[i] % j === 0) {
                // console.log(j);
                // console.log(tmp[j] % j === 0);
                tmpArr.push(j);
            }
        }
        if (tmpArr.length > 0) {
            quadruplesArr.push([...new Set(tmpArr.sort((a, b) => a - b))]);
        }
    }

    while (p2 < quadruplesArr.length) {
        if (quadruplesArr.length >= shift) {
            if (quadruplesArr[p2].includes(quadruplesArr[p1][quadruplesArr[p1].length - shift])) {
                res = quadruplesArr[p1][quadruplesArr[p1].length - shift];
                p2++;
            } else {
                shift++;
                p2 = 1;
            }
        }
    }

    // console.log(quadruplesArr);

    return res;
};

const countQuadruplets = nums => {
    let count = 0;

    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            for (let c = b + 1; c < nums.length - 1; c++) {
                const sum = nums[a] + nums[b] + nums[c];
                const find = nums.slice(c + 1).filter(num => num === sum);

                count += find.length;
            }
        }
    }

    return count;
};

console.log(countQuadruplets([1, 2, 3, 6]));
console.log(countQuadruplets1([1, 2, 3, 6]));
console.log(countQuadruplets([3,3,6,4,5]));
console.log(countQuadruplets1([3,3,6,4,5]));
console.log(3 % 1 === 0);
