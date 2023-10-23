// JavaScript for handling the cart modal

document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.getElementById("cart-button");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.getElementById("close-modal");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-button");

    const cart = []; // Array to store items in the cart

    // Function to add an item to the cart
    function addItemToCart(item) {
        cart.push(item);
        updateCartDisplay();
    }

    // Function to remove an item from the cart
    function removeItemFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }

    // Function to update the cart display
    function updateCartDisplay() {
        cartItems.innerHTML = ""; // Clear the cart display

        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `${item.name} - $${item.price} <button data-index="${index}">Remove</button>`;
            cartItems.appendChild(cartItem);

            total += item.price;

            // Add event listener to remove button
            cartItem.querySelector("button").addEventListener("click", function (event) {
                const index = event.target.getAttribute("data-index");
                removeItemFromCart(index);
            });
        });

        totalPrice.textContent = total.toFixed(2);
    }

    // Event listener to open the cart modal
    cartButton.addEventListener("click", function () {
        cartModal.style.display = "block";
        updateCartDisplay();
    });

    // Event listener to close the cart modal
    closeModal.addEventListener("click", function () {
        cartModal.style.display = "none";
    });

    // Event listener for the checkout button (you can implement your checkout logic)
    checkoutButton.addEventListener("click", function () {
        // Implement your checkout logic here
        // This is where you would handle the payment process.
    });
});
