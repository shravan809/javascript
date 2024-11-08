/* 1.let a=3;
  let array1 = [0,1,2,3,4,5,6,7,8,9];
  output = [[0,1,2], [3,4,5], [6,7,8], [9]]
  let b =5;
  output = [[0,1,2, 3,4],[5, 6,7,8,9]
 
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
console.log(array1(b))
*/

/*
2.Count how many times a letter occurring in a string
         input : sri veni pogula 
         Output : { s : 1, r : 1, i : 2, v : 1,e : 1, n : 1, p: 1, o:1, g:1, u:1, l:1, a:1 }


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
3. replace all Vowels(By taking one sample text json file) in object body value (string)  with  #

json = { "name":"shravan","age":26,"city":"Hyd","description":"This a javascript"}

vowels = /[AEIOUaeiou]/g
for (let key in json){
  if (typeof json[key] === 'string') {
    json[key]=json[key].replace(vowels,'#')
  }
}
console.log(typeof vowels)*/
/*
4.Taking For loop for 1 to 50 We have to count the total number of 0's,1's,2's,3's,4's,5's,6's,7's,8's,9's

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
5.Taking One Array and follows the some rules
=>if the array has single digit consecutives one is even and one is odd then we can add those numbers other wise 
the first number will be same
=>if the array has two digits in that one is even and one is odd the we can add otherwise same number will return
=>if the array consists 3 or more digits the first and last digits have one is even and one is odd then we can 
add those numbers and remain number will append to it.
Input:-[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876]
Output:-[9,7,9,774,983,5,13,17,46,9,9,11,17,9,33,743,118,7674,7,11,9,5,2,138787]  */


input = [2, 7, 9, 6741, 983, 23, 67, 89, 46, 27, 6, 3, 8, 9, 33, 2435, 982, 56742, 5, 2, 9, 3, 2, 787876]

for (let i = 0; i < input.length; i++) {

  if (input[i].toString().length === 1) {
    if ((input[i] % 2 == 1 && input[i + 1] % 2 == 0) || (input[i] % 2 == 0 && input[i + 1] % 2 == 1)) {
      let even = input[i] + input[i + 1]
      console.log(even)

    } else {
      let odd1 = input[i]
      console.log(odd1);
    }
  } else if (input[i].toString().length === 2) {
    let str = ''
    if (Math.floor(input[i] / 10) % 2 == 0 && (input[i] % 10) % 2 == 1) {
      b = Math.floor(input[i] / 10) + (input[i] % 10)
      console.log(b);
    } else {
      console.log(input[i]);
    }
  } else {
    const firstDigit = parseInt(input[i].toString()[0]);
    const lastDigit = parseInt(input[i].toString()[input[i].toString().length - 1]);
    
      if ((firstDigit % 2 == 0 && lastDigit % 2 == 1) || (firstDigit % 2 == 1 && lastDigit % 2 == 0)) {
        const sum = firstDigit + lastDigit;
        const middlePart = input[i].toString().slice(1, -1);
        console.log(parseInt(sum + middlePart));
      } else {
        console.log(input[i])
      }
  }
}

