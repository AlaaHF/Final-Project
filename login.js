// The Mystical Library Login Page

// Global Variables
let username = '';
let password = '';

// Event Listeners
document.getElementById('login-btn').addEventListener('click', loginUser);

// Event Functions
function loginUser() {
    document.getElementById('feedback').style.visibility = 'visible';
    username = /^[A-Za-z]+$/;
    password = /^[0-9]+$/;
    if (username.test(document.getElementById("username-input").value) && password.test(document.getElementById("password-input").value)) {
        document.getElementById('feedback').innerHTML = 'Login Successful! Please Click on the Link Below.';
        document.getElementById('feedback').style.color = 'green';
        document.getElementById('link').style.visibility = 'visible';
    } else {
        document.getElementById('feedback').innerHTML = 'Login Insuccessful. Please Try Again.';
        document.getElementById('feedback').style.color = 'red';
        document.getElementById('link').style.visibility = 'hidden';
    }

}