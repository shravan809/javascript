

/* // 1.What will be the result of the following expression?

let result = 10 + "5";
output:
105 */

/* 
// 2.what will be the final value of x?

let x = 5;

x += 10;  

x -= 3;   

x *= 2;   

x /= 4;   
output:
6 */


/* 
//3.What will be the output of the following code? Explain the result:

console.log(0 == false);//ture

console.log(0 === false);//false

console.log("5" == 5);//ture

console.log("5" === 5);//false
 */


/* 
//4.console.log(typeof "Hello");//string

console.log(typeof 42);//number

console.log(typeof true);//boolean

console.log(typeof null);//object
 */

//.......................................................................................................................

//1.What will be the output of the following code? Explain the scope behavior.
/* 
function testBlockScope() {

  if (true) {

    let x = 10;

    const y = 20;

    console.log(x, y); 

  }

  console.log(x); 

  console.log(y); 

}

testBlockScope();

output:
10 20
x is not defined
y is not defined */


//2.Explain the output of the following code:
/* 
function testVarScope() {

  var x = 10;

}

testVarScope();

console.log(x); 

output:
x is defined */
/* 
//3.What will be the output of the following code?

var globalVar = 5;

function modifyGlobalVar() {

  globalVar = 10;

}

console.log(globalVar); 

modifyGlobalVar();

console.log(globalVar); 

output:
5
10 */

//............................................................................................................
/* 
//1.Convert a string to a number using Number() and parseInt().

let str = "8099";

// Using Number()
let num1 = Number(str);
console.log(num1); // Output: 8099

// Using parseInt()
let num2 = parseInt(str);
console.log(num2); // Output: 8099


2.Convert a string to a number using Number() and parseInt(). */

//3.Convert a number to a boolean and check its value.

/* let number = 1;


let boolValue = Boolean(number);


if (boolValue) {
  console.log(ture);
} else {
  console.log(flase);
}
output:
ture */

//4.Write code to check if a value is NaN.   if statements


/* 
let value; 


let convertedValue = Number(value);

if (isNaN(convertedValue)) {
  console.log("The value is NaN");
} else {
  console.log('The value is a valid number:', convertedValue);
}

output:
The value is NaN */


//-------------

//1.Write a program that checks if a number is positive, negative, or zero.


let number = prompt("Enter a number:");

// Convert input to a number
number = Number(number);

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


/*2.Write a program that assigns a grade (A, B, C, D, F) based on a score using nested if.

3.Develop a program that determines if a number is even or odd and whether it is within a certain range (1 to 100)

4.Write a program that checks if a person is eligible to vote based on their age and citizenship status using nested if.

5.Write a program that determines if a character is a vowel or consonant?

 */