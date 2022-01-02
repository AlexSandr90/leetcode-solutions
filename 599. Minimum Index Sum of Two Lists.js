// Suppose Andy and Doris want to choose a restaurant for dinner,
// and they both have a list of favorite restaurants represented
// by strings.
//
// You need to help them find out their common interest with the
// least list index sum. If there is a choice tie between answers,
// output all of them with no order requirement. You could assume
// there always exists an answer.

// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
//
// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
// list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index
// sum is "Shogun" with index sum 1 (0+1).
//
// Example 3:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
// list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
//
// Example 4:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
// list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
//
// Example 5:
// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]

const findRestaurant = (list1, list2) => {
    const map = new Map();
    list1.forEach((restaurant, idx) => map.set(restaurant, idx));

    let minIndexSum = Infinity;
    const sumMap = new Map();

    list2.forEach((restaurant, idx) => {
        if(map.has(restaurant)) {
            const sum = map.get(restaurant) + idx;
            const value = sumMap.has(sum) ? sumMap.get(sum) : [];
            value.push(restaurant);
            sumMap.set(sum, value);
            minIndexSum = Math.min(minIndexSum, sum);
        }
    });
    return sumMap.get(minIndexSum);
};

const list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
const list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];

console.log(findRestaurant(list1, list2));