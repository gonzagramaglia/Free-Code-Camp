let myLeads = [ ]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
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
            </li>`
    }
    ulEl.innerHTML = listItems
}