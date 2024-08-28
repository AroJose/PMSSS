// JavaScript for form validation on login pages
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    const errorMessages = form.querySelectorAll('.error-message');

    // Clear previous error messages
    errorMessages.forEach(msg => msg.textContent = '');

    inputs.forEach(input => {
        if (input.type === 'text' && input.value.trim() === '') {
            input.classList.add('error');
            let errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.textContent = 'This field is required';
            }
            isValid = false;
        } else if (input.type === 'password' && input.value.length < 6) {
            input.classList.add('error');
            let errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.textContent = 'Password must be at least 6 characters long';
            }
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForms = document.querySelectorAll('form');

    loginForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(form)) {
                form.querySelector('.success-message').textContent = 'Login successful';
                // Here you can handle the actual form submission
                console.log('Form is valid');
            } else {
                form.querySelector('.success-message').textContent = '';
                console.log('Form is invalid');
            }
        });
    });
});
