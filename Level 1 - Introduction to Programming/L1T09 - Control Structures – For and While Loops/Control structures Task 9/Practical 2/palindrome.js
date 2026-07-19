let word = prompt("Enter a word:");
let reverseWord ="";
let i = word.length - 1;
while (i >= 0) {
    reverseWord = reverseWord + word[i];
    i--;
}
if (word === reverseWord) {
    alert(word + " is a palindome.");
}
else{
    alert(word + " is not a palindome.");
}
