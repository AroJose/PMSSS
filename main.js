// JavaScript for Landing Page and Sign-In Page

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Sign-In Page
document.addEventListener('DOMContentLoaded', function() {
    const generateOtpButton = document.getElementById('generate-otp');
    const otpSection = document.getElementById('otp-section');
    const signinForm = document.getElementById('signin-form');

    // Replace with your actual Aadhaar number and mobile number
    const actualAadhaar = '1234567890'; // Update with your actual Aadhaar number
    const actualMobile = '+917558176645'; // Your actual mobile number

    if (generateOtpButton && otpSection && signinForm) {
        generateOtpButton.addEventListener('click', () => {
            const aadhaarNumber = document.getElementById('aadhaar-number').value;

            if (aadhaarNumber === actualAadhaar) {
                // Simulate OTP generation
                const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
                console.log(`Generated OTP for Aadhaar ${aadhaarNumber}: ${otp}`);

                // Simulate sending OTP to the actual mobile number
                console.log(`Sending OTP ${otp} to ${actualMobile}`);

                // Store the generated OTP for verification
                sessionStorage.setItem('otp', otp);

                // Show OTP input section
                otpSection.style.display = 'block';
            } else {
                alert('Invalid Aadhaar number.');
            }
        });

        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const otp = document.getElementById('otp').value;

            // Retrieve the OTP from session storage
            const storedOtp = sessionStorage.getItem('otp');

            if (otp === storedOtp) {
                sessionStorage.removeItem('otp'); // Remove OTP after successful verification
                alert('OTP verified successfully!');
                // Redirect or proceed with login
            } else {
                alert('Invalid OTP.');
            }
        });
    }
});
