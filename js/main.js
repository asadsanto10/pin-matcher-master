// Generate Random Number 
document.getElementById('generateRandomNumberBtn').addEventListener('click', function () { 
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('displayNumber').value = randomNumber;
});

// display number input
function numberInput(value) {
    let displayInputNumber = document.getElementById('displayInputNumber').value;
    let numberLenght = displayInputNumber.toString().length;
    if ( numberLenght < 6 ){
        document.getElementById('displayInputNumber').value = document.getElementById('displayInputNumber').value + value;
    }
}
// clear display
document.getElementById('clear').addEventListener('click', function(){
   displayInputNumber = document.getElementById('displayInputNumber').value = '';
});

// backspace display
document.getElementById('backspace').addEventListener('click', function () {
    let displayInputNumber = document.getElementById('displayInputNumber').value;
    // let numberLenght = displayInputNumber.toString().length;
    // let sd = numberLenght - 1;
    console.log(displayInputNumber.substr(0, displayInputNumber - 2));
    // numberLenght = numberLenght.substr(0, numberLenght - 1);
    // document.getElementById('displayInputNumber').value = numberLenght;
});