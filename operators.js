/* 1. Assignment Operator (=)
---------------------------
What does the assignment operator (=) do in JavaScript?
ANS:The assignment operator (=) is used to assign a value to a variable. 
The expression on the right-hand side of the = is evaluated, and the
resulting value is stored in the variable on the left-hand side.



Given the following code, what will be the output of console.log(x)?
*/
/* let x = 20;
x = 50;
console.log(x); 


o/p:
50 */


/* 
2. Equality Operator (==)
--------------------------
What is the difference between the == operator and the === operator in JavaScript?

== operator will compare the values of variable is equal or not, if it is eqaul it returns True or it is False.
=== operator will compare the values and datatype of variable is equal or not, if it is equal it returns True or it is False.

What will be the result of the following comparison? Why?
console.log(5 == '5');

output:
True
why means value is same i.e 5 5==5 so it returns True


How does type coercion affect the result of == in JavaScript? Provide an example.
ANS:It converts the values being compared to a common type before comparing them.
Ex:
console.log(ture==1) //output: ture

*/

/* 
3. Strict Equality Operator (===)
--------------------------
What does the strict equality operator (===) check for?
Ans:
=== operator will compare the values and datatype of variable is equal or not, if it is equal it returns True or it is False.


What will be the result of the following comparison? Why?


console.log(5 === '5');//output:Flase
Why is it generally recommended to use === over == in JavaScript? 
Ans:
With ===, JavaScript checks both the value and the type of the operands, meaning it does not attempt to implicitly
 convert one operand to match the type of the other.
 This eliminates the unpredictable type coercion that happens with ==.
*/


/* 
4. Arithmetic Operators (+, -, *, /, %, ++, --)
----------------------------------------------------
What will be the result of the following arithmetic operations?


let a = 45;
let b = 3;
console.log(a + b); // Addition
output:48

console.log(a - b); // Subtraction
output:
42

console.log(a * b); // Multiplication
output:135

console.log(a / b); // Division
output:15

console.log(a % b); // Modulus
output:0

What does the ++ operator do in JavaScript? What will be the result of the following code?
ANS: ++ operator will increment the value by 1
let c = 15;
c++;
console.log(c);
output:16

What does the -- operator do in JavaScript? What will be the result of the following code?
ANS: -- operator will decrement the value by 1

let d = 30;
d--;
console.log(d);
output:29

What is the result of using combined assignment operators like +=, -=, *=, and /=? Provide examples.

let a = 50
let b = 20
let c = 25
let d = 30

console.log(a += 10)//60
console.log(b -= 10)//10
console.log(c *= 10)//250
console.log(d /= 10)//3

*/

/* 5. Type Coercion with == and ===
-------------------------------------
Explain how type coercion works with the == operator and provide an example.
Ans:
When comparing values using the == operator, JavaScript will convert one or both
 of the values to a common type (usually numbers) before making the comparison

Why does the following comparison return true?

console.log(0 == false);
Ans:
Javascript will convert false to 0 which is number data type so both are equal.

What will be the result of the following comparisons? Explain why.

console.log(10 === '10');
output:
False,because values are same but datatype is different so output is false.
console.log(null === undefined);
output:
False,because datatype is different so output is false.


Assignment Operator (=)
What will be the output of the following code snippet?

let a = 25;
let b = a;
b = 10;
console.log(a); // What will be the output?
output:
25

If you have the following code, what will be the value of x after the code is executed?

let x;
x = 30;
x = x + 2;
x = x * 4;
output:
128
How does the assignment operator work with different data types? For example, what happens when you assign a string to a number variable?

Ans:
 JavaScript is a dynamically typed language, meaning variables are not bound to a specific type.
  You can assign values of any type to any variable, and JavaScript will handle the type implicitly.

*/

/* 6. Equality Operator (==)
-------------------------------------
What is the result of comparing the following values with == and why?
console.log(10 == true);//False
console.log(1 == true);//True
console.log('0' == 0);//True
console.log([] == false);//True
console.log({} == false);//False
How does JavaScript handle the comparison of arrays and objects with ==? Provide examples.

Ans:
Empty Array is consider as '' (empty string) means 0 so both are equal
False, because objects do not coerce to numbers


console.log([1, 2] == [1, 2]); // What is the result?output://False
console.log({a: 1} == {a: 1}); // What is the result?output://False

*/

/* 3. Strict Equality Operator (===)
What will be the result of the following comparisons and why?

console.log('123' === 123);//False
console.log(true === 1);//False
console.log(undefined === null);//False

How does the strict equality operator handle the comparison of different types? Provide examples 
Ans:
=== operator will compare the values and datatype of variable is equal or not, if it is equal it returns True or it is False.
*/

/* 4. Arithmetic Operators (+, -, *, /, %, ++, --)
What will be the output of the following code? Explain why.

let x = 7;
let y = 3;
console.log(x + y * 2);//output:13
console.log((x + y) * 2);//output:20
What will be the result of the following code snippets, and how does the += operator affect the variables?

let a = 10;
a += 5;
console.log(a);//output:15

let b = 'Hello';
b += ' World';
console.log(b);//output:Hello World
What will be the result of the following modulus operation and why?

console.log(17 % 5);//output:2     modulus will return reminder
console.log(-17 % 5); //output:-2  modulus will return reminder
*/


/* 
5. Combined Assignment Operators
What does the following code do, and what will be the value of result after execution?

let result = 10;
result += 5;
result -= 3;
result *= 2;
result /= 4;
result %= 3;
console.log(result);//output:0
How do combined assignment operators handle different data types? For example, what happens if you use += with a number and a string?

let value = 10;
value += '20'; // What will be the value of `value`? 

output:1020

*/

/* 
7. Comparison of NaN and Infinity
-------------------------------------
What will be the result of comparing NaN with NaN using == and ===?

console.log(NaN == NaN);//False
console.log(NaN === NaN);//False
What will be the result of comparing Infinity with -Infinity?

console.log(Infinity == -Infinity);//False
console.log(Infinity === -Infinity);//False

*/

/* Exponentiation:
---------------
1.How do you find the square of 4 using Exponentiation?

console.log(4**2)//output:16

2.What is 2 ** -2? what will be the output?
output:
4

3.What is (-2) ** 3?
output:
-6

4.What is 8 ** (1/3)?
output:
2

5.What is 1.5 ** 2?
output:
2.25

6.Write more examples using exponent similar to above questions? 

console.log(1.9 ** 1.2)//output:2.160

console.log(25 ** 2.5)//output:3125

*/


/* 
Logical operator:
-----------------
1.write a code using the logical operators AND (&&) and OR (||) with all possible combinations of true and false values.

example:
console.log(true && true) //ture

console.log(true && false)//false
console.log(false && true)//false
console.log(false && false)//false

console.log(true || true)//ture
console.log(true || false)//ture
console.log(false || true)//ture
console.log(false || false)//false

*/

/* comparison operator:
--------------------
1. write a code using the all comparison operators (==,===,!=,!==,<=,>=,<,>)?
example: 

let a=2
let b=4
console.log(a + 2 > b - 2) //ture
console.log(a + 2 == b - 2)//false
console.log(a + 2 === b - 2)//false
console.log(a + 2 != b - 2)//ture
console.log(a + 2 !== b - 2)//ture
console.log(a + 2 <= b - 2)//false
console.log(a + 2 >= b - 2)//ture
console.log(a + 2 < b - 2)//false

*/