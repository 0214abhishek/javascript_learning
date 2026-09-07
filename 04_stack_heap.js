/*--------------------------Stack and Heap-------------------------- */

/* 1) Primitive data type: Primitive data types are the basic, single-value data types. They are immutable, meaning the actual value cannot be changed. We get a copy of the original data and the original data does not change.
JavaScript has 7 primitive data types:String,Number,BigInt,Boolean,null,Symbol,undefined.

2) Non-primitive data types (Reference types):They can store collections of values and are mutable. If we change the value it will change the value of original also.
Types: Objects, Arrays, Functions, Dates, Maps, Sets, etc.  */

// Primitive data type use Stack Memory
// Non-Primitive data type use Heap Memory

//-------------------------------Examples--------------------------------------

// Stack Memory Example

let myName = "Abhishek Singh"
let myAge = 20
let myEmail = "abc@gmail.com"

let userOneName = myName
let userOneAge = myAge
let userOneEmail = myEmail

userOneAge = 22
userOneEmail = "rsn@gmail.com"

console.log(userOneAge); // 22
console.log(userOneEmail); // rsn@gmail.com
console.log(myAge); // 20. (it does not change as we get the copy value)
console.log(myEmail); // abc@gmail.com (it does not change as we get the copy value)

// Heap Memory Example

let userOne = { // object defining
    email: "abc@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rsn@gmail.com"

console.log(userOne.email); //rsn@gmail.com (the vlaue get's change because object is non-primitive data type and it stores into heap memory where we get the exact reference)
console.log(userTwo.email); //rsn@gmail.com
