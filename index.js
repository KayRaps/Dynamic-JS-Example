const greeting = document.getElementById('greeting');
const nameInput =  document.getElementById('name');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(){
    const name = nameInput.ariaValueMax.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}!`;
    }
});