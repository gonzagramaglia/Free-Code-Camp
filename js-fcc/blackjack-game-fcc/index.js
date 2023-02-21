
let firstCard = 0
let secondCard = 0
let cards = []
console.log(cards)
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // # para especificar que es un id
let cardsEl = document.querySelector(".cards-el") // . para especificar que es una clase
let deck = ""

function startGame(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    isAlive = true
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
        hasBlackJack = true
        displayGameInfo()
    }else {
        message = "You're out of the game"
        isAlive = false
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
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


// let array = [1,1,2,1]
// array.splice(2,1,1)
// console.log(array)

