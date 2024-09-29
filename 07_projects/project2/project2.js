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