// //Question 1

// let numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = [10, 20, 30, 40, 50];

// function calculateSum(num) {
    
//     let result = 0 ;
//     num.map((val)=>{
//         result += val 
//         // console.log(result);
//     })
//     return result
    
// }


// console.log(calculateSum(numbers1)); // Output: 15
// console.log(calculateSum(numbers2)); // Output: 150



// //Question 2

// let numbers3 = [5, 10, 3, 8, 15];
// let numbers4 = [100, 20, 300, 40, 5];

// function findLargest(num) {
    
//     let i = 0
//     num.map((val)=>{
//         if (i<val) {
//             i = val
//         }
//     })
//     return i;
    
// }

// console.log(findLargest(numbers3)); // Output: 15
// console.log(findLargest(numbers4)); // Output: 300


// //Question 3 

// let num1 = 7;
// let num2 = 12;

// function isPrime(num) {
//     if (num%2==0) {
//         return false
//     }
//     else {
//         return true
//     }
// }



// console.log(isPrime(num1)); // Output: true
// console.log(isPrime(num2)); // Output: false



// //Question 4

// let str1 = "hello";
// let str2 = "world";


// function reverseString(str) {
    
//     const array =Array.from(str)
//     const reverseArray = array.reverse()
//     const result = reverseArray.join("")
//     return result
// }


// console.log(reverseString(str1)); // Output: olleh
// console.log(reverseString(str2)); // Output: dlrow


// //Question 5

// let num3 = 5;
// let num4 = 7;

// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//          result *= i
        
//     }
//     return result
// }

// console.log(factorial(num3)); // Output: 120
// console.log(factorial(num4)); // Output: 5040


// //Question 6
// let str3 = "racecar";
// let str4 = "hello";


// function isPalindrome(str) {
//     const array = Array.from(str)
//     const reverseArray = array.reverse();
//     const result = reverseArray.join("")
//     if (str3 == result) {
//          return true
//     }else{
//         return false
//     }
    
// }

// console.log(isPalindrome(str3)); // Output: true
// console.log(isPalindrome(str4)); // Output: false


// //Question 7 
// let array1 = [1, 2, 2, 3, 4, 4, 5];
// let array2 = ["apple", "banana", "banana", "orange", "orange", "pear"];


// function removeDuplicates(arr) {
//     return [...new Set(arr)]
// }

// console.log(removeDuplicates(array1)); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(array2)); // Output: ["apple", "banana", "orange", "pear"]


// //Question 8

// let celsius1 = 0;
// let celsius2 = 100;

// function celsiusToFahrenheit(cel) {
//     let result = cel*9/5+32
//     return result
// }

// console.log(celsiusToFahrenheit(celsius1)); // Output: 32
// console.log(celsiusToFahrenheit(celsius2)); // Output: 212




// //Question 9
// let numbers5 = [10, 20, 30, 40, 50];
// let numbers6 = [5, 15, 25, 35, 45, 55];

// function findAverage(num) {
//     let result,total = 0; 
    
//     num.map((val)=>{
//         total += val;
//         // console.log(total);
//         result = total/num.length
//     })
//     return result
    
// }

// console.log(findAverage(numbers5)); // Output: 30
// console.log(findAverage(numbers6)); // Output: 30

//Question 10

let array3 = [1, 2, 3, 4, 5];
let array4 = [5, 4, 3, 2, 1];
let array5 = [1, 2, 3, 4, 6];

console.log(arraysEqual(array3, array4)); // Output: true
console.log(arraysEqual(array3, array5)); // Output: false