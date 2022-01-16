// You are given a string num, representing a large integer.
// Return the largest-valued odd integer (as a string) that
// is a non-empty substring of num, or an empty string "" if
// no odd integer exists.
//
// A substring is a contiguous sequence of characters within a string.
//
// Example 1:
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2",
// and "52". "5" is the only odd number.
//
// Example 2:
// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
//
// Example 3:
// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

const largestOddNumber = num => {
    if(Number(num.slice(-1)) % 2 !== 0) return num;
    let strToArr = num.split('');
    let res = 0;

    for (let item of strToArr) {
        if ((item % 2 !== 0) && (item > res)) res = item;
    }

    return res !== 0 ? res.toString() : '';
};

console.log(largestOddNumber("52"));