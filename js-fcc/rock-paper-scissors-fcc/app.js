const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerChoiceDisplay.innerHTML = generateComputerChoice()
    resultDisplay.innerHTML = getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 1){
        computerChoice = 'rock'
    } else if (randomNumber === 2){
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    } 
    
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you won!'
    } 

    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!'
    } 

    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you lost!'
    } 

    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
    } 

    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you won!'
    } 

    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lost!'
    } 
    
    return result
}