
const $ = document
let userInput = $.querySelector('.form-control')
let todos = $.querySelector('.todos')


userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()

        // start new li
        let newLi = document.createElement('li')
        // console.log(newLi);
        newLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

        // start new span
        let newSpan = document.createElement('span')
        newSpan.innerHTML = userInput.value
        // console.log(newSpan);

        // start new i
        let newI = document.createElement('i')
        newI.classList.add('fa', 'fa-trash-o', 'delete')
        // console.log(newI);

        // append new span and new i  to new li
        newLi.append(newSpan, newI)
        // newLi.append(newI)
        // console.log(newLi);

        // append new li to ul
        todos.append(newLi)
        // console.log(todos);


        newI.addEventListener('click', function (event) {
           event.target.parentNode.remove()
            alert('deleted')
        })

    }

})
