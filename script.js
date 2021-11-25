function button1Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "1";
};
function button2Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "2";
};
function button3Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "3";
};
function button4Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "4";
};
function button5Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "5";
};
function button6Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "6";
};
function button7Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "7";
};
function button8Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "8";
};
function button9Clicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "9";
};
function buttonPointClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += ".";   
};
function buttonOpenParClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "(";   
};
function buttonCloseParClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += ")";   
};
function buttonPlusClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "+";
};
function buttonMoinsClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "-";
};
function buttonMultClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "*";
};
function buttonDivClicked() {
    let screen = document.getElementById('screen');
    screen.textContent += "/";
};

function solve() {
    let equation = document.getElementById('screen').textContent;
    let solved = eval(equation);
    document.getElementById('screen').innerHTML = solved;
};
function clearScreen() { 
    let screen = document.getElementById('screen');
    screen.textContent = "";
}