// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
  if (s === "") {
    return 0;
  }
  let ary = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (s.slice(i, j).search(s[j]) === -1) {
        ary.push(s.slice(i, j + 1).length);
      } else {
        break;
      }
    }
  }
  return Math.max(...ary);
};

var lengthOfLongestSubstring2 = function (s) {
  const map = new Map();
  let longest = 0;
  let start = 0;
  let ch, pos;
  for (let i = 0; i < s.length; i++) {
    ch = s[i];
    pos = map.get(ch);
    if (pos) {
      if (i - start > longest) {
        longest = i - start;
      }
      while (start < pos) map.set(s[start++], 0);
    }
    map.set(ch, i + 1);
  }
  return Math.max(longest, s.length - start);
};

console.log(
  lengthOfLongestSubstring2(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABC"
  )
);
