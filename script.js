const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector(".new-task-button")
const taskContainer = document.querySelector('.tasks-container')
const deleteButton = document.querySelector('.delete-button')
const deleteTask = (taskItem) => {
    taskItem.remove();
};

const validateInput = () => {
    return inputElement.value.trim().length > 0
}

const handleAddTask = () => {
    const inputIsValid = validateInput()

    if (!inputIsValid) {
        return inputElement.classList.add("error")
    }
}

const handleInputChange = () => {
    const inputIsValid = validateInput()

    if (inputIsValid) {
        return inputElement.classList.remove("error")
    }
}

const addTask = () => {
    const inputIsValid = validateInput()

    if (!inputIsValid) {
        return handleAddTask()
    } else {
        const valorInput = inputElement.value.trim();

        const divTaskItem = document.createElement('div')
        const textoTaskItem = document.createElement('p')
        const buttonTaskItem = document.createElement('button')
    
        divTaskItem.classList.add('task-item')

        textoTaskItem.textContent = valorInput
        textoTaskItem.classList.add('task-texto')

        buttonTaskItem.textContent = 'deletar';
        buttonTaskItem.classList.add('delete-button')


        buttonTaskItem.addEventListener('click', () => {
            const taskItem = buttonTaskItem.closest('.task-item');
            deleteTask(taskItem);
        });

        
    
        divTaskItem.appendChild(textoTaskItem)
        divTaskItem.appendChild(buttonTaskItem)
    
        inputElement.value = ''
    
        return divTaskItem;
    }
}


addTaskButton.addEventListener('click', () => {
    handleAddTask();
    const novaTarefa = addTask();
    taskContainer.appendChild(novaTarefa);
});

inputElement.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        handleAddTask();
        const novaTarefa = addTask();
        taskContainer.appendChild(novaTarefa);
    }

})

inputElement.addEventListener('input', handleInputChange)
