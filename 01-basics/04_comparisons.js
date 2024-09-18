console.log(null > 0)
output = false
console.log(null >= 0)
output = true
console.log(null  ==  0)
output = false

// Note => equality operator == and comparison operators < > >= <= work differently
        // comparison operator treat NULL as 0 

// === Strict equality operator checks both data type and value
console.log( "3" ===  3) //false
console.log( "3" ==  3) //true
// result will be false because "3" is a string and 3 is  number