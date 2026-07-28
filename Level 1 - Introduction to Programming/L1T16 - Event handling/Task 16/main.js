//Shopping List Array
let groceryItems = [
    "Milk",
    "Bread",
    "Eggs",
    "Apples",
    "Rice",
    "Cheese"
];

// Function to display the grocery items
function displayItems() {

    // Get the unordered list element from the HTML
    let shoppingList = document.getElementById("itemList");

    shoppingList.innerHTML = "";

    // Loop through the groceryItems array and create list items for each grocery item
    groceryItems.forEach(function(item) {

    //Create a new list item element
    let listItem = document.createElement("li");

    //Add the grocery item text to the list item
    listItem.textContent = item;

    let span = document.createElement("span");
    span.className = "close";
    span.textContent = "\u00D7";

    listItem.appendChild(span);
    shoppingList.appendChild(listItem);
    });

    setDefaultChecked();
    deleteItems();
}
//Mark two items as already bought by adding the "checked" class to them
function setDefaultChecked() {

    let items = document.querySelectorAll("#itemList li");

    if (items.length >= 4) {
        items[1].classList.add("checked");
        items[3].classList.add("checked");
    }
}
//Add a new Item
function addItems(){

    let input = document.getElementById("itemInput");
    let newItem = input.value.trim();

    if (newItem === "") {
        alert("Please enter an item");
    } else {
        groceryItems.push(newItem);
    }
    
    input.value = "";
    displayItems();
}

//Delete Item
function deleteItems() {
    let closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button,index){
        button.onclick = function(event) {
            event.stopPropagation();
            groceryItems.splice(index,1);
            displayItems();
        };
});
}

//Toggle checked Items
document.getElementById("itemList").addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
});

//Enter key Functionality
document.getElementById("itemInput").addEventListener("keyup",function(event){
    if(event.key === "Enter") {
        document.getElementById("addButton").click();
    }
});
//Run the functions to display items and set default checked items
displayItems();
