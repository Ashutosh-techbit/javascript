//========================================================
//                              setTimeout
//========================================================


setTimeout(function(){
    console.log("hui hui");

},2000)

// --------------using function refrence-----------
// fucntion creation
            // const Hurr = function(){
            //         console.log("hui hui");
                
            //     }

            // const changetext = function(){
            //     document.querySelector('h1').innerHTML="how r u"
            // }

    // setTimeout(handler,time in millisec)

    // dont do Hurr() -> it is function print...
    // set time need handler i.e. function refrence
    // setTimeout(Hurr(),2000) 
    
    // do only hurr -> this is fucntion refrennce
    //  setTimeout(Hurr,2000)
    //    const changed= setTime out(changetext,2000)



// -----------clearTimeout--> stops settimeout execution------------\

// document.querySelector('#stop').addEventListener('click',function(){
//          clearTimeout(changed)
//          console.log("stop")
// })


//========================================================
//             setinterval(handler,time,parameter)
//========================================================

// setInterval(function(){
        //         console.log("ashu",Date.now());
        // },2000)
        
        //-----------using refrence-------
        // const name = function(){
                //         console.log("ashu",Date.now());
                // }

                // setInterval(name,2000)
                
                
//-----------------using paramter------
// const name = function(str){
        //         console.log(str,Date.now());
// }
// setInterval(name,2000,'ashuuuuuuuuuuu')

// clearInterval(run)

//===================================================================
//         Project = Fucntionality to START STOP button for execution
//=====================================================================

let name = function(str){
        console.log(str);
        setInterval(function(){
                document.querySelector('body').style.backgroundColor='pink'
        },1500)
        setInterval(function(){
                document.querySelector('body').style.backgroundColor='red'
        },1500)

}
let run;

document.querySelector('#start').addEventListener('click',function(){
        run = setInterval(name,3000,'hello')
   
})

document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(run)
        console.log('stopped')

})




 