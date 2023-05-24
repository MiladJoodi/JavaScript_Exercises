
var userNumbers = []
var userNumber = 0
var sum = 0

while (userNumber != -1) {
    userNumber = Number(prompt("Enter your number \n -1 to End"))
    if (userNumber != -1) {
        userNumbers.push(userNumber)
    }
}
for (var i = 0; i < userNumbers.length; i++) {
    sum += userNumbers[i]
}
console.log(userNumbers)
alert(sum / userNumbers.length)