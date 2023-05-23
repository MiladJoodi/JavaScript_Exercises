var userNumber1 = Number(prompt("Enter Number 1"))
var userNumber2 = Number(prompt("Enter Number 2"))

if (userNumber1 % 2 == 0) {
    while (userNumber2 > userNumber1) {

        console.log(userNumber1);
        userNumber1 += 2
    }
} else {
    userNumber1++
    while (userNumber2 > userNumber1) {

        console.log(userNumber1);
        userNumber1 += 2
    }
}
