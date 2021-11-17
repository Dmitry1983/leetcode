// 5. Longest Palindromic Substring
// Medium

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

var longestPalindrome = function (s) {
  let arr = [];
  let index = 0;
  const l = s.length;
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      let section = s.slice(i, j + 1);
      // console.log(section);
      if (section == section.split("").reverse().join("")) {
        arr.push(section);
      }
    }
  }

  index = arr
    .map((i) => i.length)
    .indexOf(Math.max(...arr.map((i) => i.length)));

  return arr[index];
};

console.log(longestPalindrome("babad"));
