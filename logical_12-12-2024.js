//1)Check if a given string is a palindrome, ignoring spaces, capitalization, and punctuation.
// Example: "A man, a plan, a canal, Panama" → true
 /*
const str = "A man, a plan, a canal, Panama";


let cleaned = "";
for (let char of str) {
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        cleaned += char.toLowerCase();
    }
}

let reversed = "";
for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
}
const isPalindrome = cleaned === reversed;

console.log(isPalindrome); // Output: true */



// 2)Count the number of times a specific character appears in a string.
// Example: "hello world",
// output: character 'l' → 3
 
/* const str = "hello world";
const charToCount = 'l';

const count = [...str].filter(char => char === charToCount).length;

console.log(`Character '${charToCount}' → ${count}`); // Output: Character 'l' → 3
 */
 
// 3) Given an email address, extract the domain name.
// Example: "user@example.com" → "example.com"
 
/* const email = "user@example.com";
const domain = email.split('@')[1];

console.log(domain); // Output: "example.com"

 */

// 4)Sort the characters in a string in alphabetical order.
// Example: "javascript" → "aacijprstv"

/* str="javascript".split("")
result=str.sort().join("")
console.log(result) */

// output:
// aacijprstv
 
 
// 5)Given an array, split its values into separate variables using the spread operator.
// Example: [1, 2, 3, 4] → a=1, b=2, rest=[3, 4]
 
/* const arr = [1, 2, 3, 4];
const [a, b, ...rest] = arr;

console.log(`a=${a}, b=${b}, rest=${rest}`); // Output: a=1, b=2, rest=[3,4] */


// 6)flatten a nested array using the spread operator.
// Example: [1, [2, 3], [4, [5, 6]]] → [1, 2, 3, 4, 5, 6]

/* arr=[1, [2, 3], [4, [5, 6]]];
console.log(arr.flat(Infinity))
 */
// output:
// [ 1, 2, 3, 4, 5, 6 ]
 
// 7) Group elements of an array based on their frequency.
// Example: [1, 2, 2, 3, 3, 3] → {1: 1, 2: 2, 3: 3}
 

/* const arr = [1, 2, 2, 3, 3, 3];
const frequency = arr.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});

console.log(frequency); // Output: {1: 1, 2: 2, 3: 3}
 */

// 8) Remove all falsy values (e.g., 0, null, undefined, false, NaN, '') from an array.
// Example: [1, 0, null, 2, '', 3, undefined] → [1, 2, 3]
 
/* const arr = [1, 0, null, 2, '', 3, undefined];
const filtered = arr.filter(Boolean);

console.log(filtered); // Output: [1, 2, 3]
 */

// 9) check if two strings are anagrams of each other.
// Example: "listen" and "silent" → true
 
/* const areAnagrams = (str1, str2) => 
    [...str1].sort().join('') === [...str2].sort().join('');

console.log(areAnagrams("listen", "silent")); // Output: true
 */


// 10) Find common elements in an arbitrary number of arrays.
// Example: [1, 2, 3], [2, 3, 4], [3, 4, 5] → [3]
 
/* const commonElements = (...arrays) => 
    arrays.reduce((acc, arr) => acc.filter(item => arr.includes(item)));

console.log(commonElements([1, 2, 3], [2, 3, 4], [3, 4, 5])); // Output: [3]
 */

// 11)Find Number of element in an array represents an island
// assume 1 as land and 0 as water.
// ["10101","00100","00010","00100","00010","11011"]  ->2

