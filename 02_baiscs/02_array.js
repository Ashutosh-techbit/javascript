const name = ["ashu", "yash","hardik"]
const surname =["bansal","verma","shau"]

// const kname =name.push(surname)
// console.log(kname) // output 4 because this gives Number of Element in name array

// name.push(surname)
// console.log(name) // [ 'ashu', 'yash', 'hardik', [ 'bansal', 'verma', 'shau' ] ]
 
const fname =name.concat(surname)
console.log(fname)

// ... is a spread operator which helps to concatinate many strings in once
const allname = [...name , ...surname]
console.log(allname)

// flat = Returns a new array with all sub-array elements concatenated into a single array with no inside braces and here infinity signifies upto which extent braces need to remove 
const naaray = [1,2,2,[3,3,4,[3,4,4],3],5]
console.log(naaray.flat(Infinity))

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]