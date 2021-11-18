// 7. Reverse Integer
// Medium

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:

// -2**31 <= x <= 2**31 - 1

const reverseInteger = (number) => {
  const upper = 2 ** 31 - 1;
  const lower = -1 * 2 ** 31;
  let negative = 1;
  if (number == 0) {
    return 0;
  }
  if (number < 0) {
    number = number * -1;
    negative = -1;
  }

  number = number.toString().split("").reverse().join("") * negative;
  if (number >= upper || number <= lower || number == 0) {
    return 0;
  }
  return number;
};

console.log(reverseInteger(-1234567));
