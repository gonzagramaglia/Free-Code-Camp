
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let currentCount = " "+countEl.innerText + " -"

function incrementCount() {
    count+= 1
    countEl.textContent = count
}

function save(){
    saveEl.textContent += " "+countEl.innerText + " -"
    count = 0
    countEl.textContent = 0
}
