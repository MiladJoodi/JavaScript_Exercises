
const $ = document
const checkBtn = $.querySelector('.btn')
const input = $.querySelector('.input')
const checkResult = $.querySelector('.checkResult')

checkBtn.addEventListener('click', function () {
    if (input.value % 2 == 0) {
        checkResult.innerHTML = ''
        checkResult.innerHTML = 'Even'
        checkResult.style.color = 'green'
    } else if (isNaN(input.value % 2)) {
        checkResult.innerHTML = 'Wrong Number'
        checkResult.style.color = 'orange'
    }
    else {
        checkResult.innerHTML = ''
        checkResult.innerHTML = 'Odd'
        checkResult.style.color = 'red'
    }
})