
function checkYear(year) {
    if (isNaN(year) || year.toString().length !== 4) {
        alert("Please enter a valid 4-digit year.");
        return;
    }

    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    alert(year + (isLeapYear ? " is a leap year!" : " is not a leap year!"));
}

document.querySelector('.box button').addEventListener('click', function() {
    var inputYear = parseInt(document.querySelector('input[type="number"]').value);
    checkYear(inputYear);
});
