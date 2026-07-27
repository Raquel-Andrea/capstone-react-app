//Constructor functions used to create Shoe objects
function Shoes(name, productCode, quantity, valuePerItem) {

// Store the shoe name
this.name = name;
//Store the product code
this.productCode = productCode;
//Store the quantity available in stock
this.quantity = quantity;
//Store the value of one shoe
this.valuePerItem = valuePerItem;
}

//Create an empty array to store the shoe's details
let inventory = [];

//Add the shoe's details to the inventory array
    new Shoes("Nike Air Max","NK001", 15,2200);
    new Shoes("Adidas Superstar", "AD002", 10, 1800);
    new Shoes("Puma Runner", "PM003", 8, 1500);
    new Shoes("Converse High","CV004", 12, 1300);
    new Shoes("Vans Old Skool", "VN005", 20, 1700);

//Add the shoe objects to the inventory array
inventory.push(shoe1);
inventory.push(shoe2);
inventory.push(shoe3);
inventory.push(shoe4);
inventory.push(shoe5);

//Display the current inventory

console.log("\n==========CURRENT INVENTORY==========");
console.table(inventory);

//Function to search for a shoe by name
function searchShoe (searchName) {
    let found = inventory.find(function(shoe) {
        return shoe.name.toLowerCase() ===searchName.toLowerCase();
    });
    if(found) {
        console.log("\nShoe Found:");
        console.table([found]);
    }else {
        console.log("\nShoe not found.");
    }
}

//Function to find the shoe with the lowest value per item
function lowestValueShoe() {
    let lowest = inventory[0];
    for (let i = 1; i < inventory.length; i++) {
        if (inventory[i].valuePerItem < lowest.valuePerItem) {
            lowest = inventory[i];
        }

    }
    console.log("==========LOWEST VALUE SHOE==========");
    console.table([lowest]);

}


//Function to find the shoe with the highest value per item
function highestValueShoe() {
    let highest = inventory[0];
    for (let i = 1; i < inventory.length; i++) {
        if (inventory[i].valuePerItem > highest.valuePerItem) {
            highest = inventory[i];
        }
    }

    console.log("==========HIGHEST VALUE SHOE==========");
    console.table([highest]);
}

//Function to edit a shoe's details

function editShoe(productCode, newName, newCode, newQuantity, newValue) {
    let shoeToEdit = inventory.find(function(shoe) {
        return shoe.productCode === productCode;
    });
    if (shoeToEdit) {
        shoeToEdit.name = newName;
        shoeToEdit.productCode = newCode;
        shoeToEdit.quantity = newQuantity;
        shoeToEdit.valuePerItem = newValue;
        console.log("\n==========SHOE UPDATED SUCCESSFULLY==========");
        console.table([shoeToEdit]);
    } else {
        console.log("\nShoe not found.");
    }
}

//Function to sort the inventory by value per item
function sortByValue() {
    inventory.sort(function(a, b) {
        return a.valuePerItem - b.valuePerItem;
    });
    console.log("\n==========INVENTORY SORTED BY VALUE==========");
    console.table(inventory);
}

//Call the functions to demonstrate their functionality

//Search for a shoe by name
searchShoe("Nike Air Max");

//Find the shoe with the lowest value per item
lowestValueShoe();

//Find the shoe with the highest value per item
highestValueShoe();

//Edit a shoe's details
editShoe("AD002", "Adidas Superstar Updated", "AD002U", 12, 1900);

//Sort the inventory by value per item
sortByValue();

console.log("\n==========FINAL INVENTORY==========");
console.table(inventory);

