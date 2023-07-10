
let cityDatas = {
    tehran: { temp: 20, name: 'Tehran', des: 'Windy', humidity: 15, windSpeed: 7 },
    shiraz: { temp: 25, name: 'Shiraz', des: 'Cloudy', humidity: 35, windSpeed: 15 },
    tabriz: { temp: 18, name: 'Tabriz', des: 'Rainy', humidity: 10, windSpeed: 9 },
    karaj: { temp: 22, name: 'Karaj', des: 'Snow', humidity: 19, windSpeed: 13 },
}

let searchBar = document.querySelector('.search-bar')
let searchBtn = document.querySelector('.searchBtn')

let showCity = document.querySelector('.city')
let showWeather = document.querySelector('.weather')
let showTemp = document.querySelector('.temp')
let showDescription = document.querySelector('.description')
let showHumidity = document.querySelector('.humidity')
let showWind = document.querySelector('.wind')

searchBtn.addEventListener('click', function () {
    let searchBarValue = searchBar.value
    let userCity = cityDatas[searchBarValue]

    if (userCity) {
        console.log(userCity);
        console.log(userCity.name);

        showWeather.classList.remove('loading')
        // showWeather.style.visibility = visible
        showCity.innerHTML = 'Weather in: ' + userCity.name
        showTemp.innerHTML = userCity.temp + '°C'
        showDescription.innerHTML = userCity.des
        showHumidity.innerHTML = 'Humidity: ' + userCity.humidity + '%'
        showWind.innerHTML = 'Wind speed: ' + userCity.windSpeed + 'km/h'
    } else {
        alert('Enter the correct city name from above list')
    }

})

// console.log(searchBarValue);
// let userSearchCity=
// console.log(cityDatas.tehran); 