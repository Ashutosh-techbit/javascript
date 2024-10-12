const randomcolor = function(){
    //hex code of color conatins 16 values 0-F
    const hex = '0123456789ABCDEF'
    let color = '#'
    //a color combination have 6 values 
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

 let intervalid;

const changecolor = function(){
    document.body.style.backgroundColor = randomcolor();
}

document.querySelector('#start').addEventListener('click',function(){
    if(intervalid==null){
        intervalid = setInterval(changecolor,1500)
    }
})


document.querySelector('#stop').addEventListener('click',function(){
    console.log('stopped')
    clearInterval(intervalid)
    intervalid=null
})