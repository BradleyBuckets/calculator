
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
    return a / b;
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

let firstNumber = ""
let secondNumber = ""
let op = ''
let isComplete = false


numbers.forEach(number => {
    number.addEventListener('click', setNumber)
})
operators.forEach(item => {
    item.addEventListener('click', setOperand)
})
clear.addEventListener('click', reset)
equal.addEventListener('click', run)

function update() {
    let screen = `${firstNumber} ${op} ${secondNumber}`
    screenDiv.textContent = screen
    console.log(firstNumber.length)
}

function setNumber(){
    if (!isComplete){
        firstNumber += this.textContent;
    }
    if (isComplete){
        secondNumber += this.textContent;
    }
    update()
}

function setOperand() {
    op = this.textContent;
    isComplete = true;
    update()
}

function reset() {
    firstNumber = '';
    secondNumber = '';
    op = '';
    isComplete = false;
    update()
}

function run(){
    let result = operate(op, parseInt(firstNumber), parseInt(secondNumber));
    reset()
    firstNumber = result
    update()
}