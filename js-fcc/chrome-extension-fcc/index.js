let myLeads = [ ]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector(".input-btn")
const deleteBtn = document.querySelector(".delete-btn")
const tabBtn = document.querySelector(".tab-btn")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let tabs = [ 
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener('click', function(){ 
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ""
})

tabBtn.addEventListener('click', function(){
    myLeads.push(tabs[0].url)
    localStorage.setItem("url",JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener('click', function(){ 
    localStorage.clear()
    myLeads = [ ]
    render(myLeads)
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        //ulEl.innerHTML += "<li>"+ myLeads[i] +"</li>"
        // let li = document.createElement("li")
        // li.textContent+=myLeads[i]
        // ulEl.append(li)
        // listItems += "<li><a href='https:\/\/"+myLeads[i]+"' target='_blank'>"+ myLeads[i] +"</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='https://www.${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}