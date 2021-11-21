// Given an integer number n, return the difference between
// the product of its digits and the sum of its digits.
//
// Example 1:
//
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
//
// Example 2:
//
// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

const subtractProductAndSum = num => {
    const str = num.toString();
    let digits = 1;
    let sum = 0;

    for (let i = 0; i< str.length; i++) {
        digits *= str[i];
        sum += parseInt(str[i]);
    }

    return digits - sum;
};

console.log(subtractProductAndSum(234));