let number = prompt("Enter a number with at least three degits:");
let digits = number.split("");
for(let i = 0; i < digits.length; i++) {

    if(i===0){
        let temp = digits[1];
        digits[1]= digits[digits.length - 1];
        digits[digits.length - 1] = temp;
    }
}

let newNumber = digits.join("");
alert("Original number: " + number);
alert("New number: " + newNumber);
