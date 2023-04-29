let inputBtn = document.getElementById("inputBtn");
let retrieveBtn = document.getElementById("retrieveBtn");
const myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", JSON.stringify(myLeads));


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads()
});

retrieveBtn.addEventListener("click", function(){
    displayBookmarks();
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

function displayBookmarks(){
    bookmarks = JSON.parse(localStorage.getItem("myLeads"));
    if(bookmarks){
        myLeads = bookmarks
        renderLeads()
    }else{
        alert("No bookmarks to display")
    }
    
}
