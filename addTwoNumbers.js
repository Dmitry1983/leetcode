// https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1, l2) => {
  return (parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join("")))
    .toString()
    .split("")
    .reverse()
    .map((e) => parseInt(e));
};

const addTwoNumbers2 = (ary1, ary2) => {
  let result;
  const revers = (array) => {
    const l = array.length;
    let rev = "";
    for (let i = l - 1; i >= 0; i--) {
      rev = rev + array[i];
    }
    return rev;
  };
  result = revers((revers(ary1) * 1 + revers(ary2) * 1).toString());
  return result.split("").map((e) => e * 1);
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

console.log(addTwoNumbers2([2, 4, 3], [5, 6, 4]));
