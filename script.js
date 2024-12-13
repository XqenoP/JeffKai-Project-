document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
    } else {
        alert("Please fill out all fields.");
    }
});
