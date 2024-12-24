document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-js');
    const togglePasswordButton = document.querySelector('.toggle-password');
    const eyeSlashIcon = document.querySelector('.eye-slash');
    const eyeIcon = document.querySelector('.eye');
    const passwordInput = document.querySelector('.input-password');

    loginButton.addEventListener('click', function(event) {
        // Prevent form submission
        event.preventDefault();

        const emailInput = document.querySelector('.input-email').value;
        const passwordValue = passwordInput.value;
        let error = false;

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput === '' || !emailPattern.test(emailInput)) {
            document.querySelector('.error-msg-email').innerHTML = 'Enter a valid Email Address';
            error = true;
        } else {
            document.querySelector('.error-msg-email').innerHTML = '';
        }

        // Password Validation
        if (passwordValue === '' || passwordValue.length < 8) {
            document.querySelector('.error-msg-password').innerHTML = 'Password must be at least 8 characters long';
            document.querySelector('.input-password').classList.add('error-border');
            error = true;
        } else {
            document.querySelector('.error-msg-password').innerHTML = '';
            document.querySelector('.input-password').classList.remove('error-border');
        }

        if (!error) {
            console.log('Email:', emailInput);
            console.log('Password:', passwordValue);
            loginpageclick(); // Redirect to the login page if no errors
        }
    });

    // Clear error messages when user types
    const inputEmailField = document.querySelector('.input-email');
    const inputPasswordField = document.querySelector('.input-password');

    inputEmailField.addEventListener('input', function() {
        document.querySelector('.error-msg-email').innerHTML = '';
    });

    inputPasswordField.addEventListener('input', function() {
        document.querySelector('.error-msg-password').innerHTML = '';
    });

    // Display error messages and add red border on mouseout if input is invalid
    inputEmailField.addEventListener('mouseout', function() {
        const emailValue = inputEmailField.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (emailValue === '' || !emailPattern.test(emailValue)) {
            document.querySelector('.error-msg-email').innerHTML = 'Enter a valid Email Address';
        } else {
            document.querySelector('.error-msg-email').innerHTML = '';
        }
    });

    inputPasswordField.addEventListener('mouseout', function() {
        const passwordValue = inputPasswordField.value;

        if (passwordValue === '' || passwordValue.length < 8) {
            document.querySelector('.error-msg-password').innerHTML = 'Password must be at least 8 characters long';
        } else {
            document.querySelector('.error-msg-password').innerHTML = '';
        }
    });

    // Toggle password visibility
    togglePasswordButton.addEventListener('click', function(event) {
        event.preventDefault();
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        eyeSlashIcon.classList.toggle('d-none');
        eyeIcon.classList.toggle('d-none');
    });

    function loginpageclick() {
        window.location.href = "index.html"; // Replace with your desired URL
    }
});
