//5.Take One Array Consists of all digits like single digit numbers,double,triple and more in that you have follows some  
//rules:-

//  =>if it is one digit even or odd number we can add 0 in absence place

//=>if it is 2 or more digits we have to count all even and odd numbers.

//Input:[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432]

//Output:[10,10,01,01,11,11,20,11,20,02,21,03,21,21,22,22,22,13,51,23,43]

input=[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432]

output=[]

for (let i=0;i<input.length;i++){
	let e_count=0
	let o_count=0
	st=input[i].toString()
	len=st.length	
	
	for (let j=0;j<len;j++){
		if (parseInt(st[j])%2==0){
		e_count+=1
		}else{
		o_count+=1
		}
	}
let concat=o_count.toString()+e_count.toString()
output.push(concat)
}
console.log(output)