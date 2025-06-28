// script.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Include EmailJS SDK
(function () {
  emailjs.init('96U1EnA_8LsSvgwqN'); // Replace with your EmailJS public key
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.send('service_u9lsmgp', 'template_kpdwzwf', {
    from_name: document.getElementById('name').value,
    reply_to: document.getElementById('email').value,
    message: document.getElementById('message').value,
  })
  .then(function () {
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('contact-form').reset();
  }, function (error) {
    alert('Failed to send message. Please try again later.');
    console.error('EmailJS Error:', error);
  });
});

    // Simple form validation
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate a successful form submission
    form.reset();
    successMessage.style.display = 'block';

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  });
});
