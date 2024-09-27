

/* Arrays:
1.Find Maximum in an Array:
Write a for loop to find the maximum value in an array let arr = [10, 5, 20, 15, 30].
 */
/* 
arr = [10, 5, 20, 15, 30]

let max = arr[0];


for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Maximum value in the array:", max);

output:
Maximum value in the array: 30 */

// 2.Reverse an Array:
// Write a function using a loop that takes an array and returns the array in reverse order.

/* 
arr = [10, 5, 20, 15, 30]

let reverse = []

for (let i = arr.length - 1; i >= 0; i--){
    reverse.push(arr[i])
}
console.log(reverse)

output:
[30, 15, 20, 5, 10]
 */

// 3.Find the Index of an Element:
// Write a for loop to find the index of a specific value in an array, e.g., find the index of 'green' in

/* let colors = ['red', 'blue', 'green', 'yellow']

for (let i = 1; i < colors.length; i++){
    if (colors[i] == 'green') {
        index = i
    }
}
console.log(index) */


// 4.Remove Duplicates:
// Write a function using a for loop to remove duplicate values from an array

//let arr = [1, 2, 3, 2, 4, 1, 5]
/* arr = [1, 2, 3, 2, 4, 1, 5]

arr1=[]
for (el of arr) {
    if (!arr1.includes(el)) {
        arr1.push(el)
    }
}
console.log(arr1) */

//.................................................................................................................................................
/*Loops:
1.FizzBuzz Problem:
Write a for loop that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz".
For numbers that are multiples of both 3 and 5, print "FizzBuzz".
*/

/* for (i = 1; i < 101; i++){
    if (i % (3 * 5) == 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}
 */

/*
2.Factorial:
Write a for loop to find the factorial of a number n. For example, if n = 5, the result should be 5 * 4 * 3 * 2 * 1 = 120.
*/

/* n = 5
fact=1
for (i = 2; i <= n; i++){
    fact *= i
}
console.log(fact) */
/*
3.Sum of Multiples:
Write a for loop that calculates the sum of all multiples of 3 or 5 below 1000.
*/
/* let sum = 0
for (let i = 1; i <= 1000; i++){
    if (i % 3 == 0 || i % 5 == 0){
        sum += i 
    }
}
console.log(sum) */


/*
4.Count Vowels in a String:
Write a loop to count the number of vowels (a, e, i, o, u) in a given string.
Break and Continue:
*/
/* 
st = 'How Are You'
vowels = 'aeiouAEIOU'
count=0
for (i = 0; i < st.length; i++){
    char = st[i]
    if (!vowels.includes(char)) {
        continue
    }
    count++
    if (count >= 10) {
        break
    }
}
console.log(count) */

/*
5.Write a loop that prints numbers from 1 to 10 but skips the number 5 using the continue statement. Stop the loop 
entirely when the number reaches 8 using the break statement.*/


/* for (i = 1; i < 11; i++){
    // console.log(i)
    if (i == 5) {
        continue
    } else if (i == 8) {
        break
    }
    else
        console.log(i)
} */

/*
.................................................................................................................................................
Data Types:
 
//1.Write a function that takes a value and returns its data type.*/
/* 
function show() {
    let a = 10;
    return typeof a
}
console.log(show());

 */

//2.Write a function that checks if a given value is an array.
/* 
function test() {
    let arr = [1, 8, 9, 6, 3, 4, 7]
    return Array.isArray(arr)
}
console.log(test()) */

//3.Write a function that checks if a value is undefined or null.
/* 
function display() {
    let fruit;
    return isNaN(fruit)
}
console.log(display()) */


//4.Write a function that converts a string "123" to a number and checks its type.
/* 
function convert() {
    let string = '123'
    let converts = Number(string)
    return typeof converts
}
console.log(convert()) */

//5.Write a function that converts a boolean value (true or false) to a string, and then back to a boolean.
 
/* function convert() {
    let bool = true
    let conv = String(bool)
    return typeof conv
}
console.log(convert())
 */
//.................................................................................................................................................


//Operators:
//1.Modulus Operator:
//Write a program that uses the modulus operator % to check if a number is even or odd.

/* let num = 1283

if (num % 2 == 0) {
    console.log('EVEN')
} else {
    console.log('ODD')
} */


//2.Nullish Coalescing Operator (??):
//Use the nullish coalescing operator to provide a fallback value for a variable that might be null or undefined.

/* let userInput=0
let defaultInput = 25;

let finalInput = userInput ?? defaultInput;

console.log(finalInput); 

output:
0*/


//3.Find the Largest of Three Numbers Using Ternary Operator:

/* let a = 1
let b = 8
let c = 70

let res = (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c;

console.log(res) 
output:
70

*/
//4.Write a function to find the largest of three numbers using a ternary operator.

/* function display(a, b, c) {
    let res = (a > b) ? 
              (a > c ? a : c) : 
              (b > c ? b : c); 
    return res
}
let a = 10
let b = 50
let c = 1

console.log(display(a,b,c))  
output:
50
*/
//5.Write a function that returns the result of raising a base number to a given power using the exponentiation operator (**).
/* 
function exp(a) {
    return 5 ** a
    
}
a = 2
console.log(exp(a)) 
output:
25
*/