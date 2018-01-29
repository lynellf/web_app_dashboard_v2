// Step Five (e): Use JS to display error messages if a user isn't selected
// or the message field is empty

var searchErrorSpan = document.querySelector('#searchError'),
    textAreaErrorSpan = document.querySelector('#textError'),
    successMessageSpan = document.querySelector('#successMessage'),
    submitButton = document.querySelector('.members__submit'),
    messageBox = document.querySelector('.members__textarea');

submitButton.addEventListener('click', function(event) {
    if (searchBox.value.length > 0 && messageBox.value.length > 0) {
        successMessageSpan.className = 'members__success-message--active';
        successMessageSpan.textContent = 'Message Sent!';
        searchBox.value = '';
    } else if (searchBox.value.length === 0) {
        searchErrorSpan.textContent = 'Please enter a name to search';
        searchErrorSpan.className = 'members__search-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.classNamee = 'members__success-message';
    } else {
        searchBox.value = '';
        searchErrorSpan.textContent = '';
        searchErrorSpan.className = 'members__search-error';
    }
    if (messageBox.value.length === 0) {
        textAreaErrorSpan.textContent = 'Please enter a message';
        textAreaErrorSpan.className = 'members__text-error--active';
    } else {
        messageBox.value = '';
        textAreaErrorSpan.textContent = '';
        textAreaErrorSpan.className = 'members__text-error';
    }

    event.preventDefault();
});
