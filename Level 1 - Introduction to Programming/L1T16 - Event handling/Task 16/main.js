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
function displayGroceryItems() {

    // Get the unordered list element from the HTML
    let shoppingList = document.getElementById("itemList");

    list.innerHTML = "";

    // Loop through the groceryItems array and create list items for each grocery item
    groceryItems.forEach(function(item) {

    //Create a new list item element
    let listItem = document.createElement("li");

    //Add the grocery item text to the list item
    listItem.textContent = item;
    let span = document.createElement("span");
    span.className = "close";
    span.textContent = "\U00d7";
    li.appendChild(span);
    list.appendChild(li);
    });
    setDefaultChecked();
    deleteItems();

//Mark two items as already bought by adding the "checked" class to them
function setDefaultCheckedItems() {

    let items = document.querySelectorAll("#itemList li");

    if (items.length >1) {
        items[1].classList.add("checked");
    }
    if(items.length>3){

        items[3].classList.add("checked");
    }
}
//Add Item
function addItem(){
    let input = document.getElementById("itemInput");
    let value = input.value.trim();

}
else{
    groceryItem.push(value);
}
input.value="";
displayGroceryItems();
}
//Delete Item
function deleteItem(){
    let closeButtons=document.querySelectorAll(".close");
    close.Buttons.forEach(function(button,index){
        button.onclick=function(event){
            event.stopPropagation();
            groceryItems.splice(index,1);
            displayItems();
        };
});
}

//Toggle checked Items
document.getElementById("itemList").addEverListener("click", function(event){
    if(event.target.tagName==="Li"){
        event.target.classList.toggle("checked");
    }
});

//Enter key Functionality
document.getElementById("itemInput").addEventListener("keyup",function(event){
    if(event.key==="Enter"){
        document.getElementById("addButton").click();
    }
});
//Run the functions to display items and set default checked items
displayItems();
