// Step Two (a): Alert bar should be visible at the top but able to be
// closed when clicking the X button 

var alertParent = document.querySelector('.top'),
    alert = document.querySelector('.top__alert'),
    xIcon = document.querySelector('.icon--close'),
    alertClosed = false;

// Check localStorage for previously closed alert and adjust accordingly
if(localStorage.alertClosed) {
    if(localStorage.alertClosed === 'true') {
        alertClosed = true;
    }

    if(alertClosed === true) {
        alertParent.removeChild(alert);
    }
}

xIcon.addEventListener('click', function() {
    alertParent.removeChild(alert);
    alertClosed = true;
    localStorage.setItem('alertClosed', 'true');
});