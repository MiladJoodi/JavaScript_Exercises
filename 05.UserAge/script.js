
var userYearBirth = Number(prompt("Please Enter your year of birth..."))

var userAge = 2023 - userYearBirth;

if (isNaN(userYearBirth)) {
    alert("your year is not currect");
} else if (userYearBirth > 2023){
    alert("your year is not currect");
}
 else {
    alert(userAge);

}
