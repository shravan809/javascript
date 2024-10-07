/* 
Exponentiation: 
--------------- 
1.How do you find the square of 4 using Exponentiation? 

let a = 4;
console.log(a**2)
//16 
*/

/*
2.What is 2 ** -2? what will be the output? 

let a = 2
console.log(a ** -2)
//0.25
*/

/*
3.What is (-2) ** 3? 

console.log((-2) ** 3)
//-8
*/
/*
4.What is 8 ** (1/3)? 

console.log(8**(1/3))//2*/

/*
5.What is 1.5 ** 2? 

// console.log(1.5 ** 2)
//2


//6.Write more examples using exponent similar to above questions?

console.log(3.2 ** 2)//10.24
console.log(8 ** 3)//512
console.log(4 ** 6)//4096*/

/*
Logical operator: 
----------------- 
1.write a code using the logical operators AND (&&) and OR (||) with all possible combinations of true and false values. 

example: 
console.log(true && true) //true
console.log(true && false)//false
console.log(false && true)//false
console.log(false && false)//false

console.log(true || true) //true
console.log(true || false)//true
console.log(false || true)//true
console.log(false || false)//false
*/

/*
comparison operator: 
-------------------- 
1. write a code using the all comparison operators (==,===,!=,!==,<=,>=,<,>)? 
example:  
let a=2 
let b=4 
console.log(a+2>b-2) //true
console.log(a === b)//false
console.log(a == b)//false
console.log(a !== b)//true
console.log(a != b)//true
console.log(a <= b)//true
console.log(a >= b)//false
console.log(a < b)//true
console.log(a > b)//false
*/

/*
Following are Java Script tasks on loops and conditional statements,if statements 

1.Write a program that checks if a number is positive, negative, or zero. 

n = 0;

if (n > 0) {
    console.log('Given number is pasitive')
} else if (n < 0) {
    console.log('Given number is negative')
} else {
    console.log('Given number is zero')
}
*/
/*
2.Write a program that assigns a grade (A, B, C, D, F) based on a score using nested if. 

marks=30

if (marks > 90 && marks <= 100){
    console.log('Grade A')
} else if (marks > 75 && marks<90) {
    console.log('Grade B')
} else if (marks > 55 && marks<75) {
    console.log('Grade C')
} else if (marks > 35 && marks<55) {
    console.log('Grade D')
} else {
    console.log('Grade F')
}
*/

/*
3.Develop a program that determines if a number is even or odd and whether it is within a certain range (1 to 100) 
n = 99

if (n >= 1 && n <= 100) {
    if (n % 2 == 0) {
        console.log('EVEN')
    } else {
        console.log('ODD')
    }
} else {
    console.log('Please enter the number b/w 1 to 100')
}
*/

/*
4.Write a program that checks if a person is eligible to vote based on their age and citizenship status using nested if. 

age = 10

if (age >= 18) {
    console.log('Elgible for vote')
} else {
    console.log('not eligible for vote')
}
*/
/*
5.Write a program that determines if a character is a vowel or consonant? 

str = 'A'
vowel = 'aeiou'
str=str.toLowerCase()
if (vowel.includes(str)){
    console.log('it is a vowel')
} else {
    console.log('it is a consonant')
}
*/

/*
for loop: 
--------- 
1.Write a for loop to compute the sum of all integers from 1 to 50. 

sum = 0

for (i = 1; i < 51; i++){
    sum+=i
}
console.log(sum)*/

/*
2.Write a for loop that prints the first 10 multiples of a given number n? 
n=10
for (i = 1; i < 11; i++){
    console.log(n,'*',i,'=',n*i)
} 
*/

/*
3.Write a for loop to print all prime numbers between 1 and 100. 

for (i = 2; i < 100; i++){
    isprime = true
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            isprime=false
            break
        }
    }
    if (isprime){
        console.log(i)
    }
}
*/

/*
4.Use a for loop to compute the sum of squares of the first 10 positive integers. 
sum=0
for (i = 1; i < 10; i++){
    sum+=i**2
}
console.log(sum)
*/

/*
5.Write a program that prints the sum of each pair of numbers between 1 and 2 using nested for loop? 

for (i = 1; i <= 2; i++){
    for (j = 1; j <= 2; j++){
        let sum = i + j;
        console.log(`sum of ${i} and ${j} is: ${sum}`)
    }
}
*/

/*
Nested loops: 
--------------- 
1.Write a program that calculates the sum of all i**j values for i and j ranging from 1 to 3(using exponent). 
let sum = 0;

for (i = 1; i <= 3; i++){
    for (j = 1; j <= 3; j++){
        sum += i ** j;
        
    }
}
console.log(`sum of all i^j values for i and j from 1 to 3  is: ${sum}`)
*/
/*
2.Write a program that counts and prints pairs (i, j) between 1 and 4 where one number is even and the other is odd. 

let count = 0

for (let i = 1; i <= 4; i++){
    for (let j = 1; i <= 4; j++){
        if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 == 0)){
            console.log(`Pair (${i},${j})`)
            count++
        }
    }
}
// console.log(count)*/

/*
3.Write a program that prints all pairs (i, j) between 1 and 5 where the difference between i and j is 2. 

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if ((j-i) === 2) {
            console.log(`Pair: (${i}, ${j})`);
        }
    }
}
*/


/*
4.Write a program where the outer loop runs from 5 to 1, and the inner loop runs from 1 to 3, printing each pair (i, j).

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Pair: (${i}, ${j})`);
    }
}
*/

/*
5.Write a program that finds pairs of numbers (i, j) between 1 and 5 where both numbers are prime. 

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        
        if (isPrime(i) && isPrime(j)) {
            console.log(`Pair: (${i}, ${j})`);
        }
    }
}
*/

/*
6.Write a program that checks and prints when i is equal to or greater than j in nested loop running from 1 to 5 range.

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
    
        if (i >= j) {
            console.log(`i: ${i}, j: ${j} (i is equal to or greater than j)`);
        }
    }
}
*/
/*
7.Write a program that counts the total number of iterations performed in nested loops where the outer loop runs from 
1 to 3 and the inner loop runs from 1 to 2. 

let totalIterations = 0;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        totalIterations++; // Increment the counter for each iteration
    }
}

console.log(`Total number of iterations: ${totalIterations}`);
*/

/*
8.Write a program that checks if the sum of pairs (i, j) between 1 and 4 is a prime number. 


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        let sum = i + j; 
        
        if (isPrime(sum)) {
            console.log(`The sum of pair (${i}, ${j}) = ${sum} is a prime number.`);
        } else {
            console.log(`The sum of pair (${i}, ${j}) = ${sum} is not a prime number.`);
        }
    }
}
*/


/*
9.Write a program that finds pairs (i, j) from 1 to 3 where the sum i + j is greater than the product i * j. 
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i + j > i * j) {
            console.log(`Pair: (${i}, ${j}) - Sum: ${i + j}, Product: ${i * j}`);
        }
    }
}
*/


/*
10.Write a program that prints pairs (i, j) from 1 to 3 where the product i * j is even. 


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        
        if ((i * j) % 2 === 0) {
            console.log(`Pair: (${i}, ${j}) - Product: ${i * j}`);
        }
    }
}
 */