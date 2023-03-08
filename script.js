
document.getElementById('submit-btn').addEventListener('click', function() {
    if (validateName() && validateEmail() && validateMessage()) {
        //submit form
        document.getElementById('contact-form').submit();
        alert("Thank you for your message. We will get back to you shortly.");
        //reset form
        document.getElementById('contact-form').reset();
    }
});


function validateName() {
    var name = document.getElementById('name').value;
    if (name == null || name == "" || name.length < 3) {
        alert("Name can't be blank and must be at least 3 characters long.");
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email == null || email == "" || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        alert("Please enter a valid email address.");
        return false;
    } else {
        return true;
    }
}

function validateMessage() {
    var message = document.getElementById('message').value;
    if (message == null || message == "" || message.split(" ").length < 3) {
        alert("Message can't be blank and must be at least 3 words long.");
        return false;
    } else {
        return true;
    }
}
