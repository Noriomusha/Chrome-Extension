let inputBtn = document.getElementById("inputBtn");
const myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads()
});

function renderLeads(){
    let listItems = "";
    // creates the list items for the array
// both create the list item and sets the list to a clickable hyperlink
for(let i = 0; i<myLeads.length;i++){
    
    listItems += `
        <li>
            <a target = '_blank' href = "${myLeads[i]}> 
                ${myLeads[i]}
            </a>
        </li>
        `
}

ulEl.innerHTML += listItems;
}

