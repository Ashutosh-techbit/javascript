// reduce is used for calculating the total sum of a shopping list

const arr = [1,2,3,4]

// accumulator intialize as 0 , then accumulator = accumulator + currentvalue

const sum = arr.reduce( function(accumulator,currentvalue) {
    return accumulator + currentvalue
},0)

// can also written as

const total = arr.reduce( (accumulator,currentvalue) => accumulator + currentvalue ,2)

console.log(sum)
console.log(total)