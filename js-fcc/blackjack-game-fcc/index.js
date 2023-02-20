
let firstCard = 5
let secondCard = 7
let sum = firstCard + secondCard + 3 + 4 + 1
let hasBlackJack = false
let isAlive = true

console.log(sum)

if (sum < 21){
    console.log("Do you want to draw a new card? :)")
}else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! :D")
    hasBlackJack = true
}else {
    console.log("You're out of the game! :(")
    isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)