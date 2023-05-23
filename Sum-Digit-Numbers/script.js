
var userNumber = Number(prompt("Enter a number"))
var i = 0
var sum = 0
while (userNumber/10 !=0) {
    sum = sum + (userNumber % 10)
    userNumber = Math.floor(userNumber/10)
    i++
}
alert(sum)