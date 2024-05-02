"use strict";

const num = 800
const num1 = 800.8000


console.log(num.toFixed(2));//its use for giving number after point 
console.log(num1.toPrecision(3));//its 
console.log(num.toString());//convert the number in string


//Maths

console.log(Math.round(5.6));//its give not decimal value
console.log(Math.ceil(5.1));//its give the upper value 
console.log(Math.floor(5.9));//its give the lower value
console.log(Math.random())

//if we want a random value btw 100 to 1000 
const min = 100
const max= 1000
console.log(Math.round((Math.random()*1000)+min));