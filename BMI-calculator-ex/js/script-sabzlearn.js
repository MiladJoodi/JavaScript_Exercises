let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const bmiResult = $.querySelector('#result')
const categoryElem = $.querySelector('#category')

function bmiCalculator () {
    // console.log('BMI');
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightVal.innerHTML = weightInputValue
    heightVal.innerHTML = heightInputValue

    let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100, 2))).toFixed(1)

    bmiResult.innerHTML = bmiValue

    if (bmiValue < 18.5) { // کم وزنی
        categoryElem.innerHTML = 'UnderWeight'
        bmiResult.style.color = '#ffc44d'
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) { // نرمال هست
        categoryElem.innerHTML = 'Normal Weight'
        bmiResult.style.color = '#0be881'
    } else if (bmiValue >= 25 && bmiValue < 29.9) { // اضافه وزن
        categoryElem.innerHTML = 'OverWeight'
        bmiResult.style.color = '#ff884d'
    } else { // چاق
        categoryElem.innerHTML = 'Obese'
        bmiResult.style.color = '#ff5e4d'
    }

}


weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)