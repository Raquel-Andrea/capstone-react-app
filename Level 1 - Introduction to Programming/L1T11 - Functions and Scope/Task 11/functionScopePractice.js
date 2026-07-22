// Function to calculate the sum of an array of numbers
function sumArray(numbers){
    // Check if the array is empty
    if(numbers.length === 0){
        return 0;
    }
    let total = 0;
    // Loop through the array and add each number to the total
    for (let i = 0; i < numbers.length; i++){
        total+= numbers[i];
    }
    // Return the total sum
    return total;
}
// Function to demonstrate variable scope
function variableScopeTest() {
    // This variable is local to the function
    let message = "I am inside the function";
    // This works because 'message' is inside the function's scope
    console.log(message);
}
// Function to demonstrate closure
function outerFunction() {
    let name = "Raquel";
    function innerFunction() {
        // This inner function has access to the outer function's variable
        console.log(name)
    }
    innerFunction();
}
// Global variable
let colour = "Blue";
// Function to demonstrate the difference between global and local variables
function demonstrateGlobalVsLocal() {
    let colour = "Red";
    // This will log the local variable 'colour' which is "Red"
    console.log(colour);
}
// Test the SumArray function with an array of numbers and an empty array
let numbers = [10, 20, 30, 40];

//Display the sum of the numbers in the array
console.log("Sum of array:", sumArray(numbers));
// Test the SumArray function with an empty array
console.log("Empty array:", sumArray([]));
// Call the function to demonstrate variable scope
variableScopeTest();
try {
    // Attempt to access the 'message' variable outside its scope
   // only works inside the function, so this will throw a ReferenceError
    console.log(message);
}catch (error) {
    // Catch the ReferenceError and log the error message
    console.log("ReferenceError:", error.message);
}
// Call the outerFunction to demonstrate closure
outerFunction();
// Log the global variable 'colour' to show its value
console.log("Global colour:", colour);
// Call the function to demonstrate the difference between global and local variables
demonstrateGlobalVsLocal();