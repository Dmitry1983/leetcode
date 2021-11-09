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

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
