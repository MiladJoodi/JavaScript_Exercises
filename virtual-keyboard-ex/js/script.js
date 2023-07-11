
const titleElem = document.querySelector('.title')

document.addEventListener('keydown',function(event){
    
    appendValueToDom(event)

    pressedKey = event.key.toUpperCase()
    mainKeyElem = document.getElementById(pressedKey)
    
    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend',function(){
    mainKeyElem.classList.remove('hit')
    })
})

function appendValueToDom(event){

    if(event.key === 'Backspace'){
        titleElem.innerHTML = titleElem.innerHTML.slice(0,-1)
        return
    }

    titleElem.innerHTML += event.key
    
}


