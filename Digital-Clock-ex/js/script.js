const $ = document
let hourElem = $.getElementById('hour')
let minuteElem = $.getElementById('minute')
let secondsElem = $.getElementById('seconds')

setInterval(function () {
    let myDate = new Date()

    let nowHour = myDate.getHours()
    let nowMinute = myDate.getMinutes()
    let nowSecond = myDate.getSeconds()

    if(nowHour<10){
        nowHour = '0'+nowHour
    }
    if(nowMinute<10){
        nowMinute = '0'+nowMinute
    }
    if(nowSecond<10){
        nowSecond = '0'+nowSecond
    }

    hourElem.innerHTML = nowHour
    minuteElem.innerHTML = nowMinute
    secondsElem.innerHTML = nowSecond

}, 1000)

