
let $ = document
let players = $.querySelectorAll('.fa-play')
let audios = $.querySelectorAll('audio')


players.forEach(function (player) {
    player.addEventListener('click', function (event) {
        // console.log(event.target.dataset.name);
        musicName = event.target.dataset.name

        audios.forEach(function (audio) {
            if (audio.dataset.name === musicName) {
                audio.play()
            } else {
                audio.currentTime = 0
                audio.pause()
            }
        })
    })
})