let myLeads = [ ]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    renderLeads()
    console.log(myLeads)
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        //ulEl.innerHTML += "<li>"+ myLeads[i] +"</li>"
        // let li = document.createElement("li")
        // li.textContent+=myLeads[i]
        // ulEl.append(li)
        listItems += "<li>"+ myLeads[i] +"</li>"
    }
    ulEl.innerHTML = listItems
}