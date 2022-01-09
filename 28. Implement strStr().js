// Implement strStr().
// Return the index of the first occurrence of needle in
// haystack, or -1 if needle is not part of haystack.
//
// Clarification:
// What should we return when needle is an empty string?
// This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when
// needle is an empty string. This is consistent to C's
// strstr() and Java's indexOf().
//
// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2
//
// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
//
// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// const strStr = (haystack, needle) => {
//     let result = -1;
//     if ((haystack.length === 0 && needle.length === 0) || needle.length === 0) {
//         return 0;
//     }
//
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i]?.toLowerCase() === needle[0]?.toLowerCase()) {
//             result = i;
//             break;
//         }
//     }
//
//     return result;
// };


const strStr = (haystack, needle) => {
    //edge cases
    if (needle.length <= 0 || needle === haystack) return 0;
    if (needle.length > haystack.length) return -1;

    //sliding window
    //for loop to check if any values needle.length exist within window
    //left is beginning of window, right is end of window, continue until it's gone through entire array
    let start = 0;
    //start right at needle length, so window is never bigger than needle
    for (let end = needle.length; end <= haystack.length; end++) {
        let temp = haystack.slice(start, end);
        //if needle is found, return it's starting index which is "left"
        if (temp === needle) return start;
        //else continue with window
        start++
    }

    //if nothing is found, return -1
    return -1
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('a', ''));