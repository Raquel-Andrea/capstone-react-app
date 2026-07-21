//create an array containing a list of words
let words = [
    "banana",
    "orange",
    "planet",
    "apple",
    "dog",
    "school",
    "house",
    "table",
    "cat",
    "friend"
];
// Callback function that checks whether a word has exactly six letters
function hasSixLetters(word) {
    return word.length === 6;
}
//Custom filter function that returns only the elements
//that meets the condition specified by the callback function
function myFilterFunction(array, callback) {
    let result = [];
    //Loop through each element in the array
    for (let i = 0; i < array.length; i++) {

        //Add the element to the result array if it passes the callback test
        if (callback(array[i])) {
            result.push(array[i])};
        }
        //Return the filtered array
    return result;
}
//Call the custom filter function using the words array
//and the hasSixletters callback function
let filteredWords = myFilterFunction(words, hasSixLetters);

//Display the filtered words in the console
console.log(filteredWords);