
const $ = document
const button = $.querySelector('.btn')
const show = $.querySelector('.show')
const img = $.querySelector('.img')

let status = true

button.addEventListener('click', function(){
    if(status){
        img.style.filter = 'grayscale(1)'
        button.style.background = 'linear-gradient(0deg, #00E626 0, #00D608 100%)'
        button.innerHTML = 'Turn On'
        status = false

    }else{
        img.style.filter = 'grayscale(0)'
        button.style.background = 'linear-gradient(0deg, #E60C0C 0, #C40000 100%)'
        button.innerHTML = 'Turn Off'
        status = true
    }
})

button.addEventListener('mousedown',function(){
        button.style.transform = 'scale(0.9)'
})
button.addEventListener('mouseup',function(){
    button.style.transform = 'scale(1)'
})