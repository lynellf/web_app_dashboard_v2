// Step Five (e): Use JS to display error messages if a user isn't selected
// or the message field is empty

var searchErrorSpan = document.querySelector('#searchError'),
    textAreaErrorSpan = document.querySelector('#textError'),
    successMessageSpan = document.querySelector('#successMessage'),
    submitButton = document.querySelector('.members__submit'),
    messageBox = document.querySelector('.members__textarea');

submitButton.addEventListener('click', function(event) {
    var formData = {
        userName: searchBox.value,
        message: messageBox.value
    };

    if (formData.userName.length > 0 && formData.message.length > 0) {
        successMessageSpan.className = 'members__success-message--active';
        successMessageSpan.textContent = 'Message Sent!';
        searchErrorSpan.className = 'members__search-error';
        textAreaErrorSpan.className = 'members__text-error';
        searchErrorSpan.textContent = '';
        textAreaErrorSpan.textContent = '';
        searchBox.value = '';
        messageBox.value = '';
    } else if (formData.userName.length === 0) {
        searchErrorSpan.textContent = 'Please enter a name to search';
        searchErrorSpan.className = 'members__search-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.className = 'members__success-message';
    } else if (formData.userName.length > 0) {
        searchErrorSpan.className = 'members__search-error';
        searchErrorSpan.textContent = '';
    } 
    

    if (formData.message.length === 0) {
        textAreaErrorSpan.textContent = 'Please enter a message';
        textAreaErrorSpan.className = 'members__text-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.className = 'members__success-message';
    } else if (formData.message.length > 0) {
        textAreaErrorSpan.className = 'members__text-error';
        textAreaErrorSpan.textContent = '';
    }

    event.preventDefault();
});
