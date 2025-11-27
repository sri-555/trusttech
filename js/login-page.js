// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const messageContainer = document.getElementById('message-container');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    
    // Update active tab button
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Show corresponding form
    if (tab === 'login') {
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    } else {
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    }
    
    // Clear messages
    messageContainer.innerHTML = '';
  });
});

// Show message
function showMessage(message, type = 'error') {
  messageContainer.innerHTML = `<div class="${type}-message">${message}</div>`;
  setTimeout(() => {
    messageContainer.innerHTML = '';
  }, 5000);
}

// Login form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = loginForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  try {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const response = await API.auth.login({ email, password });
    
    showMessage(`Welcome back, ${response.user.name}!`, 'success');
    
    // Redirect to home page after 1 second
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showMessage(error.message || 'Login failed. Please check your credentials.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = signupForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  try {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating account...';
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    
    if (password.length < 6) {
      showMessage('Password must be at least 6 characters long');
      return;
    }
    
    const response = await API.auth.register({ name, email, phone, password });
    
    showMessage(`Welcome, ${response.user.name}! Account created successfully.`, 'success');
    
    // Redirect to home page after 1 second
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
    
  } catch (error) {
    showMessage(error.message || 'Registration failed. Please try again.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});
