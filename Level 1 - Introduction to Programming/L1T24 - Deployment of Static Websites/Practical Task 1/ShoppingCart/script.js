//Shopping cart array
let cart =  JSON.parse(localStorage.getItem("cart")) || [];

//Display cart when page opens
displayCart();

//Add Item
function addToCart(name, price) {
    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

//Display Cart
function displayCart(){
    let cartItems = document.getElementById("cartItems");
    let total = 0;
    cartItems.innerHTML = "";
    if(cart.length === 0){
        cartItems.innerHTML = "<li>Your cart is empty.</li>";
    }
    else{
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item.name + " - R" + item.price;
            cartItems.appendChild(li);
            total += item.price;
        });
    }
    document.getElementById("totalPrice").textContent = total;
}

//Clear Cart
function clearCart(){
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
    deleteCookie("username");
}

//Session Storage(Font)
let fontSelector = document.getElementById("fontSelector");
fontSelector.addEventListener("change", function(){
    sessionStorage.setItem("font", this.value);
    document.body.style.fontFamily = this.value;
});
let savedFont = sessionStorage.getItem("font");
if(savedFont){
    document.body.style.fontFamily = savedFont;
    fontSelector.value = savedFont;
}

//Cookies
function setCookie(name, value, days){
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires = "expires =" +date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires +";path=/";
}
function getCookie(name){
    let cookieName = name+ "=";
    let cookies = document.cookie.split(";");
    for(let i=0; i<cookies.length; i++){
        let c = cookies [i].trim();
        if(c.indexOf(cookieName) == 0){
            return c.substring(cookieName.length,c.length);
        }
    }
    return "";
}
function deleteCookie(name){
    document.cookie = name + "=; expires = Thu, 01 Jan 1970 00:00:00 UTC;, path =/;";
}
let username = getCookie("username");
if(username === ""){
    username = prompt ("Enter your name:");
    if(username){
        setCookie("username", username, 7);
    }
}
document.getElementById("welcomeMessage").innerHTML = "Welcome back, "+username + "!";

//Cache Message
document.getElementById("cacheMessage").innerHTML = "Product images and styles are cached by your browser for faster loading.";