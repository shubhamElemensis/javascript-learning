const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")


// console.log(descriptor);

const user = {
    name:"shubham",
    age:20
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(user,"name"));
