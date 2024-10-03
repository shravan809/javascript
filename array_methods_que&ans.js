/* Array methods questions:

1)Convert the following string into an array of words

let sentence = "Learning JavaScript is fun";
Expected output:
['Learning', 'JavaScript', 'is', 'fun']

let sentence = "Learning JavaScript is fun";

console.log(sentence.split(' '))*/



/*
/////////////////////////////////
2)Remove the first element from this array:

let numbers = [10, 20, 30, 40];
Expected output:
[20, 30, 40]

let numbers = [10, 20, 30, 40];
let res=numbers.shift(10)
console.log(res,numbers)
*/

/*/////////////////////////////////
3)Add the number 5 at the beginning of this array:

let numbers = [10, 20, 30, 40];
Expected output:
[5, 10, 20, 30, 40]

let numbers = [10, 20, 30, 40];
console.log(numbers.unshift(5))
console.log(numbers)
*/

/*
////////////////////////////////
4)Check if the array contains the element 15:

let numbers = [5, 10, 15, 20];
Expected output:
true
let numbers = [5, 10, 15, 20];

console.log(numbers.includes(15))*/


/*
////////////////////////////////
5)Remove the second and third elements from this array:

let numbers = [10, 20, 30, 40, 50];
Expected output:
[10, 40, 50]

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.splice(1,2))
console.log(numbers)*/
/*
////////////////////////////////
6)Create a new array containing the second and third elements from this array:

let numbers = [10, 20, 30, 40, 50];
Expected output:
[20, 30]

let numbers = [10, 20, 30, 40, 50];

let res=numbers.slice(1,3)
console.log(res)
*/

/*
///////////////////////////////////
7)Check if all elements in this array are greater than 5:

let numbers = [10, 20, 30, 40];
Expected output:
true
let numbers = [10, 20, 30, 40];

console.log(numbers.every(x=>x>5))*/

/*
///////////////////////////////////////
8)Create a new array with each element doubled:

let numbers = [1, 2, 3, 4];
Expected output:
[2, 4, 6, 8]

let numbers = [1, 2, 3, 4];

console.log(numbers.map(x=>x*2))*/

/*
////////////////////////////////////////
9)Add the number 50 to the end of this array:

let numbers = [10, 20, 30, 40];
Expected output:
[10, 20, 30, 40, 50]

let numbers = [10, 20, 30, 40];
let res=numbers.push(50)
console.log(numbers)*/

/*
///////////////////////////////////////
10) Remove the last element from this array:

let numbers = [10, 20, 30, 40];
Expected output:
[10, 20, 30]

let numbers = [10, 20, 30, 40];
let res=numbers.pop(40)
console.log(numbers)

*/

/*
///////////////////////////////////////
11): Reverse the order of elements in this array:

let numbers = [1, 2, 3, 4];
Expected output:
[4, 3, 2, 1]
let numbers = [1, 2, 3, 4];

console.log(numbers.reverse())*/
/*
/////////////////////////////////////////
12)Convert the following array into a string, separating elements by commas:

let fruits = ['apple', 'banana', 'cherry'];
Expected output:
"apple,banana,cherry"
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.join(','))
*/

/*
///////////////////////////////////////////////
13)convert nested array into a single-level array:

let nestedArray = [1, [2, 3], [4, 5]];
Expected output:
[1, 2, 3, 4, 5]
let nestedArray = [1, [2, 3], [4, 5]];

console.log(nestedArray.flat())*/



/*
///////////////////////////////

14) Join all the elements of the array into a string separated by -:

let words = ['Hello', 'world', 'JavaScript'];
Expected output:
"Hello-world-JavaScript"

let words = ['Hello', 'world', 'JavaScript'];

console.log(words.join('-'))*/

/*
///////////////////////////////////////
15) Combine two arrays into one:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Expected output:
[1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1.concat(arr2))*/


/*
/////////////////////////////////
16)Check if the following is an array:

let value = [1, [2], 3,4,"hi"];

let value = [1, [2], 3, 4, "hi"];

console.log(Array.isArray(value))
//false
*/

/*
///////////////////////////////////////

17) Print each element in the array to the console:

let fruits = ['apple', 'banana', 'cherry',undefined];

let fruits = ['apple', 'banana', 'cherry',undefined];
fruits.forEach(x=>console.log(x))
*/

/*
18)
Find the length of an array.

Example:
Input: ["dog", "cat", "fish",Null]
Output: 3

input = ["dog", "cat", "fish", null];

filter = input.filter(x => x !== null)
console.log(filter.length)
*/
/*
/////////////////////////////////////////////////////////
//////////////////////////////
19)for the given array Remove any negative numbers from the array,
Double each remaining number,
Check if every number is even after the transformation,
Return the sum of the transformed numbers if all are even, otherwise return null.

let numbers = [12, -7, 5, 8, -10, 20];
Expected Output:
88*/
/* 
let numbers = [12, -7, 5, 8, -10, 20];

let pos = numbers.filter(x => x > 0)

let dobble = pos.map(x => x + x)

let even = dobble.filter(x => x % 2==0)

let res = even.reduce((x,y)=>x+y)

console.log(res) */
