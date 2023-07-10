
const $ = document
const addBtn = $.querySelector('#add_btn')
const todoForm = $.querySelector('#todo_form')
const todoSubmit = $.querySelector('#todo_submit')
const todoInput = $.querySelector('#todo_input')
const noStatusDiv = $.querySelector('#no_status')

const statuss = $.querySelectorAll('.status')

const closeModal = $.querySelector('.close-modal')


function showTodoForm() {
    todoForm.classList.add('active')
}
function closeTodoModal() {
    todoForm.classList.remove('active')
}

function addToList() {
    const todoItems = document.createElement('div')
    todoItems.className = 'todo'
    todoItems.draggable = 'true'
    todoItems.innerHTML = todoInput.value
    todoItems.id = 'todo'

    const closeSpanItems = document.createElement('span')
    closeSpanItems.className = 'close'
    closeSpanItems.innerHTML = '&times;'

    todoForm.classList.remove('active')
    todoInput.value = ''

    closeSpanItems.addEventListener('click', function (event) {
        event.target.parentNode.remove();
    })

    todoItems.append(closeSpanItems)
    noStatusDiv.append(todoItems)

    // todoItems.addEventListener('dragstart', function(event){
    //     event.dataTransfer.setData('id', event.target.id)
    // })
    todoItems.addEventListener('dragstart', function(event){
        event.dataTransfer.setData('id', event.target.id)
    })

    statuss.forEach(function(statusItem){
        statusItem.addEventListener('drop', function(event){
            event.preventDefault()

            const elemId = event.dataTransfer.getData('id')
            event.target.append(document.getElementById(elemId))
        })
        statusItem.addEventListener('dragover', function(event){
            event.preventDefault()

        })
    })

    // statuss.forEach(function(statusItem){
    //     console.log(statusItem);
    //     statusItem.addEventListener('drop',function(event){
    //         event.preventDefault()
            
    //         let elemId = event.dataTransfer.getData('id')
    //         event.target.append(document.getElementById(elemId))
    //     })
    //     statusItem.addEventListener('dragover', function(event){
    //         event.preventDefault()
    //     })
    // })

}

addBtn.addEventListener('click', showTodoForm)
todoSubmit.addEventListener('click', addToList)
closeModal.addEventListener('click', closeTodoModal)



    


//  // drag start
//  todoContainer.addEventListener('dragstart', function (event) {
//     console.log('dragstart');
//     event.dataTransfer.setData('elemId', event.target.id)
//     console.log(event.dataTransfer.getData('elemId'));
// })
// // drag start

// // droped
// todoContainer.addEventListener('drop', function (event) {
//     console.log('droped');
// })
// // droped


// function preventDefault(event) {
//     console.log('prevent def');
//     event.preventDefault()
// }





// todoContainer.addEventListener('dragover', preventDefault)
// noStatusDiv.addEventListener('dragover', preventDefault)
// notStarted.addEventListener('dragover', preventDefault)

