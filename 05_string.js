/*---------------------------Strings---------------------------*/
const name = "Abhishek Singh"
const age = 19
console.log(`hi my name is ${name} and my current age is ${age} `); // this is called string interpolation ==> we can insert the variable using ${}

const collageBranch = new String('Artificial Intelligence') // js object defining method to define a string
console.log(collageBranch)

console.log(collageBranch[4]) // 'f' ==> we have accessed the key value pair here
console.log(__proto__)
console.log(collageBranch.toUpperCase()) // it change the string to upper case but does not change the original value
console.log(collageBranch.charAt(5)) // "i"
console.log(collageBranch.indexOf('e')) // 14 ==> it tells the first occurance of the given char
console.log(collageBranch.length) // 23 ==> it counts the blank spaces also

const newString = collageBranch.substring(4,18) // "ficial Intelli" 
console.log(newString);
const newString2 = collageBranch.slice(14,-1) // "elligenc" ==> we can use negative indexing in slice
console.log(newString2);

const newString3 = "     ABHISHEK SINGH     "
console.log(newString3);
console.log(newString3.trim()); // it will remove the unnecssary space from starting and end

console.log(newString3.replace(' SINGH', '-SINGH')); //     ABHISHEK-SINGH      
console.log(newString3.includes('SINGH')); // true

const newString4 = "Abhishek-Singh-AIML"
console.log(newString4.split('-')) // [ 'Abhishek', 'Singh', 'AIML' ] ==> it return a array conatining the splitted value. We can also give limit ==> split(seperator, limit)
console.log(newString4.split('-',2)); // [ 'Abhishek', 'Singh' ]

/*-------------------CHECK MDN DOCS FOR MORE STRING FUNCTIONS------------------ */

