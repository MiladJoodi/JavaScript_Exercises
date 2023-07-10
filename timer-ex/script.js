
var min = prompt('Enter Minutes Digits: ')
var sec = +prompt('Enter Second Digits: ')


if(min.indexOf('0') === '0'){
    console.log('sefr');
}

let timer = setInterval(function () {

    if (sec === -1) {
        min--
        sec = 59
    }
    if (sec == 0 && min == 0) {
        clearInterval(timer)
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    if (min < 10  && !(min[0] === '0')) {
        min = '0' + min
    }
    console.log('Timer: ' + min + ' : ' + sec);
    sec--

}, 1000)