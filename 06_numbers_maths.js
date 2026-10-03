/************************NUMBERS*************************/
const age = 21
console.log(age); //21 "number" detected automatically

const age2 = new Number(23) // we explicitly defined number
console.log(age2); // [Number: 23] 

console.log(age2.toString().length); // we converted to string so we can use string properties
console.log(typeof(age2)); // object
console.log(age2.toFixed(3)) // 23.000

const num = 28.456
console.log(num.toPrecision(3)); // 28.5
console.log(num.toPrecision(2)); // 28
console.log(num.toPrecision(1)); // 3e+1

const num2 = 1000000
console.log(num2.toLocaleString()); // 1,000,000
console.log(num2.toLocaleString('en-IN')); // 10,00,000 indian style

/************************MATHS*************************/
console.log(Math); // Object [Math] {}
console.log(Math.abs(-69)); // 69  [neg --> positive]
console.log(Math.round(5.6)); // 6 [round-off]
console.log(Math.ceil(5.2)); // 6 [round-off to upper value "ceiling -value"]
console.log(Math.floor(5.6)); // 5 [round-off to lower value "floor-value"]
console.log(Math.min(4,2,6,7)); // 2
console.log(Math.max(4,2,6,7)); // 7
console.log(Math.pow(3,2)); // 9
console.log(Math.sqrt(25,2)); // 5

console.log(Math.random()) // lies b/w [0-1]
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // IMPORTANT FORMULA










