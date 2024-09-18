// IIFE - Immediately invoked function expression

// used to
// 1. exceute function Immediately
// 2. remove global scope pollution

// syntax = (function defination)()
//                               ^
//                               |
                   //   function call Immediately


(function chai()
 // named IIFE
{
    console.log("DB connected ")
})(); // ; used to end execution scope



(
   () => {
    console.log("db 2 connect")
   }
)();

((name) => {
    console.log(`db 2 connect  ${name}`)
   }
)("ashu")


