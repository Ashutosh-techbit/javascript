# JS Projects 

## [Project link] ()

## Project 1
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


## project 2

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

## Project 3

```javascript
const clock=document.getElementById('clock')

setInterval(function(){

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    //  console.log(date.toLocaleTimeString());
},1000)

```

