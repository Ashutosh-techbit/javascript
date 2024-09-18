const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__); //__proto__ is used to access string character in console


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // divide strings
console.log(newString);

const anotherString = gameName.slice(-8, 4) // divide strings with taking negative indexes
console.log(anotherString);

const newStringOne = " hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove backspace from begning

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url)
console.log(url.replace('%20', '-')) //replace %20 with -

console.log(url.includes('hitesh')) 
console.log(url.includes('sundar')) 
//check whether sundar is include in string or not

console.log(gameName.split('-')); // sperate strings into array
