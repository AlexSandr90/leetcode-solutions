// Given an array of integers nums, sort the array in ascending order.
//
// const sortArray = nums => nums.sort((a, b) => a - b);
//
// console.log(sortArray([5, 2, 3, 1]));

// const bubbleSortArray = nums => {
//
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = 0; nums.length - 1 - i; j++) {
//             if (nums[j + 1] < nums[j]) {
//                 // [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
//                 let t = nums[j+1];
//                 nums[j+1] = nums[j];
//                 nums[j] = t;
//             }
//         }
//     }
//     console.log(nums);
//     return nums;
// };
//
//
// // console.log(bubbleSortArray([5, 2, 3, 1]));
//
// function quickSort(arr) {
//     let initialLeftPos = 0;
//     let leftPos = 0;
//     let initialRightPos = arr.length - 1;
//     let rightPos = arr.length - 1;
//     let direction = true;
//     let pivot = arr.length - 1;
//
//     while ((leftPos - rightPos) < 0) {
//         if (direction) {
//             if (arr[pivot] <arr[leftPos]) {
//                 [arr[pivot], arr[leftPos]] = [arr[leftPos], arr[pivot]];
//                 pivot = leftPos;
//                 rightPos--;
//                 direction = !direction;
//             } else {
//                 leftPos++
//             }
//         } else {
//             if (arr[pivot] <= arr[rightPos]) {
//                 rightPos--
//             } else {
//                 [arr[pivot], arr[rightPos]] = [arr[rightPos], arr[pivot]];
//                 leftPos++;
//                 pivot = rightPos;
//                 direction = !direction;
//             }
//         }
//     }
//
// }
//
// console.log(quickSort([5, 2, 3, 1]));

const bubbleSort = arr => {
    let stepCount = arr.length - 1;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < stepCount; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        stepCount--;
    } while (swapped);

    return arr;
};

console.log(bubbleSort([5, 2, 3, 1]));