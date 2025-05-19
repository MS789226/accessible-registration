document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; 

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessages.innerHTML = '<p style="color: red;">Passwords do not match.</p>';
    }
});
