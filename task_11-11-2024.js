/* 1.Given an array of numbers, write a function that returns only the even numbers using the filter() method.
Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]


input = [1, 2, 3, 4, 5, 6]

const even = input.filter(input => input % 2 === 0)
console.log(even);
output:
[2, 4, 6]
*/

/*
2.given an array of user objects with properties name and age. Write a function that returns
 only the users who are older than 25.
Input:
 
[
  { name: "Alice", age: 23 },
  { name: "Bob", age: 27 },
  { name: "Charlie", age: 30 }
]
Output:
[
  { name: "Bob", age: 27 },
  { name: "Charlie", age: 30 }
]

input = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 27 },
  { name: "Charlie", age: 30 }
]
const res = input.filter(input=>input['age']>25)
console.log(res);

output:
[ { name: 'Bob', age: 27 }, { name: 'Charlie', age: 30 } ]*/


/*
3.Write a function that takes an array and returns a new array with only unique values, 
filtering out duplicates.
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

arr = [1, 2, 2, 3, 4, 4, 5, 6]
const duplicates = arr.filter((value, index, dup) => (dup.indexOf(value) === index))
console.log(duplicates);
output:
[1,2,3,4,5,6]

/*
4.Write a function that filters out all falsy values from an array. Falsy values in JavaScript 
are false, 0, "", null, undefined, and NaN.
Input: [0, "hello", false, "", undefined, 42]
Output: ["hello", 42]

input = [0, 'hello', false, '', undefined, 42]

const res = input.filter(input => input !== '' && input !== false && input !== undefined && input !== 0)

console.log(res);

output:
['hello', 42]
*/

/*
5. Given an array of numbers, return a new array that includes numbers that are either 
divisible by 3 or greater than 20.
Input: [3, 12, 19, 21, 25, 30]

Output: [3, 12, 21, 25, 30]

input = [3, 12, 21, 25, 30]

const res = input.filter(input => input % 3 == 0 || input > 20)
console.log(res);
*/
/*
6.Write a function that returns the product of all numbers in an array using the reduce()
 method.
Input: [1, 2, 3, 4]
Output: 24

input = [1, 2, 3, 4]
const res = input.reduce((input, value) => input * value)
console.log(res);
*/

/*
7.Question: Write a function that counts the occurrences of each value in an array using the 
reduce() method.
Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
Output:
{ apple: 3, banana: 2, orange: 1 }

input = ["apple", "banana", "apple", "orange", "banana", "apple"]

const res = input.reduce((acc, value) => {acc[value] = (acc[value] || 0) + 1;
    return acc},{})

console.log(res);
*/

/*
8.Write a function that flattens a nested array using the reduce() method.
Input: [1, [2, 3], [4, [5, 6]]]
Output: [1, 2, 3, 4, 5, 6]


input = [1, [2, 3], [4, [5, 6]]]
const flaten = input.reduce((acc, value) => {
    if (Array.isArray(value)) {
        return acc.concat(value)
    } else {
        return acc.concat(value)
    }
},[])

console.log(flaten);
*/

/*
9.Given an array of objects, write a function that groups the objects by a specific property using the reduce() method.
Input:
const people = [
  { name: "Alice", group: "A" }
  { name: "Bob", group: "B" },
  { name: "Charlie", group: "A" },
  { name: "David", group: "B" }
];
Output:
{
  A: [{ name: "Alice", group: "A" }, { name: "Charlie", group: "A" }],
  B: [{ name: "Bob", group: "B" }, { name: "David", group: "B" }]
}

const people = [
    { name: "Alice", group: "A" },
    { name: "Bob", group: "B" },
    { name: "Charlie", group: "A" },
    { name: "David", group: "B" }
  ];
const res = people.reduce((acc, obj) => {
    let k = obj['group']
    if (!acc[k]) {
        acc[k]=[]
    }
    acc[k].push(obj)
    return acc
},{})
console.log(res);

output:
{
    A: [ { name: 'Alice', group: 'A' }, { name: 'Charlie', group: 'A' } ],
    B: [ { name: 'Bob', group: 'B' }, { name: 'David', group: 'B' } ]
}
  */
/*
10.Given an array of key-value pairs, write a function that converts the array into an object using the reduce() method.
Example Input: [['name', 'Alice'], ['age', 25], ['job', 'Engineer']]
Expected Output:
{ name: 'Alice', age: 25, job: 'Engineer' } 

input = [['name', 'Alice'], ['age', 25], ['job', 'Engineer']]

const res = input.reduce((acc, [key,value]) => {
    acc[key] = value
    return acc
}, {})
console.log(res);
output:
{ name: 'Alice', age: 25, job: 'Engineer' }

*/