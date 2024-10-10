// function add(nums){
//     return nums+34;
// }

// console.log(add(3)); // treat as normal function

// ------function also acts as a object-------
// add.hello = "hello world";
// console.log(add.hello);

// --------return {}
// console.log(add.prototype)

function user(name,age){
     this.name = name;
    this.age = age;
}

// user('ashhu',23)
// console.log(user('ashu',234))

// --------------create a new function(increment) in prototype of user------------ 
user.prototype.increment = function(){
    this.age++;
}

const chai = new user('tea',23)
console.log(chai)

chai.increment()
console.log(chai)
