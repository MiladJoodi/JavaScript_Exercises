
const $ = document
let inputElem = $.querySelector('input')
let spanElem = $.querySelector('.counter')
let inputMaxLength = inputElem.getAttribute('maxlength')

inputElem.addEventListener('keyup', function () {
    spanElem.innerHTML =  - inputElem.value.length

})
