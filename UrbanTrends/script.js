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
  
  // Event listener to close the modal when the close button or outside the modal is clicked
  const modal = document.getElementById("shoeModal");
  //const closeBtn = document.getElementsByClassName("close")[0];
  
  //closeBtn.addEventListener("click", () => {
  //  modal.style.display = "none";
  //});
  
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
  document.getElementById("shoeModal").style.display = "none";
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
