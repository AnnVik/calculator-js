var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function getNumber1(){
    return Number(input1.value);
}
function getNumber2(){
    return Number(input2.value);
}

function MakeOperation(operatorCode) {
    if (operatorCode === '+') {
        var result = getNumber1() + getNumber2();
    } else if (operatorCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operatorCode === '*') {
        var result = getNumber1() * getNumber2();
    } else if (operatorCode === '/') {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert('operation is unknown');
    }
    window.alert(result);
}

function onButtonPlusClick() {
    MakeOperation('+');
}
function onButtonMinusClick() {
    MakeOperation('-');
}
function onButtonMultiplyClick() {
    MakeOperation('*');
}
function onButtonDevideClick() {
    MakeOperation('/');
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);




