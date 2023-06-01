
var users = [
    { id: 1, name: 'milad', family: 'joodi', age: 27, email: 'mil@gmail.com' },
    { id: 2, name: 'sara', family: 'joodi', age: 17, email: 'sara@gmail.com' },
    { id: 3, name: 'samira', family: 'joodi', age: 15, email: 'samira@gmail.com' }
]

users.forEach(function (item) {
    console.log('Name: ' + item.name + ' - Family: ' + item.family);
})