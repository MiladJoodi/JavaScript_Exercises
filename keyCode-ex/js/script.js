

const $ = document
let starter = $.querySelector('#starter')
let heading = $.querySelector('#heading')
let ascii = $.querySelector('#ascii')
let infos = $.querySelector('#infos')

let keyCode = $.querySelector('#keyCode')
let key = $.querySelector('#key')
let keyLocation = $.querySelector('#location')
let which = $.querySelector('#which')
let code = $.querySelector('#code')


document.body.addEventListener('keydown', function (event) {
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	keyCode.innerHTML = event.keyCode
	key.innerHTML = event.key
	keyLocation.innerHTML = event.location
	which.innerHTML = event.which
	code.innerHTML = event.code
	console.log(event);
})