let button = document.querySelectorAll('.button')
let addButton = document.querySelector('#add')
let subtractButton = document.querySelector('#subtract')
let multiplyButton = document.querySelector('#multiply')
let divideButton = document.querySelector('#divide')
let decimalButton = document.querySelector('#decimal')
let equalButton = document.querySelector('#equal')
let clearButton = document.querySelector('#clear')
let screenTop = document.querySelector('#screenTop')
let screenBottom = document.querySelector('#screenBottom')
let calcBody = document.querySelector('.calc_body')

for (let buttons of button) {
buttons.addEventListener('click', (e) => {
    const key = e.target
    const action = key.dataset.action
    const keyReading = key.textContent
    const displayReading = screenBottom.textContent
    let previousKey = calcBody.dataset.previousKey

if (!action) 
    {
    if (displayReading === '0' || previousKey === 'operator') {screenBottom.textContent = keyReading}
    else {screenBottom.textContent = displayReading + keyReading}
    }
if (action === 'add'
|| action === 'subtract'
|| action === 'multiply'
|| action === 'divide') {
    calcBody.dataset.previousKey = 'operator';
    calcBody.dataset.firstOperand = displayReading;
    calcBody.dataset.operator = action}
if (action === 'clear') {
    console.log('clear')}
if (action === 'decimal') {
    screenBottom.textContent = displayReading + '.'}
if (action === 'equal') {
    let secondOperand = displayReading;
    const firstOperand = calcBody.dataset.firstOperand;
    const operator = calcBody.dataset.operator
    screenBottom.textContent = calculate(firstOperand, operator, secondOperand)}
})}

function calculate(firstOperand, operator, secondOperand) {
    if (operator === 'add') {return Number(firstOperand) + Number(secondOperand)}
    if (operator === 'subtract') {return Number(firstOperand) - Number(secondOperand)}
    if (operator === 'multiply') {return Number(firstOperand) * Number(secondOperand)}
    if (operator === 'divide') {return Number(firstOperand) / Number(secondOperand)
}