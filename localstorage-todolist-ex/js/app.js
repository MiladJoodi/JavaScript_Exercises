
let $ = document
let inputElem = $.getElementById('itemInput')
let addButton = $.getElementById('addButton')
let clearButton = $.getElementById('clearButton')
let todoListElem = $.getElementById('todoList')

todosArray = []


function addNewTodo() {
    let newTodoTitle = itemInput.value

    let newTodoObj = {
        id: todosArray.length + 1,
        title: newTodoTitle,
        complete: false
    }

    todosArray.push(newTodoObj)

    setLocalStorage(todosArray)
    todosGenerator(todosArray)

    inputElem.focus()
}

function setLocalStorage(todosList) {
    localStorage.setItem('todos', JSON.stringify(todosList))
}

function todosGenerator(todoList) {
    let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn
    todoListElem.innerHTML = ''

    todoList.forEach(function (todo) {
        newTodoLiElem = $.createElement('li')
        newTodoLiElem.className = 'completed well'

        newTodoLabalElem = $.createElement('label')
        newTodoLabalElem.innerHTML = todo.title

        newTodoCompleteBtn = $.createElement('button')
        newTodoCompleteBtn.className = 'btn btn-success'
        newTodoCompleteBtn.innerHTML = 'Complete'
        newTodoCompleteBtn.setAttribute('onclick', 'editTodo(' + todo.id + ')')


        newTodoDeleteBtn = $.createElement('button')
        newTodoDeleteBtn.className = 'btn btn-danger'
        newTodoDeleteBtn.innerHTML = 'Delete'
        newTodoDeleteBtn.setAttribute('onclick', 'removeTodo(' + todo.id + ')')

        if (todo.complete) {
            newTodoLiElem.className = 'uncomplete well'
            newTodoLiElem.innerHTML = 'UnComplete'
        }

        newTodoLiElem.append(newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn)
        todoListElem.append(newTodoLiElem)
    })
}

function editTodo(todoId) {
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todosArray = localStorageTodos

    todosArray.forEach(function (todo) {
        if (todo.id === todoId) {
            todo.complete = !todo.complete
        }
        setLocalStorage(todosArray)
        todosGenerator(todosArray)

    })
}

function removeTodo(todoId) {
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todosArray = localStorageTodos

    let mainTodoIndex = todosArray.findIndex(function (todo) {
        return todo.id === todoId
    })
    todosArray.splice(mainTodoIndex, 1)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}

function getLocalStorage() {
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))

    if (localStorageTodos) {
        todosArray = localStorageTodos
    } else {
        todosArray = []
    }
    todosGenerator(localStorageTodos)
}

function clearTodos() {
    todoListElem.innerHTML = ''
    // localStorage.clear()
    localStorage.removeItem('todos')
    todosArray = []
    // todosGenerator(todosArray)
}

window.addEventListener('load', getLocalStorage)
addButton.addEventListener('click', addNewTodo)
clearButton.addEventListener('click', clearTodos)
inputElem.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        addNewTodo()
    }
})