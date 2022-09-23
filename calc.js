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
|| action === 'divide') {calcBody.dataset.previousKey = 'operator'}
if (action === 'clear') {console.log('clear')}
if (action === 'decimal') {screenBottom.textContent = displayReading + '.'}
if (action === 'equal') {let secondOperand = displayReading}
})}

// function add(a, b) {
//     return a + b
// }
  
// const subtract = function(a, b) {
//  return a - b};

// const multiply = function(a, b) {
//     return a * b
//   };

// const divide = function(a, b) {
//     return a / b
// }

// class Calculator {
//     constructor(currentNumber, previousNumber)
// }