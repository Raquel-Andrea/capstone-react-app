const ingredientInput = document.getElementById("ingredientInput");

const orderButton = document.getElementById("orderButton");

const orderMessage = document.getElementById("orderMessage");

const ordersList = document.getElementById("ordersList");

const orderNumberInput = document.getElementById("orderNumberInput");

const completeButton = document.getElementById("completeButton");

const completeMessage = document.getElementById("completeMessage");


// Get saved orders

function getOrders() {
    const storedOrders = sessionStorage.getItem("orders");

    if (storedOrders) {
        return JSON.parse(storedOrders);
    }

    return [];
}


// Save orders

function saveOrders(orders) {
    sessionStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );
}


// Get the next order number

function getNextOrderNumber() {
    const lastNumber = sessionStorage.getItem("lastOrderNumber");

    if (lastNumber) {
        return Number(lastNumber) + 1;
    }

    return 1;
}


// Format the ingredient for the API

function formatIngredient(ingredient) {
    return ingredient
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");
}


// Take an order

async function takeOrder() {

    const ingredient = ingredientInput.value.trim();

    if (ingredient === "") {

        orderMessage.textContent =
            "Please enter an ingredient.";

        return;
    }

    const formattedIngredient =
        formatIngredient(ingredient);

    const url =
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${formattedIngredient}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to contact the meal service.");
        }

        const data = await response.json();

        if (!data.meals) {

            orderMessage.textContent =
                "No meals were found. Please try another ingredient.";

            return;
        }

        const meal = data.meals[0];

        const orderNumber =
            getNextOrderNumber();

        const order = {
            description: meal.strMeal,
            image: meal.strMealThumb,
            orderNumber: orderNumber,
            completed: false
        };

        const orders = getOrders();

        orders.push(order);

        saveOrders(orders);

        sessionStorage.setItem(
            "lastOrderNumber",
            orderNumber
        );

        orderMessage.textContent =
            `Order #${orderNumber}: ${meal.strMeal}`;

        ingredientInput.value = "";

        displayOrders();

    } catch (error) {

        orderMessage.textContent =
            "Something went wrong. Please try again.";

        console.error(error);
    }
}


// Display incomplete orders

function displayOrders() {

    const orders = getOrders();

    const incompleteOrders =
        orders.filter(order => !order.completed);

    ordersList.innerHTML = "";


    if (incompleteOrders.length === 0) {

        const emptyMessage =
            document.createElement("p");

        emptyMessage.textContent =
            "No incomplete orders right now";

        emptyMessage.classList.add("empty-orders");

        ordersList.appendChild(emptyMessage);

        return;
    }


    incompleteOrders.forEach(order => {

        const orderElement =
            document.createElement("article");

        orderElement.classList.add("order");


        // Food image

        const image =
            document.createElement("img");

        image.classList.add("order-image");

        image.src = order.image;

        image.alt = order.description;

        image.loading = "lazy";


        // Order information

        const information =
            document.createElement("div");

        information.classList.add("order-info");


        const number =
            document.createElement("p");

        number.textContent =
            `Order #${order.orderNumber}`;


        const mealName =
            document.createElement("h3");

        mealName.textContent =
            order.description;


        information.appendChild(number);

        information.appendChild(mealName);


        orderElement.appendChild(image);

        orderElement.appendChild(information);


        ordersList.appendChild(orderElement);
    });
}


// Complete an order

function completeOrder() {

    const orderNumber =
        orderNumberInput.value.trim();

    if (orderNumber === "") {

        completeMessage.textContent =
            "Please enter an order number.";

        return;
    }


    const orders = getOrders();

    const order =
        orders.find(
            item =>
                item.orderNumber === Number(orderNumber)
        );


    if (!order) {

        completeMessage.textContent =
            "Order not found. Please check the order number.";

        return;
    }


    if (order.completed) {

        completeMessage.textContent =
            "That order has already been completed.";

        return;
    }


    order.completed = true;

    saveOrders(orders);


    completeMessage.textContent =
        `Order #${orderNumber} has been completed.`;

    orderNumberInput.value = "";

    displayOrders();
}


// Take Order button

orderButton.addEventListener(
    "click",
    takeOrder
);


// Complete Order button

completeButton.addEventListener(
    "click",
    completeOrder
);


// Allow Enter key for taking an order

ingredientInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            takeOrder();
        }

    }
);


// Allow Enter key for completing an order

orderNumberInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            completeOrder();
        }

    }
);


// Display orders when page loads

displayOrders();