

var num1 = prompt('Enter Number 1:')
var num2 = prompt('Enter Number 2:')
var operate = prompt('Which Operation: \n 1- ×  \n 2- ÷ \n 3- + \n 4- -')
var result;

if (operate === '1') {
  result = num1 * num2
  console.log(num1 + ' × ' + ' ' + num2 + ' = ' + result);
  console.log(result);
}
else if (operate === '2') {
  result = num1 / num2
  console.log(num1 + ' ÷ ' + ' ' + num2 + ' = ' + result);
  console.log(result);
}
else if (operate === '3') {
  result = num1 + num2
  console.log(num1 + ' + ' + ' ' + num2 + ' = ' + result);
  console.log(result);
}
else if (operate === '4') {
  result = num1 - num2
  console.log(num1 + ' - ' + ' ' + num2 + ' = ' + result);
  console.log(result);
}
else {
  alert('Please Enter One...')
}