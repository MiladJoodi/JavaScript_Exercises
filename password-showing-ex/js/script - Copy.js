let $ = document
let passwordField = $.querySelector('#password-field')
let togglePassword = $.querySelector('.toggle-password')
let btn = $.querySelector('#btn')




togglePassword.addEventListener('click', function () {
  if (passwordField.type === 'password') {
    passwordField.type = 'text'
    console.log('change1');
    togglePassword.classList.add('active')
  } else {
    passwordField.type = 'password'
    togglePassword.classList.remove('active')
    console.log('change2');
  }

})