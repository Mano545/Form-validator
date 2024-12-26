
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name is required';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').innerText = 'Email is required';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Invalid email format';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (phone === '') {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Phone is required';
    } else if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Invalid phone format';
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    const dateInput = document.getElementById('date').value;
    const dateError = document.getElementById('dateError');
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
    if (dateInput === '') {
        isValid = false;
        dateError.innerText = 'Date of birth is required';
    } else if (!datePattern.test(dateInput)) {
        isValid = false;
        dateError.innerText = 'Invalid date format';
    } else {
        const enteredDate = new Date(dateInput);
        const minDate = new Date('2000-01-01');
        const maxDate = new Date('2024-12-31');
        if (enteredDate < minDate || enteredDate > maxDate) {
            isValid = false;
            dateError.innerText = 'Please enter a date between 01/01/2000 and 12/31/2024';
        } else {
            dateError.innerText = '';
        }
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function isValidPhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
function isValidDate(dateString) {
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
    return datePattern.test(dateString);
}
