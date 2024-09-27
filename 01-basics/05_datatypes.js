// primitive datatype

// 7 types = string , number , boolean , null , undefined , symbol , Bigint

const string = "123"
const num  = 123
const boolean = false
let name1; // undefined
const temp = null;

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id === id2) 
// here result will be false beacuse symbol treat every value as unique

const bignumber = 2546658565956n;
// here "n" used to make it bigint

console.log(bignumber);
console.log(typeof bignumber);


// reference datatype(non primitive)

// array , Object , function
const arr =["ashu", "tosh", "bansal"]
console.table(arr);
console.log(arr);

let myobj ={
    name:"ashu",
    age:22,

    }
console.log(myobj);
console.table(myobj);


let myfunc = function(){
    console.log("hello world")
}
console.log(typeof myfunc)
myfunc();

