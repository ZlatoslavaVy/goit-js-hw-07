const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
    const userName = refs.input.value.trim();

    refs.output.textContent = userName ? userName : 'Anonymous';
});