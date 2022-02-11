document.getElementById('button-submit').addEventListener('click', function () {
    console.log('button clicked');
    const emailField = document.getElementById('user-name');
    const userEmail = emailField.value;
    // password
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    if (userEmail == 'shahin7333@gmail.com' && userPassword == 'shahin') {
        window.location.href = 'banking.html';
    }
})

