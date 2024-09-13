function validateForm() {
    const userName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Form values:', userName, email, password);

    if (userName !== '' && email !== '' && password !== '') {
        alert('Created user');
    } else {
        alert('Please fill in all fields');
    }
}
