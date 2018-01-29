var emailSwitch = document.querySelector('#emailSwitch'),
    profileSwitch = document.querySelector('#profileSwitch'),
    timeZone = document.querySelector('#dropdownTimeZone'),
    saveButton = document.querySelector('#saveButton'),
    selectedZone = '',
    emailStatus = false,
    profileStatus = false;

// Check localStorage and set values accordingly

if(localStorage.emailStatus) {
    var emailValue = localStorage.emailStatus;

    if(emailValue === 'true') {
        emailStatus = true;
    } else {
        emailStatus = false;
    }

    if(emailStatus === true) {
        emailSwitch.checked = 'checked';
    } else {
        emailSwitch.checked = '';
    }
}

if (localStorage.profileStatus) {
    var profileValue = localStorage.profileStatus;

    if (profileValue === 'true') {
        profileStatus = true;
    } else {
        profileStatus = false;
    }

    if (profileStatus === true) {
        profileSwitch.checked = 'checked';
    } else {
        profileSwitch.checked = '';
    }
}

if(localStorage.timeZone) {
    timeZone.value = localStorage.timeZone;
}

emailSwitch.addEventListener('click', function() {
    emailStatus = !emailStatus;
});

profileSwitch.addEventListener('click', function() {
    profileStatus = !profileStatus;
});

timeZone.addEventListener('change', function() {
    selectedZone = timeZone.value;
});

saveButton.addEventListener('click', function() {
    localStorage.setItem('timeZone', selectedZone);
    localStorage.setItem('profileStatus', profileStatus.toString());
    localStorage.setItem('emailStatus', emailStatus.toString());
})
