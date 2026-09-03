/*------------------------Let, var, const concept------------------------*/
const accountId = 2025204508. // we use const so that the stored value cannot change
let accountEmail = "xyz@gmail.com" // we can change the value
let accountPassword = "6969696" 
accountCity = "Jaipur" // this declaration is acceptable but not preferred so we do not use
let accountState; // if we do not assign any value the it will return undefined
accountCity="Gorakhpur" // overwrite the city name
accountEmail = "zxy@gmail.com" // overwrite the email

console.log(accountId); // used to print
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // used to print multiple items in a table

