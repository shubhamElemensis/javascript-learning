"use strict";


const myobjt = {
    name:"shubham",
    age:18,
    city:"surat",
    number : 956545146,
}

myobjt.greeting = function () {
    console.log(`hello , I'm ${this.name},my age was ${this.age}`)
}

console.log(myobjt.greeting());


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const objsum=Object.assign(obj1,obj2)//concat two objects
const objsum1 = {...obj1,...obj2}//concat by using sperad operate
console.log(objsum);
console.log(objsum1);


const obj = {
    email:"shubham@gmail.com",
    fullname:{
        firstname:"shubham",
        lastname:"sharma"
    },
    age:18
}

const {email:mail,fullname}= obj
const {firstname:fname}=fullname

console.log(obj.fullname.firstname);
console.log(mail,fname);