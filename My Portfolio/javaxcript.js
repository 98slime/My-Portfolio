document.getElementById('profile-photo').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
  });
  
  document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to submit this form?')) {
      // Add form submission logic here
      alert('Form submitted!');
    }
  });