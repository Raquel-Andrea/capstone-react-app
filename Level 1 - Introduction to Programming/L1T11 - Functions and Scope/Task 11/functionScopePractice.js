function sumArray(numbers){
    if(numbers.length === 0){
        return 0;
    }
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total+= numbers[i];
    }
    return total;
}
function variableScopeTest() {
    let message = "I am inside the function";
    console.log(message);
}
function outerFunction() {
    let name = "Raquel";
    function innerFunction() {
        console.log(name)
    }
    innerFunction();
}
let colour = "Blue";

function demonstrateGlobalVsLocal() {
    let colour = "Red";
    console.log(colour);
}
let numbers = [10, 20, 30, 40];
console.log ("Sum:", sumArray(numbers));
console.log("Empty array:", sumArray([]));
variableScopeTest();
outerFunction();
console.log("Global colour:", colour);
demonstrateGlobalVsLocal();