

// start change button
let $ = document
let changeButtonBtn = $.querySelector('.changeButton')
let userInput = $.querySelector('#converter')
let lable = $.querySelector('#lable')
let resultText = $.querySelector('.result')

changeButtonBtn.addEventListener('click', function () {
    if (userInput.placeholder === '°C') {
        userInput.placeholder = '°F'
        lable.innerHTML = 'Converter <span class="F">°F</span> to <span class="C">°C</span>'
        document.title = 'Milad Joodi | °F to °C'
        userInput.value = ''
        resultText.innerHTML = ''

    } else if (userInput.placeholder === '°F') {
        userInput.placeholder = '°C'
        lable.innerHTML = 'Converter <span class="C">°C</span> to <span class="F">°F</span>'
        document.title = 'Milad Joodi | °C to °F'
        userInput.value = ''
        resultText.innerHTML = ''
    }
})
// end change button
// start reset button

let restBtn = $.querySelector('.resetButton')

restBtn.addEventListener('click', function () {
    userInput.value = ''
    resultText.innerHTML = ''
})


// end reset button

// start reset button

let convertButton = $.querySelector('.convertButton')

convertButton.addEventListener('click', function () {
    let userInputValue = userInput.value

    if (userInput.placeholder === '°C') {
        let result1 = (userInputValue * 9 / 5) + 32
        resultText.innerHTML = userInputValue + ' °C to ' + result1.toFixed(2) + '°F'

    } else if (userInput.placeholder === '°F') {
        let result2 = (userInputValue - 32) * 5 / 9
        resultText.innerHTML = userInputValue + ' °F to ' + result2.toFixed(2) + '°C'
    }

    if(userInputValue === ''){
        resultText.innerHTML = 'Write correct value!'
        resultText.style.color = 'red'
    }

  
})

// end reset button







