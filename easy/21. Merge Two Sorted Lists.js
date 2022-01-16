//Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of
// the first two lists.

// const mergeTwoLists = (l1, l2) => {
//     const temp = l1.concat(l2);
//     return temp.sort((a, b) => a - b)
// };

const mergeTwoLists = (l1, l2) => {
   if (!l1 || !l2) {
      return l1 || l2;
   }

   if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
   } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
   }
};


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// console.log(mergeTwoLists([], []));
// console.log(mergeTwoLists([], [0]));