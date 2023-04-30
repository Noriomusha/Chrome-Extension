const inputBtn = document.getElementById("inputBtn");

const deleteAllBtn = document.getElementById("deleteAllBtn");
const saveTabBtn = document.getElementById("saveTabBtn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads)
});



deleteAllBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
    ulEl.innerHTML = "";
})

saveTabBtn.addEventListener("click", function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads)
        })   
})

function render(leads){
    let listItems = "";
// creates the list items for the array
// both create the list item and sets the list to a clickable hyperlink
for(let i = 0; i<leads.length;i++){
    
    listItems += `
        <li>
            <a target = '_blank' href = "${leads[i]}> 
                ${leads[i]}
            </a>
        </li>
        `
}

ulEl.innerHTML += listItems;
}


