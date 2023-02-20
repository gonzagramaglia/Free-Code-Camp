
let firstCard = 5
let secondCard = 7
let cards = [firstCard, secondCard]
console.log(cards)
let card = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // # para especificar que es un id
let cardsEl = document.querySelector(".cards-el") // . para especificar que es una clase
let deck = ""

function startGame(){
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
    sum += card
    cards.push(card)
    startGame()
}


// let array = [1,1,2,1]
// array.splice(2,1,1)
// console.log(array)


