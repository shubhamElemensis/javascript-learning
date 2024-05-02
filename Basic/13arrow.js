"use strict";

const user = {
    username : "shubham",
    age:18,
    welcomeFun:function () {
        console.log(`${this.username},Welcome to website`);
    }
}

user.welcomeFun()
user.username='sahil'
user.welcomeFun()


//arrow function 

const sum =(n1,n2)=> n1+n2
console.log(sum(2,3));

//IIFE
//function execute directly

(()=> {
    console.log("db connect")
})()