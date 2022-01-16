// The power of the string is the maximum length of a
// non-empty substring that contains only one unique character.
//
// Given a string s, return the power of s.
//
// Example 1:
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character
// 'e' only.
//
// Example 2:
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character
// 'e' only.

const maxPower = s => {
    let max = 1;
    let count = 1;
    for (let i  = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
            max = Math.max(count, max);
        } else if (s[i] !== s[i + 1]) {
            count = 1;
        }
    }
    return max;
};

console.log(maxPower('leetcode'));
console.log(maxPower('abbcccddddeeeeedcba'));