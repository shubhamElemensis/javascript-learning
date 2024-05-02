"use strict";

const arr1 = [1,2,3,4,5,6,7]

console.log(arr1.slice(1,4));//make copy
console.log(arr1.splice(1,4));//make cut
console.log(arr1);


const arr2 = [1,2,3]
const arr3 = [4,5,6]

const arrSum = [...arr2,...arr3]//sperad arrays
console.log(arrSum);

const wastearr = [1,2,[3,3.1,3.2,[3.31,3.32],3.4],4]

const realarr = wastearr.flat(Infinity)//convert in single array
console.log(realarr);