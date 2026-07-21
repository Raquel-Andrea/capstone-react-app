//Variables to store the interval ID and the counter value
let intervalID;
let counter = 0;

// Function to start the counter
function startCounter() {
    //Only sstart the timer if one is not already running
    if (!intervalID) {

        //Increase the counter every second and display it in the console
        intervalID = setInterval(function() {
            counter++;
            console.log(counter);
        }, 1000);
    }
}
//Function to stop the counter
function stopCounter() {

    //Stop the timer
    clearInterval(intervalID);

    //Reset the interval ID so the counter can be started again
    intervalID = null;
}
//Get references to the Start and Stop buttons from the HTML
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

//Add click event listeners to the buttons
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);