
let allCountries = {
    Iran: ['Tehran', 'Esfahan', 'Shiraz', 'Ahvaz', 'Kerman'],
    Canada: ['Montral', 'Quesbec', 'Torento'],
    USA: ['Virgina', 'California', 'Los Angles']
}


let userCountrySelect = document.querySelector('.countrySelect');
let citySelect = document.querySelector('.citySelect');

userCountrySelect.addEventListener('change', function () {

    if (userCountrySelect.value === 'Please Select') {
        citySelect.innerHTML = ''
        citySelect.innerHTML += '<option>Select City</option>';

    } else {
        let mainCountyName = userCountrySelect.value
        let mainCountryCities = allCountries[mainCountyName]

        citySelect.innerHTML = ''

        mainCountryCities.forEach(function (city) {
            // console.log(city);

            citySelect.innerHTML += '<option>' + city + '</option>';
        })
    }





    // console.log(mainCountryCities);

    // console.log(allCountries[userCountrySelect.value]);

}
)