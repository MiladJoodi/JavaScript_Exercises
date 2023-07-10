
let colorBtns = document.querySelectorAll('.btn')


colorBtns.forEach(function (color) {
    color.addEventListener('click', function (event) {

        let btnColor = event.target.dataset.color
        document.documentElement.style.setProperty('--theme-color', btnColor)
        // console.log(document.documentElement.style.getPropertyValue('--test-color'))
        document.documentElement.style.setProperty('pointer', 'curser')

    })
})
