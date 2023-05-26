const taskform = document.getElementById('task-form')
const taskinput = document.getElementById('task-input')
const tasklist = document.getElementById('task-list')

//event listener for submission of form

taskform.addEventListener('submit', function(event){
    event.preventDefault();//prevent form submission

    const tasktext = taskinput.value.trim();//get task text
    

    if (tasktext !== ''){
        addTask(tasktext);//add task to the list
        taskinput.value = '';//clear input field
        taskinput.focus();//set focus back to input field
    }
})


//function to add a new task
function addTask(text){
    const taskitem = document.createElement('li');
    taskitem.className = 'task-item';
    taskitem.innerHTML= `
    ${text}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
    `;
    const deletebtn =taskitem.querySelector('.delete-btn');
    deletebtn.addEventListener('click',function(){
        taskitem.remove();//delete the task
    })
    const editbtn = taskitem.querySelector('.edit-btn');
    editbtn.addEventListener('click', function(){
        const newtext = prompt('Enter new task text:', text);
        if (newtext !== null && newtext.trim() !=='') {
            taskitem.firstChild.textContent = newtext;//update task text
        }
    })
    tasklist.appendChild(taskitem);//add task to the list
}

