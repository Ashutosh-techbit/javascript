// VAR:
// The var keyword is still valid JavaScript, but it is not recommended to use it anymore. There are two main reasons for this:

// 1->Scope:
// var variables are function-scoped, which means that they are accessible anywhere within the function in which they are declared. This can lead to unexpected behavior and bugs, especially in larger codebases.

// 2->Redeclaration:
// var variables can be redeclared within the same scope, which can also lead to unexpected behavior.
// Instead of var, it is recommended to use the let and const keywords. let variables are block-scoped, which means that they are only accessible within the block in which they are declared. const variables are also block-scoped, but they cannot be reassigned.


// var c= 300;


// if(true)
//     {
//         let a =10;
//        const b= 20;
//        var  c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c); returns 30 even if c is 300 in outer scope


// child function can access the values of parent function but parent acnnot acess values of child
function one()  // parent function
{
    const username = "ashu" 
 
    
    function two(){ // child function
        const web = "google"
        console.log(username);
    }
    console.log("in one");
    // console.log(web);
    two();
    // one();
}
// two();
one();



// _____________hositing____________

//direct function declaration
console.log(addone(5))
function addone(num){
    return num +1
}

// declare in variable\


console.log(addtwo(3)) //cannot use it here because addtwo function declare through variable , use addtwo after function only
const addtwo = function(num){
    return num +2
}
console.log(addtwo(3))
