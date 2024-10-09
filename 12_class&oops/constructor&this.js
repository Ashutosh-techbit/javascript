const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // if not written ...still function return values
}

//if new is not written in while creating user then it will make changes in same user i.e. all details of usertwo will be in userone and no new usertwo is created

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor); //return instance of user function
//console.log(userTwo);