/*------------------------Conversions,Operations and Comparisons------------------------*/

/*--------------Conversions--------------*/

// number to string
let point0 = 69
console.log(typeof point0) // return number 
let stringPoint0 = String(point0) // 69 => string
console.log(stringPoint0)
console.log(typeof stringPoint0) //69 => string

// string to number
let point1 = "69"
console.log(typeof(point1)) // return string , [method type] 
let numberPoint1 = Number(point1) // 69 => number
console.log(numberPoint1)
console.log(typeof numberPoint1) //69 => number

// boolean to number
let isLoggedin = true
console.log(typeof isLoggedin) // return boolean 
let numberisLoggedin = Number(isLoggedin) // 1 => true / 0 => false
console.log(numberisLoggedin)
console.log(typeof numberisLoggedin) // 1 => true / 0 => false

//string to number
let point3 = "69abc"
console.log(typeof point3) // return String
let valueofpoint3 = Number(point3) // it will convert but it is NaN
console.log(valueofpoint3) // return NaN(Not a Number)
console.log(typeof valueofpoint3) // "69abc" => number

//null to number and string
let point4 = null 
console.log(typeof point4) // null => object
let valueofpoint4 = Number(point4) // null =>number
console.log(valueofpoint4) // null => 0
let stringofpoint4 = String(point4)
console.log(stringofpoint4) // null => null
console.log(typeof valueofpoint4) // number
console.log(typeof stringofpoint4) // string

// undefined to string and number
let point5 = undefined 
console.log(typeof point5) // undefined
let valueofpoint5 = Number(point5) // undefined => number
console.log(valueofpoint5) // NaN
let stringofpoint5 = String(point5) 
console.log(stringofpoint5) // undefined
console.log(typeof valueofpoint5) // number
console.log(typeof stringofpoint5) // string

// string to boolean
let isLoggedout = "abhishek"
let booleanIsLoggedOut = Boolean(isLoggedout)
console.log(booleanIsLoggedOut);
// 1 = true; 0 => false
// "" => false
// "abhishek" => true

/*------------------------Operations------------------------*/

let value = 4
let negValue = -value
console.log(negValue); // return -4

// Basic Operations
console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4 
console.log(2**3); // 8 (2 to the power 3)
console.log(2/3); // 0.6666666666666666
console.log(2%3); // 2 (remainder)

// confusing operations

let str1 = "abhishek"
let str2 = " singh"
let str3 = str1 + str2 
console.log(str3); //return => abhishek singh

console.log("1" + 2 ); // return => 12
console.log(1 + "2" ); // return => 12
console.log("1" + 2 + 3 ); // return => 123; if starting is string it will treat rest as a string
console.log(1 + 2 + "3"); // return =>33; if starting is num it will add till it finds string

//  Prefix increment and Postfix increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
//Expected output: "a:4, b:4"

/*----------------------Comparisons----------------------*/
// === => it checks (strictly) value and datatypes both
// ==  => it does not check strictly it converts the datatypes sometimes eg. line no.(104)

console.log("2" == 2); // true because it converts the string datatype to number and checks
console.log(1 == true) // true same logic
console.log(1 === true) // false it checks strictly without changing its datatype

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false









