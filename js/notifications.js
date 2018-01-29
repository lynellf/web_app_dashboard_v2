var alertMsgs = [
        'Iboya Vat commented on YourApp\'s SEO Tips',
        'Aapo Niskanen liked the post Facebook\'s Changes for 2018',
        'Phillip Cox commented on Facebook\'s Changes for 2018',
        'Zilda Moreira posted YourApp\'s SEO Tips'
    ],
    dropdownContent = document.querySelector('#dropdownContent'),
    bell = document.querySelector('#notificationBell'),
    notificationSignal = document.querySelector('#notificationSignal'),
    alertStatus = true,
    dropdownStatus = false;

// Check localStorage for alertStatus and set accordingly

if(localStorage.alertState) {
    if(localStorage.alertState === 'false') {
        alertStatus = false;
    }
    if (alertStatus === false) {
        notificationSignal.style.display = 'none';
    }
}

bell.addEventListener('click', function() {
    if(dropdownStatus === false) {
        dropdownContent.className = 'dropdown__content--active';
        for (var i = 0; i < alertMsgs.length; i++) {
            var item = document.createElement('span');
            item.className = 'dropdown__item';
            item.textContent = alertMsgs[i];
            dropdownContent.appendChild(item);
        }
        notificationSignal.style.display = 'none';
        dropdownStatus = true;
    } else if(dropdownStatus === true) {
        while (dropdownContent.firstChild) {
            dropdownContent.className = 'dropdown__content';
            dropdownContent.removeChild(dropdownContent.firstChild);
        }
        dropdownStatus = false;
    }
});

document.addEventListener('click', function(event) {
    if (dropdownStatus === true && event.target !== bell) {
        while (dropdownContent.firstChild) {
            dropdownContent.className = 'dropdown__content';
            dropdownContent.removeChild(dropdownContent.firstChild);
        }
        dropdownStatus = false;
        alertStatus = false;
        localStorage.setItem('alertState', 'false');
    }
});


