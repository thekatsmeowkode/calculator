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
    calcBody.dataset.previousKey = 'number'
    if (displayReading === '0' || previousKey === 'operator' || previousKey === 'equal') {screenBottom.textContent = keyReading}
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
    calcBody.dataset.previousKey = 'clear'
    displayReading.textContent = 0
    calcBody.dataset.firstOperand = ''
    calcBody.dataset.secondOperand = ''
    calcBody.dataset.valueStore = ''
    calcBody.dataset.operator = ''}
if (action === 'decimal') {
    calcBody.dataset.previousKey = 'decimal';
    if (!displayReading.includes('.')) {screenBottom.textContent = displayReading + '.'}
    else if (previousKey === 'operator' || previousKey === 'equal') {screenBottom.textContent = '0'}}
if (action === 'equal') {
    let secondOperand = displayReading;
    const firstOperand = calcBody.dataset.firstOperand;
    const operator = calcBody.dataset.operator
    if (firstOperand) {
        if (previousKey === 'calculate') {
            firstOperand = displayReading
            secondOperand = calcBody.dataset.valueStore}
        displayReading.textContent = calculate(firstOperand, operator, secondOperand)
    }
    calcBody.dataset.previousKey = 'operate'
    calcBody.dataset.valueStore = secondOperand
    if (firstOperand && operator && previousKey !== 'operator' && previousKey !=='equal') {
        let calculateValue = calculate(firstOperand, operator, secondOperand)
        screenBottom.textContent  = calculateValue
        calcBody.dataset.firstOperand = calculateValue
        calcBody.dataset.previousKey = 'equal'}
    else {calcBody.dataset.firstOperand = displayReading}
}})}

function calculate(firstOperand, operator, secondOperand) {
    firstOperandFix = parseFloat(firstOperand)
    secondOperandFix = parseFloat(secondOperand)
    if (operator === 'add') {return firstOperandFix + secondOperand}
    if (operator === 'subtract') {return firstOperandFix - secondOperand}
    if (operator === 'multiply') {return firstOperandFix * secondOperand}
    if (operator === 'divide') {return firstOperandFix / secondOperand}}