document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Grab the form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (you would connect to a backend here)
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = "Thank you for contacting us, we will get back to you soon!";
    statusMessage.style.color = 'green';

    // Clear the form after submission
    document.getElementById('contact-form').reset();
});
