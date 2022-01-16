// Given a string s, reverse the order of characters
// in each word within a sentence while still preserving
// whitespace and initial word order.
//
// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
//
// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// const reverseWords = str => {
//     const strToArr = str.split(' ');
//     const res = [];
//
//     for (let i = 0; i < strToArr.length; i++) {
//         res.push(strToArr[i].split('').reverse().join(''))
//     }
//
//     return res.join(' ');
// };

// const reverseWords = str => {
//     const strToArr = str.split(' ');
//     const res = [];
//
//     for (let item of strToArr) {
//         res.push(item.split('').reverse().join(''))
//     }
//
//     return res.join(' ');
// };

const reverseWords = str => {
    const res = str.split(' ').map(item => item.split('').reverse().join(''));
    return res.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));