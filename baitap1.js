function Add() {
    let firstnumber = parseFloat(document.getElementById("firstNumber").value);
    let secondnumber = parseFloat(document.getElementById("secondNumber").value);
    result = firstnumber + secondnumber;
    document.getElementById("result").innerText=result;

}
function Sub() {
    let firstnumber = parseFloat(document.getElementById("firstNumber").value);
    let secondnumber = parseFloat(document.getElementById("secondNumber").value);
    result = firstnumber - secondnumber;
    document.getElementById("result").innerText=result;

}
function Mul() {
    let firstnumber = parseFloat(document.getElementById("firstNumber").value);
    let secondnumber = parseFloat(document.getElementById("secondNumber").value);
    result = firstnumber * secondnumber;
    document.getElementById("result").innerText=result;
}
function Div() {
    let firstnumber = parseFloat(document.getElementById("firstNumber").value);
    let secondnumber = parseFloat(document.getElementById("secondNumber").value);
    result = firstnumber / secondnumber;
    document.getElementById("result").innerText=result;

}