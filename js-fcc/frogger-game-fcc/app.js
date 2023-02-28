const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')
let frogPosition = 76
let timeLeft
const boardWidth = 9
let timerId
let playingGame = false
let outcomeTimerId 

function checkOutcome(){
    showResult()
}


function moveFrog(e){

    switch(e.key){
        case 'ArrowRight':
            // if (frogPosition===8 || frogPosition===17 || frogPosition===26 || frogPosition===35 || frogPosition===44 || frogPosition===53 || frogPosition===62 || frogPosition===71 || frogPosition===80){
            if (frogPosition%9===8){
                break
            }else {
                squares[frogPosition].classList.remove('frog')
                frogPosition++
                drawFrog()
                break
            }

        case 'ArrowLeft':
            // if (frogPosition===0 || frogPosition===9 || frogPosition===18 || frogPosition===27 || frogPosition===36 || frogPosition===45 || frogPosition===54 || frogPosition===63 || frogPosition===72){
            if (frogPosition%9===0){
                break
            }else {
                squares[frogPosition].classList.remove('frog')
                frogPosition--
                drawFrog()
                break
            }

        case 'ArrowUp':
            if (frogPosition < boardWidth){
                break
            }else {
                squares[frogPosition].classList.remove('frog')
                frogPosition-=boardWidth
                drawFrog()
                break
            }

        case 'ArrowDown':
            if (frogPosition >= boardWidth*8){
                break
            }else {
                squares[frogPosition].classList.remove('frog')
                frogPosition+=boardWidth
                drawFrog()
                break
            }
    }
 
} 

function drawFrog(){
    squares[frogPosition].classList.add('frog')
}


function autoMoveLogsLeft(){
    logsLeft.forEach(logLeft => moveLogsLeft(logLeft))
}

function autoMoveLogsRight(){
    logsRight.forEach(logRight => moveLogsRight(logRight))
}

function moveLogsRight(logRight){
    switch(true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break

        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break

        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break

        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break

        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
    }
}

function moveLogsLeft(logLeft){
    switch(true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break

        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break

        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break

        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break

        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}

// function autoMoveElements(){
//     setInterval(autoMoveLogsLeft, 350)
//     setInterval(autoMoveLogsRight, 300)
//     setInterval(autoMoveCarsLeft, 1350)
//     setInterval(autoMoveCarsRight, 1300)
// }

function autoMoveElements(){
    autoMoveLogsLeft()
    autoMoveLogsRight()
    autoMoveCarsLeft()
    autoMoveCarsRight()
    showTime()
}

startPauseButton.addEventListener('click', startPause)

function showTime(){
    setInterval(timeLeft--, 1000)
    timeLeftDisplay.textContent = timeLeft
}

function startPause(){
    if(playingGame===false){
        if(frogPosition!=76 && resultDisplay === 'You are DEAD!'){
            squares[frogPosition].classList.remove('frog')
            frogPosition=76
            timeLeft = 21
            drawFrog()
            playingGame = true
            document.addEventListener('keydown', moveFrog)
            timerId = setInterval(autoMoveElements, 1000)
            outcomeTimerId = null
            
        } else{
            timeLeft = 21
            drawFrog()
            playingGame = true
            document.addEventListener('keydown', moveFrog)
            timerId = setInterval(autoMoveElements, 1000)
            outcomeTimerId = setInterval(checkOutcome,50)
        }
    } else{
        playingGame = false
        document.removeEventListener('keydown', moveFrog)
        clearInterval(timerId)
        outcomeTimerId = setInterval(checkOutcome,50)

    }
}



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function autoMoveCarsLeft(){
    carsLeft.forEach(carLeft => moveCarsLeft(carLeft))
}

function autoMoveCarsRight(){
    carsRight.forEach(carRight => moveCarsRight(carRight))
}

function moveCarsRight(carRight){
    switch(true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break

        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break

        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break
    }
}

function moveCarsLeft(carLeft){
    switch(true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break

        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break

        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function showResult(){
    if(squares[frogPosition].classList.contains('c2') ||
       squares[frogPosition].classList.contains('c3') ||
       squares[frogPosition].classList.contains('l4') ||
       squares[frogPosition].classList.contains('l5') )
       {
        resultDisplay.textContent = 'You are DEAD!'
        clearInterval(timerId)
        clearInterval(outcomeTimerId)
        playingGame = false
        squares[frogPosition].classList.remove('frog')
        frogPosition=76
        document.removeEventListener('keydown',moveFrog)

    }else if(squares[frogPosition].classList.contains('ending-block')){
        resultDisplay.textContent = 'YOU WON!'

        clearInterval(timerId)
        clearInterval(outcomeTimerId)
        playingGame = false
        squares[frogPosition].classList.remove('frog')
        frogPosition=76
        document.removeEventListener('keydown',moveFrog)
    }else if(timeLeft===0){
        resultDisplay.textContent = 'TIME OVER. You lose!'
        clearInterval(timerId)
        clearInterval(outcomeTimerId)
        playingGame = false
        squares[frogPosition].classList.remove('frog')
        frogPosition=76
        document.removeEventListener('keydown',moveFrog)
    }else{
        resultDisplay.textContent = 'You are still alive!'
    }
}
