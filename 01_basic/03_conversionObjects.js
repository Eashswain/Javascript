// Data conversion
let score1="33"
let score2="123abc"
console.log(typeof score1); //in simple way to write in order to find the typeof
console.log(typeof (score1)); //Another method to find type of is by writing function
//In order to convert from one data type to another

let valueInNumber1 = Number(score1);
console.log(valueInNumber1)
console.log(typeof score2);
console.log(typeof (score2));
let valueInNumber2=String(score2);
console.log(valueInNumber2)
//Boolean
let score3=false
console.log(typeof score3);
let valueInNumber3=Number(score3);
console.log(valueInNumber3);
//when we are converting below values into Number type,it provides foolowing outcomes
// "33"=>33
// "33abc"=>NAN(Not an number)
//true=>1;false=>0
let isLoggedIn=1;
let Booleanvalue=Boolean(isLoggedIn);
console.log(Booleanvalue);


