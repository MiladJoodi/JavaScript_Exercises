
var users = [
    { id: 1, name: 'milad', family: 'joodi', age: 27, email: 'mil@gmail.com' },
    { id: 2, name: 'sara', family: 'joodi', age: 17, email: 'sara@gmail.com' },
    { id: 3, name: 'samira', family: 'joodi', age: 15, email: 'samira@gmail.com' }
]


var userName = prompt('Enter Name')
var userFamily = prompt('Enter Family')
var userAge = prompt('Enter Age')
var userEmail = prompt('Enter Email')


if (userName < 3 || userName > 10) {
    alert('name can be 3...10')
} else if (userFamily < 3 || userFamily < 12) {
    alert('family can be 3...15')
} else if (userAge.length > 3 || isNaN(userAge)) {
    alert('age should be a Number')
} else {
    var newUser = {
        id: 4,
        name: userName,
        family: userFamily,
        age: userAge,
        email: userEmail
    }
    users.push(newUser)
    console.log(users);
}