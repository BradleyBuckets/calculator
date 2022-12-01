
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if (b == 0) {
        return "Nalgas"
    }
    return Math.floor(a / b);
}

function operate(operator, a, b){
    if (operator == "+"){
        return add(a, b)
    }
    if (operator === "-"){
        return subtract(a, b)
    }
    if (operator === "*"){
        return multiply(a, b)
    }
    if (operator === "/"){
        return divide(a, b)
    }
    else return a;
}

let screenDiv = document.querySelector('.screen')
let operators = document.querySelectorAll('.operator')
let numbers = document.querySelectorAll(".number")
let clear = document.querySelector(".clear")
let equal = document.querySelector(".enter")

let firstNumber = "";
let secondNumber = "";
let oldFirstNumber = "";
let oldSecondNumber = "";
let op = "";
let isComplete = false;
let ready = false;


numbers.forEach(number => {
    number.addEventListener('click', setNumber)
})
operators.forEach(item => {
    item.addEventListener('click', setOperand)
})
clear.addEventListener('click', reset)
equal.addEventListener('click', run)

function update() {
    oldFirstNumber = firstNumber;
    oldSecondNumber = secondNumber;
    // if (firstNumber.length + secondNumber.length < 8) {
    // }
    // if (secondNumber.length < 5) {
    //     oldSecondNumber = secondNumber;
    // }
    let screen = `${oldFirstNumber} ${op} ${oldSecondNumber}`;
    screenDiv.textContent = screen;
}

function setNumber(){
    ready = true;
    if (!isComplete){
        firstNumber += this.textContent;
    }
    if (isComplete){
        secondNumber += this.textContent;
    }
    update()
}

function setOperand() {
    if (ready) {
        op = this.textContent;
        isComplete = true;
    }
    update()
}

function reset() {
    firstNumber = '';
    secondNumber = '';
    op = '';
    isComplete = false;
    ready = false;
    update()
}

function run(){
    let result = operate(op, parseInt(oldFirstNumber), parseInt(oldSecondNumber));
    console.log(result)
    reset()
    firstNumber = result.toString()
    update()
}