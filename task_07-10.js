/* 1.Count how many times a letter occurring in a string
         input : sri veni pogula 
         Output : { s : 1, r : 1, i : 2, v : 1, e : 1, n : 1, p: 1, o:1, g:1, u:1, l:1, a:1 }


str = 'this is javascript'
obj = {}
for (i = 0; i < str.length; i++){
	if (str[i] in obj) {
		obj[str[i]] += 1
	} else if(str[i]!==' ') {
		obj[str[i]] = 1
	}
}

console.log(obj)

*/

/*
2. replace all Vowels(By taking one sample text json file) in object body value (string)  with  #
 
json = { "name":"shravan","age":26,"city":"Hyd","description":"This a javascript"}

vowels = /[AEIOUaeiou]/g
for (let key in json){
	if (typeof json[key] === 'string') {
		json[key]=json[key].replace(vowels,'#')
	}
}
console.log(typeof vowels)
*/

/*
3.Take one array and add first all even numbers and second all odd numbers in a digit.
         Input:[2435,982,5642,1232,87]
         Output:[68,109,125,44,87]

/* input = [2435, 982, 5642, 1232, 87]
output = []

for (i = 0; i < input.length; i++){
	s=String(input[i])
	let even = 0
	let odd = 0
	for (j = 0; j < s.length; j++){
		let digit = parseInt(s[j])
		if (digit % 2 === 0) {
			even+=digit
		}else {
			odd+=digit
		}
	}
	output.push(parseInt(even.toString() + odd.toString()))
	
}
console.log(output)

 */
 /*
4.Take One Array and do the process as if the number consists more than 3 digits To check the coditions as
=>First and last digits are both even or odd no need to perform any operation the same number will return otherwise the first and last numbers are one is even and one is odd it will be added and remaining number is append it.
    Input: [287, 7342, 934757,66542,75,765765]
    Output: [98,97,16811,8105,12,121212]


let input = [287, 7342, 934757,66542,75,765765];
 
const result = [];
 
for (let j of input){
    let strA = ''
    j = j.toString()
    const leng = j.length;
    for (let i = 0 ; i < Math.floor(leng/2) ; i++){
        let A = parseInt(j[i]) + parseInt(j[leng - 1 - i]);
        // console.log(A)
        strA += A.toString();
    }
    if (leng % 2 !== 0) {
        strA += j[Math.floor(leng / 2)]
    }
    result.push(strA)
}
console.log(result)
*/

 /*
5.Take One Array Consists of all digits like single digit numbers,double,triple and more in that you have follows some  rules:-
  =>if it is one digit even or odd number we can add 0 in absence place
=>if it is 2 or more digits we have to count all even and odd numbers.
   Input:[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432]
  Output:[10,10,01,01,11,11,20,11,20,02,21,03,21,21,22,22,22,13,51,23,43]*/


/* let input = [5, 7, 8, 6, 25, 18, 19, 27, 33, 88, 754, 484, 374, 987, 8765, 7645, 8994, 6548, 932157, 48327, 9875432];
let result = [];

for (let idx = 0; idx < input.length; idx++) {
let j = input[idx].toString();
let l = j.length;
let even = 0;
let odd = 0;

for (let i = 0; i < l; i++) {
	if (parseInt(j[i]) % 2 === 0) {
	even += 1;
	} else {
	odd += 1;
	}
}

let mix = odd.toString() + even.toString();
result.push(mix);
}

console.log(result); */
  


/*
6.let a=3;
  let array1 = [0,1,2,3,4,5,6,7,8,9];
  output = [[0,1,2], [3,4,5], [6,7,8], [9]]
 
  let b =5;
  output = [[0,1,2, 3,4],[5, 6,7,8,9]]
 
function array1(a) {
	let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	result = []
	for (i = 0; i < arr.length; i+=a){
		result.push(arr.slice(i,i+a))
	}
	return result
}
a=3
console.log(array1(a))
b = 5
console.log(array1(b))*/

/*
7.work on  this task 
for the given array Remove any negative numbers from the array,
Double each remaining number,
Check if every number is even after the transformation,
Return the sum of the transformed numbers if all are even, otherwise return null.
 
Input:- let numbers = [12, -7, 5, 8, -10, 20];
Expected Output: 90

 
let numbers = [12, -7, 5, 8, -10, 20];

let pos = numbers.filter(x => x > 0)

let dobble = pos.map(x => x + x)

let even = dobble.filter(x => x % 2==0)

let res = even.reduce((x,y)=>x+y)

console.log(res) 
output:90

/* 
8.Taking For loop for 1 to 50 We have to count the total number of 0's,1's,2's,3's,4's,5's,6's,7's,8's,9's
 
let digitCount = Array(10).fill(0); 

for (let i = 1; i <= 50; i++) {
    let numStr = i.toString();
    
    for (let char of numStr) {
        digitCount[parseInt(char)]++;
    }
}

for (let j = 0; j < digitCount.length; j++) {
    console.log(`Count of ${j}'s: ${digitCount[j]}`);
}
*/
 
/*
9.Taking One Array And follow the rules
=>if it is one digits we can add 0
=>if it is consists 2 digits we can swap
=>if it is 3 or more digits we can swap upto the digits and the last digit may constant.
 
Input:-[8,59,738,9645,87657,123456789]
Output:-[80, 95, 378, 4695, 56787, 876543219]


let input = [8,59,738,9645,87657,123456789];
for (let i in input){
    if (input[i].toString().length === 1){
        input[i] = input[i]*10
    }
    else if(input[i].toString().length === 2){
        let swapA = (input[i]%10)*10 + Math.floor(input[i]/10)
        input[i] = swapA
    }
    else {
        let strA = input[i].toString()
        let leng = strA.length
        let strB = strA.slice(0,leng-1)
        let swaped = strB.split('').reverse().join('')+ strA[leng-1]
        input[i]= parseInt(swaped)
    }
}
console.log(input)
 
10.Combination Sum
Objective: Given an array of distinct integers and a target number, find all unique combinations of integers that sum up to the target.
console.log(combinationSum([2, 3, 6, 7], 7));
// Output: [[7], [2, 2, 3]]
Number of Islands
Objective: Given a grid of '1's (land) and '0's (water), count the number of islands.
console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["0","0","1","0","0"],
    ["0","0","0","0","0"]
])); 
//Output: 1 */

let area = [
	["1","1","1","1","0"],
	["1","1","0","1","0"],
	["0","0","1","0","0"],
	["0","0","0","0","0"]
	]
	let count = 0
	let leng = area.length
	for(let i = 0 ; i< leng; i++){
		let leng1 = area[i].length;
		for(let j=0 ; j<leng1;j++){
			if (area[i][j]==='1'){
				if (area[i+1][j] ==='0' && area[i][j+1] ==='0'&& area[i][j-1]==='0' && area[i-1][j]==='0'){
					count+= 1
				}
			}
		}
	}
	console.log(count)