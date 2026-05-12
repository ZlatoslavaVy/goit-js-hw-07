
const refs = {
    loginForm: document.querySelector('.login-form'),  
};


refs.loginForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = {
        [refs.loginForm.elements.email.name]: refs.loginForm.elements.email.value.trim(),
        [refs.loginForm.elements.password.name]: refs.loginForm.elements.password.value.trim(),
    };

    const formDataValues = Object.values(formData);

    if (formDataValues.includes('')) {
        alert('All form fields must be filled in');

        return;
    }

    console.log(formData);

    refs.loginForm.reset();
});


