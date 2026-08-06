//================================
//Auto-graded Task 1 - Promises
//================================

fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
.then (function(response) {
    return response.json();
})      
.then(function(data) {
    console.log(data.name);
    console.log(data.weight);
    console.log(data.abilities[0].ability.name);
})

.catch(function(error) {
    console.log(error);
});


//================================
//Auto-graded Task 2 - Async/Await
//================================

async function getCatGif() {
    try {
        const response = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
        console.log(response.url);
    } catch (error) {
        console.log(error);
    }
}
getCatGif();