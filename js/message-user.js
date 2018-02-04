// Step Five (e): Use JS to display error messages if a user isn't selected
// or the message field is empty

var searchErrorSpan = document.querySelector('#searchError'),
    textAreaErrorSpan = document.querySelector('#textError'),
    successMessageSpan = document.querySelector('#successMessage'),
    submitButton = document.querySelector('.message__submit'),
    messageBox = document.querySelector('.message__textarea');

submitButton.addEventListener('click', function(event) {
    var formData = {
        userName: searchBox.value,
        message: messageBox.value
    };

    if (formData.userName.length > 0 && formData.message.length > 0) {
        successMessageSpan.className = 'message__success-message--active';
        successMessageSpan.textContent = 'Message Sent!';
        searchErrorSpan.className = 'message__search-error';
        textAreaErrorSpan.className = 'message__text-error';
        searchErrorSpan.textContent = '';
        textAreaErrorSpan.textContent = '';
        searchBox.value = '';
        messageBox.value = '';
    } else if (formData.userName.length === 0) {
        searchErrorSpan.textContent = 'Please enter a name to search';
        searchErrorSpan.className = 'message__search-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.className = 'message__success-message';
    } else if (formData.userName.length > 0) {
        searchErrorSpan.className = 'message__search-error';
        searchErrorSpan.textContent = '';
    } 
    

    if (formData.message.length === 0) {
        textAreaErrorSpan.textContent = 'Please enter a message';
        textAreaErrorSpan.className = 'message__text-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.className = 'message__success-message';
    } else if (formData.message.length > 0) {
        textAreaErrorSpan.className = 'message__text-error';
        textAreaErrorSpan.textContent = '';
    }

    event.preventDefault();
});
