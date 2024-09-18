// Stacks and Heaps
// STACK
// -> All primitive data types like string,bool,number etc. stores in stack 
// -> in stack a copy of original container is transfer when something is alloted.
// -> when a change is occured in copied container their will be no change occured in original conatiner 

// HEAP
// -> All non-primitive data types like Object,func,arr stores in heap.
// -> In heap when a conatiner is allocated to another conatiner its refernce is provided due to which when a change occurs in copied container the orignal container also got change 

let myname = "ashu"
let surname = myname
surname = "bansal"

console.log(myname)
console.log(surname)

let userone ={
    name:"ashu",
    age:12,
}

let usertwo = userone
usertwo.age = 13
console.log(userone.age)
console.log(usertwo.age)
