let score = 33;  // Datatype = number
let score1 = "33abc"; // Datatype = string

console.log(typeof score);
console.log(typeof score1);

// Number() convert any string into number 
let valueinnumber = Number(score);
let valueinnumber1 = Number(score1);
console.log(valueinnumber);
console.log(valueinnumber1);

// some outputs Number(score) gives
// 33 = 33
// "33" = 33
// "33abc" = NaN // NaN => Not an Number
// null = NaN
// true = 1
// false = 0

// Boolean() conversion
let number = Boolean(1);
console.log(number)

// results=>
// 1 = true 
// 0 = false
// empty string " " = false
// "ashu" = true

let value = 33
let result = String(value)
console.log(result)
console.log(typeof result)

console.log(1+2) 
// o/p = 3
console.log(1+2 + '2')
//  o/p = 32
console.log('1'+2 + 2) 
// o/p =122
console.log('1' +2) 
// o/p =12
console.log(1+'1') 
// o/p = 11
console.log('1'+'2') 
//  o/p =  12