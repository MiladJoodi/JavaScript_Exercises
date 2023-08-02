
const $ = document
const checkBtn = $.querySelector('.btn')
const input = $.querySelector('.input')
const checkResult = $.querySelector('.checkResult')

checkBtn.addEventListener('click', function () {


    var userInput = input.value

    switch (userInput) {
        case '1':
            userInput = 10
            break;
        case '2':
            userInput = 100
            break;
        case '3':
            userInput = 1000
            break;
        case '4':
            userInput = 10000
            break;
        case '5':
            userInput = 100000
            break;
        case '6':
            userInput = 1000000
            break;

        default:
            break;
    }

    if(isNaN(userInput)){
        checkResult.innerHTML = 'Wrong Number!'
        checkResult.style.color = 'red'
        checkResult.style.textShadow = '5px 5px 5px rgba(0,0,0,0.3)'
    }else if(userInput === ''){
        checkResult.innerHTML = 'Empty!'
        checkResult.style.color = 'orange'
        checkResult.style.textShadow = '5px 5px 5px rgba(0,0,0,0.3)'
    }else if(userInput<0){
        checkResult.innerHTML = 'just 1~6'
        checkResult.style.color = 'violet'
        checkResult.style.textShadow = '5px 5px 5px rgba(0,0,0,0.3)'
    }
    else{
        let randomNumber = Math.random() * userInput
        randomNumber = Math.floor(randomNumber)
    
        checkResult.innerHTML = randomNumber
        checkResult.style.color = 'green'
        checkResult.style.textShadow = '5px 5px 5px rgba(0,0,0,0.3)'
    }

 
})