//1. Declare a const variable and try to reassign it. What error does JavaScript throw?

// const num = 25;
// num = 45;

// output:
// TypeError: Assignment to constant variable.


//2. Create a variable that holds a string, a boolean, a number, and an object.
//Use the typeof operator to display the type of each variable.

/* let str = "Hello";
let flag = true;
let num = 100;
let person = { name: "John", age: 30 };
output:
String
Boolean
Number
Object */



/* //3.Write a JavaScript program to swap two variables using a third variable.
let a = 15, b = 20;
let temp;
temp = a;
a = b;
b = temp;

console.log('a=',a);
console.log('b=',b);
output:
a= 20
b= 15 */
    

/* // 4.What happens when you declare a variable without the var, let, or const keyword inside a function?
//  Is it a good practice? Why or why not?

function show() {
    st = 'shravan';  
}
show();
console.log(st); 
output:
shravan */


// 5.How can you declare multiple variables on a single line, and what are the potential downsides?

/* let num = 20, str = "javascript", bool = fasle;
console.log(num, str, bool);
output:
20 javascript fasle */


// 6.What is the difference between primitive and non-primitive data types in JavaScript? Provide examples.
// let num = 42;
// let str = "Hello";
// let obj = { name: "Alice", age: 25 };
// let arr = [1, 2, 3];
    
/* // Primitive
let num = 42;  //Number
let str = "Hello";//String

// Non-Primitive
let obj = { name: "Alice", age: 25 };//Object
let arr = [1, 2, 3];//array

// Changing values
num = 50;
obj.name = "Bob";   // Does this modify the original object?
console.log(obj);
output:
{ name: 'Bob', age: 25 } */


/* // 7.Write a program to copy the value of a primitive type and a non-primitive type. Show how changing one affects or doesn't affect the other.
// i)let a = 10;
//   let b = a;
// ii)let obj1 = { value: 10 };
//    let obj2 = obj1;


   // Primitive
let a = 10;
let b = a;
b = 20;
console.log(a);
output:10

// Non-Primitive (Object)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);
output:
20 */

/* 
// 8.How does JavaScript handle the comparison between primitive and non-primitive data types? Provide an example with == and ===.
let x = 20;
let y = "20";
console.log(x == y);  
console.log(x === y); 
output:
true
false

// Non-Primitive
let obj1 = { name: "shravan" };
let obj2 = { name: "shravan" };
console.log(obj1 == obj2);
output:
false */

/* 
// 9.Write a program that uses the ternary operator to check if a number is positive, negative, or zero.

let number = 100;
let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
console.log(result);  
output:
positive */


// 10.Use the ternary operator to check if a given number is even or odd.
/* 
let phone_number = 8099174582;
let result = (phone_number % 2 === 0) ? "Even" : "Odd";
console.log(result);  
output:
Even */


// 11.Write a function that uses the ternary operator to return the greater of two numbers.

/* 
function greater(a, b) {
    return (a > b) ? a : b;
}

console.log(greater(15, 10));
output:
15 */

 
/* // 12.Write a program that uses a ternary operator to determine if a person is eligible to vote (18 years or older).

let age = 25;
let vote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(vote);
output:
Eligible to vote */

/*
13.Using a ternary operator, write a program that checks if a given string is empty or not. */
/* var st = "pallavi";
var isEmpty = (st === "") ? "Empty String" : "Not Empty";
console.log(isEmpty);

output:
Not Empty */