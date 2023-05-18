
var userNumber = 0
for (var i = 0; i < 5; i++) {
    userNumber = userNumber + Number(prompt("Enter " + (i + 1) + " number to get average"))
    var result = userNumber / 5
}
alert("average is: " + result)