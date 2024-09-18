const coding = ["js", "ruby", "java", "python", "cpp"]

//call-back function in forEach
// coding.forEach( function (val){
//     console.log(val);
// } )

//with parameters
// coding.forEach( (item) => {
//     console.log(item);
// } )

// using reference
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// forEach contains - items , index and full array
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item .languageName);
} )