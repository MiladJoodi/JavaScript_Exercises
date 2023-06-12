

var num1 = +prompt('Enter Number 1:')
var num2 = +prompt('Enter Number 2:')
var operate = prompt('Which Operation: \n 1- ×  \n 2- ÷ \n 3- + \n 4- -')

if (operate === '1') {
  multi(num1, num2)
}
else if (operate === '2') {
  division(num1, num2)
}
else if (operate === '3') {
  sum(num1, num2)
}
else if (operate === '4') {
  division(num1, num2)
}
else {
  alert('Please Enter One...')
}

function multi(num1, num2) {
  // var returns = num1 * num2
  // alert(returns)
  alert(num1 * num2)

}

function division(num1, num2) {
  alert(num1 / num2)
}
function minus(num1, num2) {
  alert(num1 - num2)
}
function sum(num1, num2) {
  alert(num1 + num2)

}