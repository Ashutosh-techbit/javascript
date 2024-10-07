// Promise is a object representing a eventual completion or failure of an asynchronous operation

// when promises are not provided bydefault by js Q and Bluebird library is used to do such task as of promises do now


//---------create promise-------

//-----------method 1---------

//return resolve
            // const promiseone = new Promise(function(resolve, reject){
            //     //do an aysnc  task
            //     // DB calls , cryptography , networking
            //     setInterval(function(){
            //         console.log("async call");
            //         resolve() // calls by  .then function
            //     },1000)
            // })

            // // calls resolve
            // promiseone.then(function(){

            //     console.log("promise resolve")
            // })


//-----------method 2-------------

// directly use .then bcz the promise is not put inside a variable
            // new Promise(function(resolve,reject){
            //     setTimeout(function(){
            //         console.log('async task 2')
            //         resolve()
            //     },1000)
            // }).then(function(){
            //     console.log('resolve task 2')
            // })

//---------------taking data from network-------

// return data inside resolve 
            // const promisethree = new Promise(function(resolve,reject){
            //     setTimeout(function(){
            //         resolve({name:'ashutosh' , email :'hllo@gmail.com'})
            //     },1000)
            // })

            // //calls resolve
            // promisethree.then(function(user){
            //     console.log(user)
            // })


//==================================================================================================================================
//              then\catch\finally
//  then - executes when their is no problem in execution , else catch exeuctes and the finally executes independent of both of them
//==================================================================================================================================


            // const promisefour = new Promise(function(resolve,reject){
            //     setTimeout(function(){
            //         let error = false;
            //         if(!error){
            //             resolve({username:'ashu',msg: "hello"})
            //         }else{
            //             reject('Error found in code')
            //         }
            //     },1000)
            // })


// promisefour.then((user)=> {
//     console.log(user.username);
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log('reach finaaly')
// })

//----------or--------------  
 
// promisefour.then((user)=> {
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log('reach finaaly')
// })

//----------------or--------------

//===============================================================================================================
//                  async\await
//The await keyword is used to pause the execution of the async function until the promise from response.json() is resolved.
// It effectively "unwraps" the promise, allowing the result (the parsed JSON object) to be assigned to the variable data.
// if await is not used then either it shows promise pending or thorws error or run catch block
//===============================================================================================================

        // async function herepromisefour() {
        //     try{
        //         const response = await promisefour;
        //         console.log(response)
        //     }
        //     catch(error){
        //         console.log(error)
        //     }
        // }

        // herepromisefour()


//------------------------------fetching data and using wait
    
        async function promisefive(){
    try{
        //response.json() is a function that returns a promise that resolves to the JSON body content of the response.
        // This is necessary because the fetch API returns the body of the response as a stream, so it has to be read and then parsed into a JavaScript object.

        const response = await fetch('https://api.github.com/users/Ashutosh-techbit') 
        const data = await response.json()
        console.log(data)

    }catch(error){
        console.log('Error') 
    }
 }

promisefive()