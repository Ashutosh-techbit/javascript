// default global keyword in browser is Window()
// In JavaScript, the this keyword refers to an object.
    // The this keyword refers to different objects depending on how it is used:
    //     In an object method, this refers to the object.
    //     Alone, this refers to the global object.
    //     In a function, this refers to the global object.
    //     In a function, in strict mode, this is undefined.
    //     In an event, this refers to the element that received the event.
    //     Methods like call(), apply(), and bind() can refer this to any object.


// const user ={
//     name : "ashutosh",
//     price : 44,

//     message : function(){
//         console.log( `${this.name},goodmorning`) 
//     }
    
// }
// console.log(user)
// user.message()
// user.name= "ram"
// user.message()


// console.log(this)  // global context 
  
let username ="ashutosh"
function chai(){
    let username = "hitesh"
    console.log(this.username) //cannot use this.username in function only used in objects . here it prints undefined

    return 0
}

chai()
console.log(chai())


// const chai = function () {
    //     let username = "hitesh"
    //     console.log(this.username);
    // }
    
    // const chai =  () => {
    //     let username = "hitesh"
    //     console.log(this);
    // }
    
    
    // chai()
    
    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }
    
    // const addTwo = (num1, num2) =>  num1 + num2
    
    // const addTwo = (num1, num2) => ( num1 + num2 )
    
    // const addTwo = (num1, num2) => ({username: "hitesh"})
    
    
    // console.log(addTwo(3, 4))
    
    
    // const myArray = [2, 5, 3, 7, 8]
    
    // myArray.forEach()
