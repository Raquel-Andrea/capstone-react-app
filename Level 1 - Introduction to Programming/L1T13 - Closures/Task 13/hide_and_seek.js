//Function that creates the hiding game
function hide_and_seek() {

    //Secret hiding place
    let hiding_spot = "under the bed";

    //Checks if the player's guess matches the hiding spot
    function guess_location(guess) {

        if(guess === hiding_spot) {
            console.log("You found me!"); 
        }
        else {
            console.log("Wrong hiding spot. Try again!");
        }
    }
    //Return the guessing function
    return guess_location;
}
//Store the returned guessing function
let playGame = hide_and_seek();
//Allow the user to keep guessing
let found = false;

while (!found) {
    let guess = prompt("Where am I hiding?");
    if (guess === "under the bed") {
        playGame(guess);
        found = true;
    }
    else {
        playGame(guess);
    }
}
console.log("Game Over!");