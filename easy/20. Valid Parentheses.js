// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//
// Example 1:
// Input: s = "()"
// Output: true
//
// Example 2:
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
// Input: s = "(]"
// Output: false
//
// Example 4:
// Input: s = "([)]"
// Output: false
//
// Example 5:
// Input: s = "{[]}"
// Output: true

// const isValid = str => {
//     if (str.length % 2 !== 0 || str.length < 2) {
//         return false;
//     }
//     const res = [];
//
//     for (let item of str) {
//         if (['[', '{', '('].includes(item)) {
//             res.push(item);
//         } else {
//             if (str.length === 0) return false;
//
//             const pair = res.pop() + item;
//             if (!['[]', '{}', '()'].includes(pair)) return false;
//         };
//     };
//
//     return res.length === 0;
// };

const isValid = str => {
    if (str.length % 2 !== 0) {
        return false;
    }
    const res = [];
    const hash = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    for (let i = 0; i < str.length; i++) {
        // if (hash[str[i]]) {
        if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
            res.push(hash[str[i]]);
        } else if (str[i] !== res.pop()) {
            return false;
        }
    }
    return res.length === 0
};


// const isValid = str => {
//     const regex = /(\{\})|(\[\])|(\(\))/g;
//     while(str.match(regex)) {
//         str = str.replace(regex, '');
//     };
//     return str === '';
// };

console.log(isValid("{[]}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("(){}}{"));
