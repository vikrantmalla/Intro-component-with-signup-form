const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['fname'].value.trim();
    const lastName = form['lname'].value.trim();
    const email = form['email'].value.trim();
    const password = form['password'].value.trim();

    if (firstName === '') {
        setErrorMsg('fname', 'First name cannot be empty');
    } else if (firstName.length <= 2) {
        setErrorMsg('fname', 'First name min 3 char');
    } else {
        removeErrorMsg('fname');
    }

    if (lastName === '') {
        setErrorMsg('lname', 'Last name cannot be empty');
    } else if (lastName.length <= 2) {
        setErrorMsg('lname', 'First name min 3 char');
    } else {
        removeErrorMsg('lname');
    }

    if (email === '') {
        setErrorMsg('email', 'Email cannot be empty');
    } else if (!isValid(email)) {
        setErrorMsg('email', 'Looks like this is not an email');
    } else {
        removeErrorMsg('email');
    }

    if (password === '') {
        setErrorMsg('password', 'Password is required');
    } else if (password.length <= 5) {
        setErrorMsg('password', 'Password required minimum 6 char');
    } else {
        removeErrorMsg('password');
    }
});

function setErrorMsg(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeErrorMsg(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}