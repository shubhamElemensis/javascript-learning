"use strict";


//mutliple parameter without declaration
function example(...num1) {
    return num1
}


console.log(example(27,2858,4721185,1245,2,65541,56));

//function with object


const user = {
    name:"shubham",
    age:18
}

function userDetails(obj) {
    console.log(`Hey,I'm ${obj.name} and my age was ${obj.age}` );
}

userDetails(user)

//function with array

const aar = ["apple","orange","mango"]

function fruits(array) {
    console.log(`red = ${array[0]},yellow = ${array[2]}`);
}

fruits(aar)