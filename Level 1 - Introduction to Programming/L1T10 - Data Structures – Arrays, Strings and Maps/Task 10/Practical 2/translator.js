// Create a Map to store English words and their Afrikaans translations
let translator = new Map();

// Add English and Afrikaans word pairs to the dictionary
translator.set("hello", "hallo");
translator.set("goodbye", "totsiens");
translator.set("dog", "hond");
translator.set("cat", "kat");
translator.set("house", "huis");
translator.set("car", "kar");
translator.set("book", "boek");
translator.set("school", "skool");
translator.set("water", "water");
translator.set("food", "kos");

//Ask the user to enter an English word
let word = prompt(" Enter an English word to translate:");

//Convert the user's input to lowercase so the search is not case-sensitive
word = word.toLowerCase();

//Check whether the word exists in the dictionary
if (translator.has(word)) {
    //Display the Afrikaans translation
    alert("Translation: " +translator.get(word));}
else{
    //Inform the user if the word cannot be found
    alert("Sorry, that word is not in the dictionary.");
}