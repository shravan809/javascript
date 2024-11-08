

/*
1.Take one array and add first all even numbers and second all odd numbers in a digit.
         Input:[2435,982,5642,1232,87]
         Output:[68,109,125,44,87]



input = [2435, 982, 5642, 1232, 87]
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
2.Take One Array and do the process as if the number consists more than 3 digits To check the coditions as
=>First and last numbers  will be added .
    Input: [287, 7342, 934757,66542,75,765765]
    


let input = [287, 7342, 934757,66542,75,765765];
 
const result = [];
 
for (let j of input){
    let str = ''
    j = j.toString()
    const leng = j.length;
    for (let i = 0 ; i < Math.floor(leng/2) ; i++){
        let A = parseInt(j[i]) + parseInt(j[leng - 1 - i]);
        // console.log(A)
        str += A.toString();
    }
    if (leng % 2 !== 0) {
        str += j[Math.floor(leng / 2)]
    }
    result.push(str)
}
console.log(result)*/
/*
3.Take One Array Consists of all digits like single digit numbers,double,triple and more in that you have follows some  rules:-
  =>if it is one digit even or odd number we can add 0 in absence place
=>if it is 2 or more digits we have to count all even and odd numbers.
Note:-In Output 1st Digit Represents Odd and 2nd Digit Represents Even.
   Input:[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432]
Output:[10,10,01,01,11,11,20,11,20,02,21,03,21,21,22,22,22,13,51,23,43]

let input = [5, 7, 8, 6, 25, 18, 19, 27, 33, 88, 754, 484, 374, 987, 8765, 7645, 8994, 6548, 932157, 48327, 9875432];
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

console.log(result);*/
/*
4.let a=3;
  let array1 = [0,1,2,3,4,5,6,7,8,9];
  output = [[0,1,2], [3,4,5], [6,7,8], [9]]
  let b =5;
  output = [[0,1,2, 3,4],[5, 6,7,8,9]]

function array1(a) {
	let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	res = []
	for (i = 0; i < arr.length; i+=a){
		res.push(arr.slice(i,i+a))
	}
	return res
}
a=3
console.log(array1(a))
b = 4
console.log(array1(b))*/

/*
5.Combination Sum
Objective: Given an array of distinct integers and a target number, find all unique combinations of integers that sum up to the target.
[2, 3, 6, 7]
// Output: [[7], [2, 2, 3]]*/

const combinationSum = (candidates, target) => {
    const result = [];
    const stack = [[[], 0, target]]; 
    
    while (stack.length > 0) {
        const [path, start, remaining] = stack.pop(); 

        if (remaining === 0) {
            result.push(path);
            continue;
        }
        if (remaining < 0) {
            continue;
        }

        for (let i = start; i < candidates.length; i++) {
            stack.push([[...path, candidates[i]], i, remaining - candidates[i]]);
        }
    }

    return result;
};

const candidates = [2, 3, 6, 7];
const target = 6;
console.log(combinationSum(candidates, target)); 

// o / p:
// [[7], [2, 2, 3]]


/*
6.Taking One Array And follow the rules
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
console.log(input)*/