
const $ = document
const inputElem = $.querySelector('#input-field')
const btnSaveElem = $.querySelector('#btn-save')
const btnDeleteElem = $.querySelector('#btn-delete')
const colorBox = $.querySelectorAll('.color-box')
const noteContainer = $.querySelector('#listed')


colorBox.forEach(function (colorbox) {
    colorbox.addEventListener('click', function (event) {
        let mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor
    })
})

function generateNewNote() {

    if (inputElem.value.trim()) {
        let newNoteDivElem = $.createElement('div')
        newNoteDivElem.className = 'card shadow-sm rounded'

        let inputBg = inputElem.style.backgroundColor
        newNoteDivElem.style.backgroundColor = inputBg
        newNoteDivElem.addEventListener('click', removeNote)

        let newNotePElem = $.createElement('p')
        newNotePElem.className = 'card-text p-3'
        newNotePElem.innerHTML = inputElem.value
        console.log(newNotePElem);

        newNoteDivElem.append(newNotePElem)
        noteContainer.append(newNoteDivElem)

        inputElem.value = ''
        inputElem.style.backgroundColor = "#fff"

    }


}

function removeNote(event) {
    event.target.parentElement.remove()
}

btnDeleteElem.addEventListener('click', function () {
    inputElem.value = ''
    inputElem.style.backgroundColor = "#fff"
})

inputElem.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        generateNewNote()
    }
}
)

btnSaveElem.addEventListener('click', generateNewNote)
btnSaveElem.addEventListener('click', generateNewNote())
