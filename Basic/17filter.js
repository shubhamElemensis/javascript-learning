const arr = [
  {
    name: "shubham",
    age: 18,
  },
  {
    name: "sahil",
    age: 20,
  },
  {
    name: "manav",
    age: 22,
  },
];

const arr1 = [1,2,3,4,5,6]

const name = arr1.filter((items) => items>2)
console.log(name);


//Map

const newnum = arr1.map((num)=>{
  return num*10
})

console.log(newnum);

//Reduce

const total = arr1.reduce((acc,currval)=>acc+currval,0)
console.log(total);

const totalage = arr.reduce((acc,user)=>{
  return acc+user.age
},0)
console.log(totalage);