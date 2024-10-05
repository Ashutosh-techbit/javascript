# JS Projects 

## [Project link] ()

## Project 1 - Change BG MODE
```javascript

const buttons = document.querySelectorAll(".button")
// console.log(buttons)---nodelist
const body = document.querySelector("body") 


buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)

        // return Element at which event occur
        console.log(e.target)

        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id;
        }  
    })
}); 
```


## project 2 - Calculate BMI!!

```javascript

 const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    
    // prevent immediate get or post of form 
    e.preventDefault();

    // document.querySelector('#height').value ----returns string --need to convert into Number
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const message = document.querySelector('#message');

    // isNaN(height)---checks whether the entered value isnotanumber(sNAN)
    if(height ==='' || isNaN(height) || height<0){
        result.innerHTML = `Please enter a Valid value ${height}`
    }
    else if(weight ==='' || isNaN(weight) || weight<0){
        result.innerHTML = `Please enter a Valid value ${weight}`
    }
    else{
       const bmi= (weight/((height*height)/10000).toFixed(2))
       
       if(bmi < 18.6){
        result.innerHTML= `<span>Under weigth : ${bmi}</span>`
       }
       else if(bmi>18.6 && bmi < 24.9){
        result.innerHTML= `<span>Normal weigth : ${bmi}</span>`
       }
       else{
        result.innerHTML= `<span>Over weigth : ${bmi}</span>`
       }  
    }
})
```

### Project 3 - What Time is it  

```javascript
const clock=document.getElementById('clock')

setInterval(function(){

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    //  console.log(date.toLocaleTimeString());
},1000)

```

### Project 5- Chameleon Automatic BG Changer

``` javascript
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
        intervalid = setInterval(changecolor,2000)
    }
})


document.querySelector('#stop').addEventListener('click',function(){
    console.log('stopped')
    clearInterval(intervalid)
    intervalid=null
})
```