
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) // number1, number2 are parameters 
{

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // 3 and 5 are arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1)  // ... - rest operator = collect data and present , returns all values of function not only one
{
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) // it results in a array [200,400,500,2000]


function calculateCartPrice1(val1, val2, ...num1)  // ... - rest operator = collect data and present
{
    return num1
}
// console.log(calculateCartPrice1(200, 400, 500, 2000)) // here output [ 500, 2000 ] beacuse 200 assign to val1 400 assign to val2 and rest goes to num1

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
  