let myLeads = [ ]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector(".input-btn")
const deleteBtn = document.querySelector(".delete-btn")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener('click', function(){ 
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    inputEl.value = ""
})

deleteBtn.addEventListener('click', function(){ 
    localStorage.clear()
    myLeads = [ ]
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        //ulEl.innerHTML += "<li>"+ myLeads[i] +"</li>"
        // let li = document.createElement("li")
        // li.textContent+=myLeads[i]
        // ulEl.append(li)
        // listItems += "<li><a href='https:\/\/"+myLeads[i]+"' target='_blank'>"+ myLeads[i] +"</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='https://www.${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}