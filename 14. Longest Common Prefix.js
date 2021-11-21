// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
//
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Напишіть функцію, щоб знайти найдовший загальний рядок префікса серед масиву рядків.
// Якщо спільного префікса немає, поверніть порожній рядок "".

const longestCommonPrefix = strings => {
    let res = '';

    for (let i = 0; i < strings[0].length; i++) {
        for (let j = 1; j < strings.length; j++) {
            if (strings[j].includes(strings[0][0])) {
                res += strings[0][0];
            } else {
                res = ''
            }
        }
    }

    return res;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));