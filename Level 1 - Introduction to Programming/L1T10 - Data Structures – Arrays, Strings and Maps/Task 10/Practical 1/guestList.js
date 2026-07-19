let guestList = [];
for(let i = 1; i <= 11; i++){

let name = prompt("Enter guest " + i + "'s name:");
if(guestList.length < 10) {
    guestList.push(name);
}
else{
    let answer = prompt(
        "You can only add a maximum of 10 people./nWould you like to replace someone with " + name + "? (yes/no)" 
    );
answer = answer.toLowerCase();
if(anwser == "yes") {
let replaceName = prompt("Enter the name of the guest you want to replace:");
let index = guestList.indexOf(replaceName);
if (index != -1) {
    guestList[index] = name;
}
}
}
}
alert("Guest List:\n" + guestList.join(","));
