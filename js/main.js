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

// clear and backspace button function
function clearBackspaceButton(buttonCondition){
    if (buttonCondition == '<') {
        let displayInputNumber = document.getElementById('displayInputNumber');
        var numberLenght = displayInputNumber.value.substring(0, displayInputNumber.value.length - 1)
        document.getElementById('displayInputNumber').value = numberLenght;
    }
    else if (buttonCondition == 'C') {
        displayInputNumber = document.getElementById('displayInputNumber').value = '';
    }
}

// try lefet function
var count = 0;
console.log(count);
function clicksubmit() {
    count += 1;
    document.getElementById('tryLeft').innerHTML = Math.abs(count - 3);
    var btn = document.getElementById('submit');
    if (count >= 3) {
        btn.disabled = true;
    }
}