// singleton
// object.create()

// objects literal

const mysym = Symbol("key1")
const jsuser = {
    name: "ashu",
    age:19,
    location: "agra",
    email: "bashu22@gmail.com" ,
    "full name" : "ashutosh bansal",
    [mysym] : "key1",

}

console.log(jsuser.name)
console.log(  jsuser.email)
console.log( typeof jsuser.email)
console.log(  jsuser['email'])
console.log( typeof jsuser['email'])
console.log(jsuser["full name"])
console.log(jsuser[mysym])
console.log(typeof jsuser[mysym])

jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
jsuser.email = "hitesh@microsoft.com"
// console.log(JsUser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser .greetingTwo());