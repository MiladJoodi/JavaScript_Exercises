
const $ = document

let weightInputElem = $.getElementById('weight')
let heightInputElem = $.getElementById('height')
let weightValueSpanElem = $.getElementById('weight-val')
let heightValueSpanElem = $.getElementById('height-val')
let resultElem = $.getElementById('result')
let categoryElem = $.getElementById('category')


function calculate() {
    // weight
    let weightValue = weightInputElem.value
    weightValueSpanElem.innerHTML = weightValue + ' kg'


    // height
    let heightValue = heightInputElem.value
    heightValueSpanElem.innerHTML = heightValue + ' cm'


    // result
    heightValueMeter = heightValue / 100         //convert to meter
    let resultBmi = weightValue / (heightValueMeter * heightValueMeter)
    resultBmiFixed = resultBmi.toFixed(2)
    resultElem.innerHTML = resultBmiFixed


    if (resultBmiFixed < 18.5) {
        categoryElem.innerHTML = 'Under Weight'
        categoryElem.style.color = 'pink'
    } else if (18.5 < resultBmiFixed && resultBmiFixed < 24.99) {
        categoryElem.innerHTML = 'Normal Weight'
        categoryElem.style.color = 'green'
    } else if (25 < resultBmiFixed && resultBmiFixed < 29.9) {
        categoryElem.innerHTML = 'Over Weight'
        categoryElem.style.color = 'orange'
    } else {
        console.log('Obese');
        categoryElem.innerHTML = 'Obese'
        categoryElem.style.color = 'red'
    }



}