
let scrollBar = document.querySelector('#scroll')

window.addEventListener('scroll',function(){
    
    let scrollY = window.scrollY

    let documentHeight = document.body.clientHeight

    let userScreenHeight = window.innerHeight

    let heightPercent = scrollY / (documentHeight - userScreenHeight)

    let heightPercentRounded = Math.floor(heightPercent*100)

    scrollBar.style.width = heightPercentRounded + '%'


    console.log(heightPercentRounded);

})