
let firstCard = 0
let secondCard = 0
let cards = []
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // # para especificar que es un id
let cardsEl = document.querySelector(".cards-el") // . para especificar que es una clase
let deck = ""
let player = {
    name: "Gonza",
    chips: 223,
    blackjack: false,
    alive: false
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $"+ player.chips

function startGame(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    player.alive = true
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
    if (sum < 21){
        message = "Do you want to draw a new card?"
        displayGameInfo()
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        player.blackjack = true
        displayGameInfo()
    }else {
        message = "You're out of the game"
        player.alive = false
        displayGameInfo()
    }
}

function displayGameInfo(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent = "Sum: "+sum
    messageEl.textContent = message
}

function newCard(){
    if (player.alive===true && player.blackjack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard(){
    let temporalCard = Math.floor(Math.random()*13)+1
    if (temporalCard ===1){
        return 11
    } else if (temporalCard<=9){
        return temporalCard
    } else {
        return 10
    }
}

// Some exercises w/arrays

// let array = [1,1,2,1]
// array.splice(2,1,1)
// 1,1,1,1

// let largeCountries = ["Tuvalu", 
//             "India",
//             "USA",
//             "Indonesia",
//             "Monaco"]
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("Pakistan")
// "China", "India", "USA", "Indonesia", "Pakistan"

// let hands = ["rock", 
//              "paper", 
//              "scissor"]


// function rockPaperOrScissor(){
//     return hands[
//         Math.floor(Math.random()*3)
//     ]
// }

// console.log(rockPaperOrScissor())
// console.log(rockPaperOrScissor())