// Given a string s, find the first non-repeating character
// in it and return its index. If it does not exist, return -1.
//
// Example 1:
// Input: s = "leetcode"
// Output: 0
//
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
//
// Example 3:
// Input: s = "aabb"
// Output: -1

/**
 * @param {string} string
 * @return {number}
 */
const firstUniqChar = string => {
    let map = new Map();

    // string.split('').forEach(item => {
    //     map.has(item)
    //         ? map.set(item, map.get(item) + 1)
    //         : map.set(item, 1)
    // });
    //
    // for (let item of string) {
    //     map.has(item)
    //         ? map.set(item, map.get(item) + 1)
    //         : map.set(item, 1)
    // }

    for (let i = 0; i < string.length; i++) {
        map.has(string[i])
            ? map.set(string[i], map.get(string[i]) + 1)
            : map.set(string[i], 1);
    }

    for (let j = 0; j < string.length; j++) {
        if (map.get(string[j]) === 1) {
            return j;
        }
    }

    return -1;
};

// const firstUniqChar = str => {
//     const obj = str.split('').reduce((aggr, e) => {
//         aggr[e] = aggr[e] ?  aggr[e] + 1 : 1;
//         return aggr
//     }, {});
//
//     return  Object.keys(obj).find((e) => obj[e] === 1) || -1;
// };

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar("dddccdbba"));