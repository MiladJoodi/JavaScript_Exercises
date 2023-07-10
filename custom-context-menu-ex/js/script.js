
const contextMenu = document.getElementById('contextMenu')

function contextHandler(event) {
    event.preventDefault()

    if (contextMenu.style.display === 'none') {

        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'

        contextMenu.style.display = 'block'

        console.log(event.pageX);
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }

}

function clickHandler(){
    contextMenu.style.display = 'none'
}
function keydownHandler(event){
    if(event.code === 'Escape'){
    contextMenu.style.display = 'none'
    }
}

document.body.addEventListener('contextmenu', contextHandler)
document.body.addEventListener('click', clickHandler)
document.body.addEventListener('keydown', keydownHandler)
