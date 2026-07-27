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

    // Loop through the groceryItems array and create list items for each grocery item
    groceryItems.forEach(function(item) {

    //Create a new list item element
    let listItem = document.createElement("li");

    //Add the grocery item text to the list item
    listItem.textContent = item;

    shoppingList.appendChild(listItem);
    });
}
//Mark two items as already bought by adding the "checked" class to them
function setDefaultCheckedItems() {

    let items = document.querySelectorAll("#itemList li");

    if (items.length >= 2) {
        items[1].classList.add("checked");
        items[3].classList.add("checked");
    }
}
//Run the functions to display items and set default checked items
displayItems();
setDefaultCheckedItems();