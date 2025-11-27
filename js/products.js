// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Load products dynamically from backend
async function loadProducts() {
  try {
    const products = await API.products.getAll();
    console.log('Products loaded:', products);
    updateCartBadge();
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Update cart badge
function updateCartBadge() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  let badge = document.getElementById('cart-badge');
  
  if (!badge && cartCount > 0) {
    const cartLink = document.querySelector('a[href="#cart"]');
    if (cartLink) {
      badge = document.createElement('span');
      badge.id = 'cart-badge';
      badge.style.cssText = `
        background: red;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        margin-left: 5px;
      `;
      cartLink.appendChild(badge);
    }
  }
  
  if (badge) {
    badge.textContent = cartCount;
    badge.style.display = cartCount > 0 ? 'inline' : 'none';
  }
}

// Add to cart
function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  
  showCartNotification(productName);
}

// Show cart notification
function showCartNotification(productName) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: linear-gradient(90deg, rgb(3, 238, 238), rgb(230, 143, 20));
    color: white;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 15px;">
      <span style="font-size: 24px;">✓</span>
      <div>
        <div style="font-weight: 600; margin-bottom: 5px;">Added to Cart!</div>
        <div style="font-size: 14px;">${productName}</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Handle purchase button clicks
document.addEventListener('DOMContentLoaded', () => {
  console.log('Products.js loaded');
  
  const purchaseButtons = document.querySelectorAll('#pbut');
  console.log('Found purchase buttons:', purchaseButtons.length);
  
  purchaseButtons.forEach((button, index) => {
    console.log('Setting up button', index);
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log('Purchase button clicked!');
      
      const productCard = e.target.closest('.card3');
      if (!productCard) {
        console.error('Product card not found');
        alert('Error: Could not find product information');
        return;
      }
      
      const productName = productCard.querySelector('h2').textContent.trim();
      const productDesc = productCard.querySelector('h3').textContent;
      console.log('Product:', productName);
      
      // Check if user is logged in
      const token = API.getAuthToken();
      console.log('Auth token:', token ? 'Found' : 'Not found');
      
      if (!token) {
        if (confirm('Please login to purchase products. Go to login page?')) {
          window.location.href = 'login.html';
        }
        return;
      }
      
      // Get price based on product name
      const prices = {
        'EarBuds': 2999,
        'Mouse': 899,
        'Key Board': 3499,
        'webcam': 2499,
        'Mobile Cases': 599,
        'Mouse Pad': 399,
        'Head Phones': 4999,
        'Power Bank': 1999
      };
      
      const price = prices[productName] || 999;
      console.log('Price:', price);
      
      // Add to cart
      addToCart(productName, price);
      
      // Show purchase modal
      showPurchaseModal(productName, price, productDesc);
    });
  });
  
  // Load products on page load
  loadProducts();
});

// Show purchase modal
function showPurchaseModal(productName, price, description) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;
  
  const cartItems = cart.length;
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  modal.innerHTML = `
    <div style="background: white; padding: 40px; border-radius: 15px; max-width: 500px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
      <h2 style="color: #333; margin-bottom: 20px;">🛒 Added to Cart</h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
        <h3 style="color: #333; margin-bottom: 10px;">${productName}</h3>
        <p style="color: #666; margin-bottom: 10px;">${description}</p>
        <p style="color: rgb(216, 131, 45); font-size: 24px; font-weight: bold;">₹${price}</p>
      </div>
      
      <div style="background: #e8f8f8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span>Items in cart:</span>
          <strong>${cartItems}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 18px; color: rgb(3, 238, 238);">
          <span>Cart Total:</span>
          <strong>₹${cartTotal}</strong>
        </div>
      </div>
      
      <div style="display: flex; gap: 10px;">
        <button onclick="continueShopping()" style="
          flex: 1;
          padding: 12px;
          background: #666;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        ">Continue Shopping</button>
        <button onclick="viewCart()" style="
          flex: 1;
          padding: 12px;
          background: linear-gradient(90deg, rgb(3, 238, 238), rgb(230, 143, 20));
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        ">View Cart & Checkout</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Continue shopping
window.continueShopping = function() {
  const modal = document.querySelector('div[style*="position: fixed"]');
  if (modal) modal.remove();
};

// View cart
window.viewCart = function() {
  const modal = document.querySelector('div[style*="position: fixed"]');
  if (modal) modal.remove();
  
  showCartPage();
};

// Show cart page
function showCartPage() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  const cartModal = document.createElement('div');
  cartModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    overflow-y: auto;
    padding: 20px;
  `;
  
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const cartItemsHTML = cart.map((item, index) => `
    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h4 style="margin: 0 0 5px 0;">${item.name}</h4>
        <p style="margin: 0; color: #666;">₹${item.price} × ${item.quantity}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <button onclick="updateQuantity(${index}, -1)" style="padding: 5px 10px; background: #ddd; border: none; border-radius: 5px; cursor: pointer;">-</button>
        <span style="font-weight: bold;">${item.quantity}</span>
        <button onclick="updateQuantity(${index}, 1)" style="padding: 5px 10px; background: #ddd; border: none; border-radius: 5px; cursor: pointer;">+</button>
        <button onclick="removeFromCart(${index})" style="padding: 5px 10px; background: #f44; color: white; border: none; border-radius: 5px; cursor: pointer;">Remove</button>
      </div>
    </div>
  `).join('');
  
  cartModal.innerHTML = `
    <div style="background: white; padding: 40px; border-radius: 15px; max-width: 700px; width: 100%; max-height: 90vh; overflow-y: auto;">
      <h2 style="color: #333; margin-bottom: 20px;">🛒 Your Shopping Cart</h2>
      
      <div style="margin-bottom: 20px;">
        ${cartItemsHTML}
      </div>
      
      <div style="background: linear-gradient(90deg, rgb(3, 238, 238), rgb(230, 143, 20)); padding: 20px; border-radius: 10px; color: white; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-size: 24px; font-weight: bold;">
          <span>Total:</span>
          <span>₹${cartTotal}</span>
        </div>
      </div>
      
      <div style="display: flex; gap: 10px;">
        <button onclick="closeCart()" style="
          flex: 1;
          padding: 15px;
          background: #666;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        ">Continue Shopping</button>
        <button onclick="checkout()" style="
          flex: 1;
          padding: 15px;
          background: linear-gradient(90deg, rgb(3, 238, 238), rgb(230, 143, 20));
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        ">Proceed to Checkout</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(cartModal);
}

// Update quantity
window.updateQuantity = function(index, change) {
  cart[index].quantity += change;
  
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  
  // Refresh cart display
  const modal = document.querySelector('div[style*="position: fixed"]');
  if (modal) modal.remove();
  showCartPage();
};

// Remove from cart
window.removeFromCart = function(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  
  // Refresh cart display
  const modal = document.querySelector('div[style*="position: fixed"]');
  if (modal) modal.remove();
  
  if (cart.length > 0) {
    showCartPage();
  } else {
    alert('Your cart is now empty!');
  }
};

// Close cart
window.closeCart = function() {
  const modal = document.querySelector('div[style*="position: fixed"]');
  if (modal) modal.remove();
};

// Checkout
window.checkout = async function() {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user) {
    alert('Please login to checkout');
    window.location.href = 'login.html';
    return;
  }
  
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  try {
    // Create order
    const orderData = {
      products: cart.map(item => ({
        product: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: cartTotal,
      shippingAddress: {
        street: 'To be provided',
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India'
      }
    };
    
    const response = await API.orders.create(orderData);
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    // Close modal
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) modal.remove();
    
    // Show success
    alert(`🎉 Order placed successfully!\n\nOrder Total: ₹${cartTotal}\n\nThank you for shopping with Trustech!`);
    
  } catch (error) {
    alert('Error placing order: ' + error.message);
  }
};

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
