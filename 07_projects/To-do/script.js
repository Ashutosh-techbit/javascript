setInterval(()=>{
        const  currentdate = new Date();
    document.querySelector('.date').innerHTML = currentdate.toLocaleString()
    
    },100)


//getting task 
function newtask() {
    let inputtask = document.querySelector('#insert').value;
    return inputtask;
}

//creating task and add it up in ordered list
function addtask() {
    document.querySelector('.add').addEventListener('click', () => {
        let inputtask = newtask();
        console.log(inputtask);

        if (inputtask.trim() === "") {
            alert('Please Enter a Task !!');
        } else {
            const li = document.createElement('li');
            li.innerHTML = `${inputtask}`;
            document.querySelector('.list').appendChild(li);
        }
        document.querySelector('#insert').value = '';
    });
}


let selectedtask=null;

//selecting task for deletion
function selecttask() {
    const list = document.querySelector('.list');
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log('Task clicked:', event.target.textContent);
             selectedtask = event.target;
        }
    });
}

//delete selected task
function removetask(e){
    document.querySelector('.remove').addEventListener('click',()=>{
        selectedtask.remove();;
        selectedtask = null
    })
}

//all accessories are here 
function execution() {
    addtask();
    selecttask();
    removetask()
}

execution();
