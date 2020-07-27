/*=============== Generate Random Number  =====================*/
document.getElementById('generateRandomNumberBtn').addEventListener('click', function () { 
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('displayNumber').value = randomNumber;
});

/*================ display number input =================*/
function numberInput(value) {
    let displayInputNumber = document.getElementById('displayInputNumber').value;
    let numberLenght = displayInputNumber.toString().length;
    if ( numberLenght < 6 ){
        document.getElementById('displayInputNumber').value = document.getElementById('displayInputNumber').value + value;
    }
}

/*============== clear and backspace button function ===============*/
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

/*============= try lefet function ==================*/
var count = 0;
document.getElementById('submit').addEventListener('click', function(){
    count += 1;
    document.getElementById('tryLeft').innerHTML = Math.abs(count - 3);
    var btn = document.getElementById('submit');
    if (count >= 3) {
        btn.disabled = true;
    }
});

// var inputNumber = displayInputNumber = document.getElementById('displayInputNumber').value;
// if (inputNumber.length === 0) {
//     console.log('true');
// }

function success() {
    if (document.getElementById("displayInputNumber").value === "") {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

/*=============== pin match function ================*/ 
function submit(){
    var generatePinNumber = document.getElementById('displayNumber').value;
    var inputNumber = displayInputNumber = document.getElementById('displayInputNumber').value;
    // if (generatePinNumber == inputNumber){
    //     document.getElementById('sucessMessage').classList.add('d-block');
    //     console.log('true');
    // }
    // else{
    //     document.getElementById('wrongMessage').classList.add('d-block');
    //     console.log('false');
    // }
}