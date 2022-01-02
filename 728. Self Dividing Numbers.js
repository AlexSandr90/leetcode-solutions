// A self-dividing number is a number that
// is divisible by every digit it contains.
//
// For example, 128 is a self-dividing number because
// 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
//
// A self-dividing number is not allowed to contain
// the digit zero.
// Given two integers left and right, return a list
// of all the self-dividing numbers in the range [left, right].
//
// Example 1:
// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
//
// Example 2:
// Input: left = 47, right = 85
// Output: [48,55,66,77]

const selfDividingNumbers = (start, finish) => {
    let arr = [];
    let res = [];
    for (let i = start; i <= finish; i++) {
        arr.push(i);
    }

    for (let j = 0; j < arr.length; j++) {
        let tmp = arr[j].toString().split('');
        let allTrue = [];
        for (let k = 0; k < tmp.length; k++) {
            if (arr[j] % +tmp[k] === 0) {
                allTrue.push(true);
            } else {
                allTrue.push(false);
            }
        }
        if (allTrue.every(item => item === true)) {
            res.push(arr[j]);
        }
    }

    return res;
};

console.log(selfDividingNumbers(1, 22));