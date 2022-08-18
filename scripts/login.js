// Step 1: Add click event handler with submit button
document.getElementById('btn-login').addEventListener('click',function(){
    // Step 2: Get email address inside email input field
    // .value must be used to get text from any input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step 3: Get password
    // Get element and value from it
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Never verify email and password on the client side.
    // It must be done on the server side
    // Step 4: Verify email and password
    if(email === 'farhan@gmail.com' && password === 'testHash123'){
        window.location.href = 'dashboard.html';
    }
    else{
        alert('Invalid User');
    }
});