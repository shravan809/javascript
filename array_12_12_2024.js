/* 
1)Write a function to find the maximum value in an array without using Math.max() or any array method

const arr = [10, 20, 5, 40, 30];

// Output: 40




function findMaxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr = [10, 20, 5, 40, 30];
console.log(findMaxValue(arr)); // Output: 40
*/


/*
 
2) Implement logic to remove duplicates from an array

const arr = [1, 2, 2, 3, 4, 4, 5];

// Output: [1, 2, 3, 4, 5]


function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const arr = [1, 2, 2, 3, 4, 4, 5, 6, 4];
console.log(removeDuplicates(arr)); 
*/

 /*
3)Merge two sorted arrays into one sorted array

const arr1 = [1, 3, 5];

const arr2 = [2, 4, 6];

// Output: [1, 2, 3, 4, 5, 6]


function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0, mergedArray = [];
    while (i < arr1.length || j < arr2.length) {
        if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
            mergedArray.push(arr1[i++]);
        } else {
            mergedArray.push(arr2[j++]);
        }
    }
    return mergedArray;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
*/

 /*
4)Rotate an array by k positions to the right

const arr = [1, 2, 3, 4, 5];

const k = 2;

// Output: [4, 5, 1, 2, 3]
*/

function rotateArray(arr, k) {
    k = k % arr.length; 
    console.log(k)
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]


/* 
5)Given an array of integers from 1 to n with one number missing, find the missing number.

const arr = [1, 2, 4, 5, 6];

// Output: 3

function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((sum, num) => sum + num, 0); 
    return expectedSum - actualSum; 
}

const arr = [1, 2, 4, 5, 6];
const n = 6; 
console.log(findMissingNumber(arr, n)); // Output: 3
*/
 
 
 /*
6)Find all pairs of numbers in an array that add up to a given target sum with methods.

const arr = [1, 2, 3, 4, 5];

const target = 6;

// Output: [[1, 5], [2, 4]]
 
function findPairs(arr, target) {
    const pairs = [];
    const seen = new Set();

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

const arr = [1, 2, 3, 4, 5];
const target = 6;
console.log(findPairs(arr, target)); // Output: [[2, 4], [1, 5]]
*/
 
 
/*
7) Rearrange the array elements so they alternate between high and low values (in descending order for highs and ascending order for lows).

const arr = [1, 2, 3, 4, 5, 6, 7];

// Output: [7, 1, 6, 2, 5, 3, 4]

function rearrangeHighLow(arr) {
    arr.sort((a, b) => a - b); 
    const result = [];
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        if (high >= low) result.push(arr[high--]); 
        if (low <= high) result.push(arr[low++]); 
    }

    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rearrangeHighLow(arr)); // Output: [7, 1, 6, 2, 5, 3, 4]
*/


/* 
8)Find the Kth smallest element in an unsorted array without using any sorting functions.

const arr = [7, 10, 4, 3, 20, 15];

const k = 3;

// Output: 7 (3rd smallest element)*/






/*
9)Given an array where each element represents the height of a bar, calculate how much 
rainwater can be trapped between the bars

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Output: 6


*/