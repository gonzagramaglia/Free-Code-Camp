const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let countDownTimerId = setInterval(countDown, 1000)

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquareVar = squares[Math.floor(Math.random() * 9)]
    randomSquareVar.classList.add('mole')
    hitPosition = randomSquareVar.id
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if( square.id == hitPosition){
            console.log('Clicked')
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 750)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        alert(`GAME OVER! Your final score is ${result}. Congrats.`)
    }
}


