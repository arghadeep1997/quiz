document.addEventListener("DOMContentLoaded", function () {
    let submitBtn = document.querySelector('#submitBtn');
    const msg = document.querySelector('#msg');
    const form = document.forms['submit-to-google-sheet'];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwimYQaeOFy6KrNRlFB5K4bk1bWw-EOm8w2_RWizIMEu8RxV_1mWXVldw6_Hgzu3YwGFA/exec';

    submitBtn.addEventListener('click', () => {
        // Check if required fields are filled before submitting
        if (validateForm()) {
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Submitted Successfully!!! Best Of luck";
                    msg.style.display = "block"; // Show the message
                    setTimeout(() => {
                        msg.style.display = "none"; // Hide the message after 3000ms (3 seconds)
                        msg.innerHTML = ""; // Clear the message content
                    }, 2000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        } else {
            alert("Please fill in all required fields.");
            console.log('Form validation failed');
        }
    });

    let QuizRadios = document.querySelectorAll('input[name="Quiz"]');
    let paymentInput = document.querySelector('input[name="payment"]');
    // let paymentCopyInput = document.querySelector('input[name="paymentCopy"]');
    
    // Function to validate the form
    function validateForm() {
        let isValid = true;

        // Check if name and phone are filled
        let nameInput = document.querySelector('input[name="name"]');
        let phoneInput = document.querySelector('input[name="phone"]');
        if (!nameInput.value.trim() || !phoneInput.value.trim()) {
            isValid = false;
        }

        // Check if either subject or payment copy is selected
        let selectedQuiz = Array.from(QuizRadios).some(radio => radio.checked);
        if (!selectedQuiz ) {
            isValid = false;
        }

        return isValid;
    }

    QuizRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'bangaliyana') {
                paymentInput.value = '50';
            } else if (radio.value === 'general') {
                paymentInput.value = '50'; // Change this value if needed
            } else if (radio.value === 'both') {
                paymentInput.value = '50';
            }
        });
    });
    
});




function toggleBoxes() {
    // console.log('Toggle button clicked!');
    document.getElementById('box1').classList.toggle('active');
    document.getElementById('box2').classList.toggle('active');
    document.getElementById('box3').classList.toggle('active');
}

// Add this in your script.js file or within a script tag in your HTML
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', function () {
        header.classList.toggle('show');
    });
});







 

 



