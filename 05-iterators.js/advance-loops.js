// const arr = [1,4,56,5,"hi"]

// for(const num of arr){
//     console.log(num);
// }

// const greet = "hello world"

// for(const g of greet){
//     console.log(g)
// }

const map = new Map()

map.set('name','ashu')
map.set('age',23)
map.set('number',13245)

// console.log(map)

for(const [key,values] of map){
    console.log(key,'=' , values)
}

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
