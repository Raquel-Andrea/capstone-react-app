let translator = new Map();

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

let word = prompt(" Enter an English word to translate:");
word = word.toLowerCase();
if (translator.has(word)) {
    alert("Translation: " +translator.get(word));}
else{
    alert("Sorry, that word is not in the dictionary.");
}