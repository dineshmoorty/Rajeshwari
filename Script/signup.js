document.addEventListener('DOMContentLoaded' , function() {
  const signupButton = document.querySelector('.signup-js');
  const togglePasswordButton = document.querySelector('.toggle-password');
  const eyeSlashIcon = document.querySelector('.eye-slash');
  const eyeIcon = document.querySelector('.eye');
  const passwordInputField = document.querySelector('.input-password');
  
  const togglePasswordButton2 = document.querySelector('.eye-toggle-2');
  const eyeSlashIcon2 = document.querySelector('.eye-slash-2');
  const eyeIcon2 = document.querySelector('.eye-2');
  const retypePasswordField = document.querySelector('.input-retype-password');
  const tickBox = document.querySelector('#terms-checkbox');

  signupButton.addEventListener('click', function(event) {
      // Prevent form submission
      event.preventDefault();
      let error = false;

      // Email Input
      const emailInput = document.querySelector('.input-email').value;

      // Email Validation
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailInput === '' || !emailPattern.test(emailInput)) {
          document.querySelector('.error-msg-email').innerHTML = 'Enter Valid Email Address';
          error = true;
      } else {
          document.querySelector('.error-msg-email').innerHTML = '';
      }

      // Password Input
      const passwordInput = passwordInputField.value;

      // Password Validation
      if (passwordInput === '' || passwordInput.length < 8) {
          document.querySelector('.error-msg-password').innerHTML = 'Password must be 8 Characters long';
          error = true;
      } else {
          document.querySelector('.error-msg-password').innerHTML = '';
      }

      // Retype Password
      const retypePassword = retypePasswordField.value;

      // Retype Password Validation
      if (retypePassword === '' || retypePassword.length < 8) {
          document.querySelector('.error-msg-retype-password').innerHTML = 'Password must be 8 Characters long';
          error = true;
      } else if (passwordInput !== retypePassword) {
          document.querySelector('.error-msg-retype-password').innerHTML = 'Passwords should be the same';
          error = true;
      } else {
          document.querySelector('.error-msg-retype-password').innerHTML = '';
      }
      if (!tickBox.checked) {
        document.querySelector('.error-msg-checkbox').innerHTML = 'You must accept the terms and conditions';
        error = true;
      }
      else {
        document.querySelector('.error-msg-checkbox').innerHTML = '';
      }
      if (!error) {
          console.log('Email:', emailInput);
          console.log('Password:', passwordInput);
          console.log('Retype Password:', retypePassword);
          loginpageclick(); // redirect to Index page
          // Add your signup logic here, like making an API call
      }
  });

  // Clear the values of input fields
  const emailInputField = document.querySelector('.input-email');
  emailInputField.addEventListener('input', function() {
      document.querySelector('.error-msg-email').innerHTML = '';
  });
  passwordInputField.addEventListener('input', function() {
      document.querySelector('.error-msg-password').innerHTML = '';
  });
  retypePasswordField.addEventListener('input', function() {
      document.querySelector('.error-msg-retype-password').innerHTML = '';
  });

  // Mouse out when error is display
  emailInputField.addEventListener('mouseout', function() {
      const emailInputValue = emailInputField.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (emailInputValue === '' || !emailPattern.test(emailInputValue)) {
          document.querySelector('.error-msg-email').innerHTML = 'Enter Valid Email Address';
      } else {
          document.querySelector('.error-msg-email').innerHTML = '';
      }
  });

  passwordInputField.addEventListener('mouseout', function() {
      const passwordInputValue = passwordInputField.value;

      if (passwordInputValue === '' || passwordInputValue.length < 8) {
          document.querySelector('.error-msg-password').innerHTML = 'Password must be 8 Characters long';
      } else {
          document.querySelector('.error-msg-password').innerHTML = '';
      }
  });

  retypePasswordField.addEventListener('mouseout', function() {
      const retypepasswordInputValue = retypePasswordField.value;

      if (retypepasswordInputValue === '' || retypepasswordInputValue.length < 8) {
          document.querySelector('.error-msg-retype-password').innerHTML = 'Password must be 8 Characters long';
      } else if (retypepasswordInputValue !== passwordInputField.value) {
          document.querySelector('.error-msg-retype-password').innerHTML = 'Passwords should be the same';
      } else {
          document.querySelector('.error-msg-retype-password').innerHTML = '';
      }
  });

  // Toggle password visibility
  togglePasswordButton.addEventListener('click', function(event) {
      event.preventDefault();
      const type = passwordInputField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInputField.setAttribute('type', type);
      eyeSlashIcon.classList.toggle('d-none');
      eyeIcon.classList.toggle('d-none');
  });
  togglePasswordButton2.addEventListener('click', function(event) {
    event.preventDefault();
    const type = retypePasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    retypePasswordField.setAttribute('type', type);
    eyeSlashIcon2.classList.toggle('d-none');
    eyeIcon2.classList.toggle('d-none');
});
function loginpageclick() {
    window.location.href = "index.html"; // Replace with your desired URL
}
});
