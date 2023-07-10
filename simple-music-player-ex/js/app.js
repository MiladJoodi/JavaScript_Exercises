
let audioElem = document.querySelector('audio')
let musicsSrc = [
    "media/html.m4a",
    "media/kar.m4a",
    "media/bazar.m4a"
]

let audioIndex = 0

function previousMusicHandler() {
    audioIndex--

    if (audioIndex < 0) {
        audioIndex = 2
    }
    // console.log(musicsSrc[audioIndex]);
    audioElem.setAttribute('src', musicsSrc[audioIndex])
    console.log(musicsSrc[audioIndex]);
    playMusicHandler()
}

function playMusicHandler() {
    audioElem.play()

    setInterval(function () {
        console.log(audioElem.currentTime);
    }, 1000)
}
function pauseMusicHandler() {

    audioElem.play()
}
function nextMusicHandler() {
    audioIndex++

    if (audioIndex > musicsSrc.length - 1) {
        audioIndex = 0
    }
    // console.log(musicsSrc[audioIndex]);
    audioElem.setAttribute('src', musicsSrc[audioIndex])
    console.log(musicsSrc[audioIndex]);
    playMusicHandler()
}

function speedHandler() {
    audioElem.playbackRate = 2
    console.log('playbackRate = 2x');
}

function timeMinusHandler() {
    audioElem.currentTime -= 5
}
function timePlusHandler() {
    audioElem.currentTime += 5
}
