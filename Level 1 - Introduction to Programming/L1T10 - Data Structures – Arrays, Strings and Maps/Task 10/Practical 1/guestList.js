// Create an empty array to store the guest names
let guestList = [];
// Loop to prompt the user for guest names
for(let i = 1; i <= 11; i++){

    // Prompt the user to enter a guest name
let name = prompt("Enter guest " + i + "'s name:");

// Check if the guest list has less than 10 names
if(guestList.length < 10) {
    guestList.push(name);
}
else{
    // If the guest list already has 10 names, ask if they want to replace someone
    let answer = prompt(
        "You can only add a maximum of 10 people.\nWould you like to replace someone with " + name + "? (yes/no)" 
    );
    //
answer = answer.toLowerCase();
//
if(answer == "yes") {
// Prompt the user to enter the name of the guest they want to replace
    let replaceName = prompt("Enter the name of the guest you want to replace:");
//
    let index = guestList.indexOf(replaceName);
    //
if (index != -1) {
    guestList[index] = name;
}
}
}
}
//
alert("Guest List:\n" + guestList.join(","));
