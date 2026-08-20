const ingredientInput = document.getElementById("ingredientInput");
const orderButton = document.getElementById("orderButton");
const orderMessage = document.getElementById("orderMessage");
const ordersList = document.getElementById("ordersList");
const orderNumberInput = document.getElementById("orderNumberInput");
const completeButton = document.getElementById("completeButton");
const completeMessage = document.getElementById("completeMessage");

function getOrders() {
    const storedOrders = sessionStorage.getItem("orders");

    if (storedOrders) {
        return JSON.parse(storedOrders);
    }

    return [];
}

function saveOrders(orders) {
    sessionStorage.setItem("orders", JSON.stringify(orders));
}

function getNextOrderNumber() {
    const lastNumber = sessionStorage.getItem("lastOrderNumber");

    if (lastNumber) {
        return Number(lastNumber) + 1;
    }

    return 1;
}

function formatIngredient(ingredient) {
    return ingredient
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");
}

async function takeOrder() {
    const ingredient = ingredientInput.value.trim();

    if (ingredient === "") {
        orderMessage.textContent = "Please enter an ingredient.";
        return;
    }

    const formattedIngredient = formatIngredient(ingredient);

    const url =
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${formattedIngredient}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to contact the meal service.");
        }

        const data = await response.json();

        if (!data.meals || data.meals.length === 0) {
            orderMessage.textContent =
                "No meals were found. Please try another ingredient.";
            return;
        }

        // Select a random meal from the API response
        let randomIndex = Math.floor(
            Math.random() * data.meals.length
        );

        const previousMeal = sessionStorage.getItem("lastMeal");

        if (
            data.meals.length > 1 &&
            data.meals[randomIndex].idMeal === previousMeal
        ) {
            randomIndex = (randomIndex + 1) % data.meals.length;
        }

        const meal = data.meals[randomIndex];

        sessionStorage.setItem(
            "lastMeal",
            meal.idMeal
        );

        const orderNumber = getNextOrderNumber();

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

function displayOrders() {
    const orders = getOrders();

    const incompleteOrders =
        orders.filter(order => !order.completed);

    ordersList.innerHTML = "";

    if (incompleteOrders.length === 0) {
        const emptyMessage = document.createElement("p");

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

        const image =
            document.createElement("img");

        image.classList.add("order-image");

        image.src = order.image;
        image.alt = order.description;
        image.loading = "lazy";

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

orderButton.addEventListener(
    "click",
    takeOrder
);

completeButton.addEventListener(
    "click",
    completeOrder
);

ingredientInput.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            takeOrder();
        }
    }
);

orderNumberInput.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            completeOrder();
        }
    }
);

displayOrders();