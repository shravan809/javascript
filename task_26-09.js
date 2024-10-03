/* 1.Given two sorted arrays nums1 and nums2 of size m and n respectively, return the
median of the two sorted arrays.
Input: arr1[]={-5, 3, 6, 12, 15}, arr2[] = {-12, -10, -6, -3, 4, 10}
Output: The median is 3.
Explanation: The merged array is arr3[]{-12, -10, -6, -5, -3, 3, 4, 6, 10, 12, 15}. So the median of the merged 
array is 3.
*/

/* 
arr1 = [-5, 3, 6, 12, 15,25]
arr2 = [-12, -10, -6, -3, 4, 10]

arr3 = arr1.concat(arr2)

sorted = arr3.sort(function (a, b) { return a - b })

midindex = Math.floor(sorted.length / 2)//5

if (arr3.length % 2 === 0) {
    console.log((arr3[midindex - 1] + arr3[midindex]) / 2)
} else {
    console.log(arr3[midindex])

}
 */

// 2. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem).
// Input: 1,2,3,4,5,6,7,8,9]
// Target:9

/* arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 9

arr1=[]
for (let i = 0; i < arr.length; i++){
    let fristelement = arr[i]
    let remaingelements = arr.slice(i + 1)
    
    for (let j = 0; j < remaingelements.length; j++){
        if (fristelement + remaingelements[j] == target) {
            arr1.push([fristelement,remaingelements[j]])
        }
    }
    
}

console.log(arr1) */


/*3.Write a JavaScript function to sort the following array of objects by libraryID
Sample object:
library = [
{author: 'Bill Gates', title: The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: "Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}]
*/

/* 
function sortarr(library,key) {
    return library.sort(function (a, b) {
        x = a[key];
        y = b[key];
        return (x < y ? -1 : x < y ? 1 : 0)  
    })
}
library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}]

console.log(sortarr(library,'libraryID')) */

/*
4.Given a strings consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s= "Hello World"
Output: 5
Example 2:
Input: s" fly me to the moon"
Output: 4*/

/* s = 'fly me to the moon'
l = s.split(' ')
last = l.slice(-1)

console.log(last[0].length) */

/*
5.There are two arrays with individual values, write program to compute the sum of each
individual index value from the given arrays.
array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13]; */


/* array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13]; 
arr3 = []

maxlength = Math.max(array1.length, array2.length)

for (let i = 0; i < maxlength; i++) {
    let value1 = array1[i] !== undefined ? array1[i] : 0;
    let value2 = array2[i] !== undefined ? array2[i] : 0;
    arr3.push(value1 + value2)
}
console.log(arr3) */

/* 
//give output as [[1,2],[3,4],[4,5],[5,6],[7,8],[9,10]]
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = 2
res = []
for (i = 0; i < arr.length; i+=a){
    res.push(arr.slice(i, i + a))   
}
console.log(res) */

