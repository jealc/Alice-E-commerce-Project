//JavaScript to handle sign-up pop-up

const openPopupButton = document.getElementById('user-button');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Get the necessary elements
const signUpButton = document.getElementById("user-button");
const closePopup = document.getElementById("close-popup");
const signupForm = document.getElementById("signup-form");
const userIcon = signUpButton.querySelector("i.fa-solid.fa-circle-user");

// Add a click event listener to the sign-up button
signUpButton.addEventListener("click", () => {
  // Display the popup when the button is clicked
  popup.style.display = "block";
});

// Add a click event listener to close the popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Add a submit event listener to the signup form
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission for this example

  // Get the user's input values
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;

  // Update the sign-up button text and icon
  signUpButton.innerHTML = `<i class="fa-solid fa-user"></i> ${fullName}`;

  // Display the user's name and email
  alert(`User: ${fullName}\nEmail: ${email}`);

  // Close the popup
  popup.style.display = "none";
});


// JavaScript to open the chat modal
const chatButton = document.getElementById("chat-button");
const chatModal = document.getElementById("chat-modal");
const closeChatButton = document.getElementById("close-chat");

chatButton.addEventListener("click", () => {
    chatModal.style.display = "block";
});

closeChatButton.addEventListener("click", () => {
    chatModal.style.display = "none";
});

// JavaScript to send and display messages
const chatArea = document.getElementById("chat-area");
const userMessageInput = document.getElementById("user-message");
const submitMessageButton = document.getElementById("submit-message");

submitMessageButton.addEventListener("click", () => {
    const userMessage = userMessageInput.value;
    if (userMessage.trim() !== "") {
        // Append the user's message to the chat area
        chatArea.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        // Clear the input field
        userMessageInput.value = "";

        // Simulate a response from customer care (you can replace this with actual messaging code)
        chatArea.innerHTML += `<p><strong>Customer Care:</strong> Thank you for your message. We'll get back to you shortly.</p>`;
    }
});


// Function to open the modal and populate it with data
function openModal(shoeName, shoePrice, shoeImageSrc) {
  const modal = document.getElementById("shoeModal");
  const modalShoeName = document.getElementById("modal-shoe-name");
  const modalShoePrice = document.getElementById("modal-shoe-price");
  const modalShoeImage = document.getElementById("modal-shoe-image");

  modal.style.display = "block";
  modalShoeName.textContent = shoeName;
  modalShoePrice.textContent = shoePrice;
  modalShoeImage.src = shoeImageSrc;
}

// Event listener to open the modal when the "View" button is clicked
const viewButtons = document.querySelectorAll(".view-button");
viewButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const shoeName = document.querySelectorAll(".shoe-name")[index].textContent;
    const shoePrice = document.querySelectorAll(".shoe-price")[index].textContent;
    const shoeImageSrc = document.querySelectorAll(".shoe-image")[index].src;
    openModal(shoeName, shoePrice, shoeImageSrc);
  });
});

// Event listener to close the modal when the outside of the modal is clicked
const modal = document.getElementById("shoeModal");
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Function to add an item to the cart
function addToCart() {
  const shoeName = document.getElementById("modal-shoe-name").textContent;
  const shoePrice = parseFloat(document.getElementById("modal-shoe-price").textContent.replace("KSH ", ""));
  const shoeSize = document.getElementById("size").value;
  const shoeColor = document.getElementById("color").value;
  const shoeQuantity = parseInt(document.getElementById("quantity").value);

  // Create a new item for the cart
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  cartItem.innerHTML = `
    <p><strong>${shoeName}</strong> - Size: ${shoeSize}, Color: ${shoeColor}, Quantity: ${shoeQuantity}</p>
    <p>KSH ${shoePrice * shoeQuantity}</p>
  `;

  // Add the item to the cart modal
  const cartItems = document.getElementById("cart-items");
  cartItems.appendChild(cartItem);

  // Calculate and update the total price
  const total = calculateTotal();
  document.getElementById("total-price").textContent = total.toFixed(2);

  // Close the product modal
  modal.style.display = "none";
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;

  cartItems.forEach((item) => {
    const priceString = item.querySelector("p:last-child").textContent;
    const price = parseFloat(priceString.replace("KSH ", ""));
    total += price;
  });

  return total;
}

// Event listener to open the cart modal when the cart button is clicked
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
cartButton.addEventListener("click", () => {
  cartModal.style.display = "block";
});

// Event listener to close the cart modal when the close button is clicked
const closeCartButton = document.getElementById("close-cart");
closeCartButton.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Event listener to handle the "Add to Cart" button click
const addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", () => {
  addToCart();
});

// Event listener to clear the cart when the "Clear Cart" button is clicked
const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", () => {
  const cartItems = document.getElementById("cart-items");
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  document.getElementById("total-price").textContent = "0.00";
});



const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const placeOrderButton = document.getElementById("place-order-button");

checkoutButton.addEventListener("click", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  if (cartItems.length === 0) {
    alert("Your cart is empty. Add items before checking out.");
  } else {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none"; // Close the cart modal when opening the checkout
    checkoutModal.style.display = "block";

    // Update the total in the checkout modal to match the cart total
    const total = calculateTotal();
    document.getElementById("checkout-total").textContent = total.toFixed(2);
  }
});

placeOrderButton.addEventListener("click", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  const total = calculateTotal();
  const deliveryLocation = document.getElementById("delivery-location").value;
  const phoneNumber = document.getElementById("phone-number").value;

  if (!deliveryLocation || !phoneNumber) {
    alert("Please provide delivery location and phone number.");
  } else {
    // Display confirmation message
    alert("Your order has been placed and will be delivered within three to five working days to the provided location. Payment will be done in cash upon delivery");

    // Create a receipt and add it to the "Orders box"
    const ordersBox = document.querySelector(".orders-box");
    const receipt = document.createElement("div");
    receipt.className = "order-receipt";
    receipt.innerHTML = `
      <p>Items:</p>
      <ul>
        ${[...cartItems].map((item) => `<li>${item.textContent}</li>`).join("")}
      </ul>
      <p>Total: KSH ${total.toFixed(2)}</p>
      <p>Delivery Location: ${deliveryLocation}</p>
      <p>Phone Number: ${phoneNumber}</p>
    `;
    ordersBox.appendChild(receipt);

    // Clear the cart
    const cartItemsContainer = document.getElementById("cart-items");
    while (cartItemsContainer.firstChild) {
      cartItemsContainer.removeChild(cartItemsContainer.firstChild);
    }
    document.getElementById("total-price").textContent = "0.00";
    checkoutModal.style.display = "none";
  }
});

closeCartButton.addEventListener("click", () => {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = "none";
});

function calculateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;

  cartItems.forEach((item) => {
    const priceString = item.querySelector("p:last-child").textContent;
    const price = parseFloat(priceString.replace("KSH ", ""));
    total += price;
  });

  return total;
}

// Get a reference to the "Received" button and the orders box
const receivedButton = document.querySelector('.received-button');
const ordersBox = document.querySelector('.orders-box');

// Add a click event listener to the "Received" button
receivedButton.addEventListener('click', () => {
  // Clear the content of the orders box
  ordersBox.innerHTML = '';

  // Create a thank you message element
  const thankYouMessage = document.createElement('div');
  thankYouMessage.textContent = 'Thank you for shopping with us. Please leave a review.';

  // Append the thank you message to the orders box
  ordersBox.appendChild(thankYouMessage);
});

// Get the "Show More" button and the hidden section
const showMoreButton = document.getElementById('show-more-button');
const hiddenSection = document.querySelector('.item-boxes.hidden');

// Add a click event listener to the "Show More" button
showMoreButton.addEventListener('click', function() {
  // Toggle the hidden class on the second section to show/hide it
  hiddenSection.classList.toggle('hidden');

  // Change the button text based on the section's visibility
  if (hiddenSection.classList.contains('hidden')) {
    showMoreButton.textContent = 'Show More';
  } else {
    showMoreButton.textContent = 'Show Less';
  }
});

document.getElementById('open-rate-review-modal').addEventListener('click', function() {
  document.getElementById('rate-review-modal').style.display = 'block';
});

document.getElementById('close-rate-review-button').addEventListener('click', function() {
  document.getElementById('rate-review-modal').style.display = 'none';
});

const stars = document.querySelectorAll('.rate-review-star');
stars.forEach(function(star) {
  star.addEventListener('click', function() {
      const rating = parseInt(star.getAttribute('data-rating'));
      stars.forEach(function(s, index) {
          if (index < rating) {
              s.innerHTML = '★';
              s.style.color = 'gold';
          } else {
              s.innerHTML = '☆';
              s.style.color = 'black';
          }
      });
  });
});

document.getElementById('submit-review').addEventListener('click', function() {
  const reviewText = document.getElementById('review-text').value;
  // Handle review submission here
  document.getElementById('ratings-and-reviews').innerHTML += `<p><strong>Rating:</strong> ${getRating()} stars<br><strong>Review:</strong> ${reviewText}</p>`;
});

function getRating() {
  for (let i = 0; i < stars.length; i++) {
      if (stars[i].style.color === 'gold') {
          return i + 1;
      }
  }
  return 0;
}
