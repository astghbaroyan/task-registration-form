/* eslint-disable no-undef */
'use strict';

async () => {
    const response = await fetch('http://localhost:5000/users', {
        method: 'GET',
    });
    const requestBody = await response.json();
    console.log(requestBody);
};

const logIn = document.getElementById('subSignIn');
logIn.addEventListener('click', async () => {
    const inputPasswordLogIn = document.getElementById('inpPswdilSignIn');
    const inputEmailLogIn = document.getElementById('inpEmlSignIn');
    if (!inputEmailLogIn.value || !inputPasswordLogIn.value) {
        console.log('Input fields cannot be empty');
    }

    const reqBody = {
        email: inputEmailLogIn.value,
        password: inputPasswordLogIn.value,
    };

    try {
        const response = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            window.open('http://localhost:5000/home/home.html#');
        } else {
            console.log('Your username and password does not match');
        }
    } catch (error) {
        console.log(error);
    }
});
