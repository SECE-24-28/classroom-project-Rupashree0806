let change = document.querySelector('#hi');
let button = document.getElementById('btn');
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let list = document.getElementById("list");
let total = document.getElementById("total");

let price = 50;   // ✅ Price per item
let totalPrice = 0;

// Change text
button.addEventListener("click", () => {
    change.innerHTML = "Welcome";
    change.style.color = "red";
});

// Add new item
add.addEventListener("click", () => {
    let newElement = document.createElement("li");
    newElement.innerHTML = "New item added - ₹" + price;
    list.appendChild(newElement);

    totalPrice += price;
    total.innerHTML = totalPrice;
});

// Remove last item
remove.addEventListener("click", () => {
    let lastItem = list.lastElementChild;
    if (lastItem) {
        lastItem.remove();

        totalPrice -= price;
        total.innerHTML = totalPrice;
    }
});
