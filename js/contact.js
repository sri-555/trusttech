// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      try {
        // Disable button and show loading
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Get form data
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          message: document.getElementById('message').value
        };
        
        // Submit to backend
        const response = await API.contact.submit(formData);
        
        // Show success message
        alert(response.message || 'Thank you for contacting us!');
        
        // Reset form
        contactForm.reset();
        
      } catch (error) {
        alert('Error: ' + error.message);
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }
});
