//loop for array
const arr= [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}


//loop for string
const str = "shubham"

for (const i of str) {
    console.log(i);
}


//loop for object
const obj = {
    name:"shubham",
    age:18
}

for (const key in obj) {
    console.log(`${key} :- ${obj[key]}`);
}