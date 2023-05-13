
var userMin = Number(prompt("Please Enter a minute..."));

if (isNaN(userMin)) {
    alert("your min is not correct");
    var userMin = Number(prompt("Please Enter a minute..."));
    var hour = userMin / 60;
} else {
    var hour = userMin / 60;

}

alert(hour)