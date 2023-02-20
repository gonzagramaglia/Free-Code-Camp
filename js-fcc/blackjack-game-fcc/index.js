
let firstCard = 5
let secondCard = 7
let sum = firstCard + secondCard + 3 + 4 + 1
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(sum)

if (sum < 21){
    message = "Do you want to draw a new card? :)"
}else if (sum === 21){
    message = "Wohoo! You've got Blackjack! :D"
    hasBlackJack = true
}else {
    message = "You're out of the game! :("
    isAlive = false
}

function startGame(){
    console.log("Clicked")
}

console.log(message)