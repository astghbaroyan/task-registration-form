/* eslint-disable no-undef */
'use strict';

async () => {
    const response = await fetch('http://localhost:5000/users', {
        method: 'GET',
    });
    const requestBody = await response.json();
    console.log(requestBody);
    console.log(response);
};

const newUser = document.getElementById('subSignUp');
newUser.addEventListener('click', async () => {
    const inputNameSignUp = document.getElementById('inpNameSignUp');
    const inputPasswordSignUp = document.getElementById('inpPswdilSignUp');
    const inputEmailSignUp = document.getElementById('inpEmlSignUp');
    inputEmailSignUp.addEventListener('input', () => {
        const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1-30}$/;
        if (inputEmailSignUp.value.match(emailPattern)) {
            console.log('valid');
        } else {
            console.log('invalid');
        }
    });
    inputPasswordSignUp.addEventListener('input', () => {
        const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
        if (inputPasswordSignUp.value.match(passwordPattern)) {
            console.log('valid');
        } else {
            console.log('invalid');
        }
    }) ;
    const reqBody = {
        name: inputNameSignUp.value,
        password: inputPasswordSignUp.value,
        email: inputEmailSignUp.value,
    };
    console.log('reqBody', reqBody);
    try {
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        console.log('resBody', body);
        if (response.ok) {
            window.open('http://localhost:5000/home/home.html');
            console.log('sign up');
        } else {
            console.log('Your username and password does not match');
        }
    } catch (error) {
        console.log('Registration error', error);
    }
});
