var usernameInput = document.querySelector('.username')
var passwordInput = document.querySelector('.password')
var modal = document.querySelector('.modal')
var usernameStatus = document.querySelector('#usernameStatus')
var passwordStatus = document.querySelector('#passwordStatus')

function usernameValid() {
    if (usernameInput.value.length < 12) {
        usernameStatus.innerHTML = 'Must Contain 12 Character (Min)'
        usernameStatus.style.color = 'red'
    } else {
        usernameStatus.innerHTML = 'Correct Username Value'
        usernameStatus.style.color = 'green'
    }
}
function password() {
    if (passwordInput.value.length < 8) {
        passwordStatus.innerHTML = 'Must Contain 8 Character (Min)'
        passwordStatus.style.color = 'red'
    } else {
        passwordStatus.innerHTML = 'Correct Username Value'
        passwordStatus.style.color = 'green'
    }
}

function dataValidation() {
    var usernameValue = usernameInput.value
    var passwordValue = passwordInput.value
    if (usernameValue.length < 12 || passwordValue.length < 8) {
        modal.style.backgroundColor = 'red'
        modal.style.display = 'inline'
        modal.innerHTML = 'Something Wrong!'
    } else {
        modal.style.backgroundColor = 'green'
        modal.style.display = 'inline'
        modal.innerHTML = 'Enter Succecfully'
    }
    setTimeout(function () {
        modal.style.display = 'none'
    }, 2000)

}

