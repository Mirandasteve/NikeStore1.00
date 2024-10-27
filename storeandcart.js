// --- Add to Cart Functionality (for store page) ---
function addToCart(id, name, price, image) {
    // Retrieve existing cart items from localStorage or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;  // If item exists, increment its quantity
    } else {
        // Add new item to cart with quantity 1
        cart.push({ id, name, price, image, quantity: 1 });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

// --- Render Cart Functionality (for cart page) ---
function renderCart() {
    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    
    // Clear existing items in the container
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    // Loop through each item in the cart and render
    cart.forEach(item => {
        // Create cart item element
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        
        // Populate cart item details
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        
        // Add the cart item element to the container
        cartItemsContainer.appendChild(cartItem);
        
        // Update the total price
        totalPrice += item.price * item.quantity;
    });

    // Display total price
    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}

// --- Remove Item from Cart ---
function removeFromCart(itemId) {
    // Retrieve cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Filter out the item to remove
    cart = cart.filter(item => item.id !== itemId);
    
    // Update localStorage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Re-render the cart
    renderCart();
}

// --- Load Cart on Page Load (only on cart page) ---
if (document.getElementById("cart-items")) {
    renderCart();
}
