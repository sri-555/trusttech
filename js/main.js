// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
  checkUserLogin();
  setupFeatureButtons();
  setupUserProfile();
});

// Check user login status
function checkUserLogin() {
  const token = API.getAuthToken();
  const loginLink = document.getElementById('login-link');
  const userProfile = document.getElementById('user-profile');
  const userName = document.getElementById('user-name');

  if (token) {
    // User is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      loginLink.style.display = 'none';
      userProfile.style.display = 'inline-block';
      userName.textContent = user.name;
    }
  } else {
    // User is not logged in
    loginLink.style.display = 'inline-block';
    userProfile.style.display = 'none';
  }
}

// Setup user profile dropdown
function setupUserProfile() {
  const userProfile = document.getElementById('user-profile');
  
  if (userProfile) {
    userProfile.addEventListener('click', (e) => {
      e.preventDefault();
      
      const dropdown = document.createElement('div');
      dropdown.style.cssText = `
        position: absolute;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 10px;
        margin-top: 10px;
        z-index: 1000;
      `;
      
      dropdown.innerHTML = `
        <div style="padding: 10px; cursor: pointer; border-radius: 5px;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='white'" onclick="viewOrders()">&#128230; My Orders</div>
        <div style="padding: 10px; cursor: pointer; border-radius: 5px; color: #d32f2f;" onmouseover="this.style.background='#ffebee'" onmouseout="this.style.background='white'" onclick="logout()">&#128682; Logout</div>
      `;
      
      // Remove existing dropdown if any
      const existingDropdown = document.querySelector('.user-dropdown');
      if (existingDropdown) {
        existingDropdown.remove();
      }
      
      dropdown.className = 'user-dropdown';
      userProfile.parentElement.style.position = 'relative';
      userProfile.parentElement.appendChild(dropdown);
      
      // Close dropdown when clicking outside
      setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
          if (!dropdown.contains(e.target) && e.target !== userProfile) {
            dropdown.remove();
            document.removeEventListener('click', closeDropdown);
          }
        });
      }, 100);
    });
  }
}

// Logout function
window.logout = function() {
  API.auth.logout();
  alert('Logged out successfully!');
  window.location.reload();
};

// View orders function
window.viewOrders = function() {
  alert('Orders page coming soon!');
  // You can create an orders.html page later
};

// Setup feature buttons
function setupFeatureButtons() {
  const featureButtons = document.querySelectorAll('.feature-btn');
  
  featureButtons.forEach(button => {
    button.addEventListener('click', () => {
      const feature = button.dataset.feature;
      
      const featureInfo = {
        categories: {
          title: 'Product Categories',
          content: 'Browse our extensive collection organized by device type and accessory category. Use filters to find exactly what you need - from phone cases to laptop stands, all compatible with major brands like Apple, Samsung, Dell, and more.'
        },
        analytics: {
          title: 'Analytics Dashboard',
          content: 'For business customers: Track your purchase history, monitor spending patterns, and get insights on popular products. Our analytics help you make informed decisions about bulk orders and inventory management.'
        },
        warranty: {
          title: 'Warranty Information',
          content: 'All our products come with a manufacturer warranty. Most accessories include 6-12 months warranty coverage. Easy returns within 30 days if you\'re not satisfied. We also offer extended warranty options for premium products.'
        }
      };
      
      const info = featureInfo[feature];
      if (info) {
        showFeatureModal(info.title, info.content);
      }
    });
  });
}

// Show feature modal
function showFeatureModal(title, content) {
  // Create modal
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
  
  modal.innerHTML = `
    <div style="background: white; padding: 40px; border-radius: 15px; max-width: 600px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
      <h2 style="color: #333; margin-bottom: 20px;">${title}</h2>
      <p style="color: #666; line-height: 1.8; font-size: 16px;">${content}</p>
      <button onclick="this.closest('div').parentElement.remove()" style="
        margin-top: 30px;
        padding: 12px 30px;
        background: linear-gradient(90deg, rgb(3, 238, 238), rgb(230, 143, 20));
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
      ">Got it!</button>
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
