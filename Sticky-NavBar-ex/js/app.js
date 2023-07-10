
let mainNavElem = document.querySelector('#mainNav')
let imgElem = document.querySelector('img')

document.addEventListener('scroll', function(event){
    if(document.documentElement.scrollTop>0){
        mainNavElem.classList.add('bg-black','txt-white')
        imgElem.style.height = '60px'

    }else{
        mainNavElem.classList.remove('bg-black','txt-white')
        imgElem.style.height = '84px'
    }
})
// function navbarHide(event){
   
// }