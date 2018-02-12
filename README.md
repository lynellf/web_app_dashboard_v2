# web_app_dashboard_v2 (Treehouse Project 9)

The Web App Dashboard is designed to match mock image. Furthermore, several page elements are inactive. End users may toggle the display of the chart data presented. 

The alert icon displays notifications in a drop-down menu.  JavaScript-based form validation exists for messaging users. Additionally, form validation and user settings are JavaScript-based.

[Veiw Live Project Here](https://ezellfrazier.com/projects/dashboard/)

Project Overview

--------------------

####

### Create a responsive web page from the supplied  dashboard.png  mockup with the following:

-   Header with app name, notification icon badge and profile avatar and name.

-   SVG icon based navigation with the following links: Dashboard, Members, Visits, and Settings. NOTE: You only have to build out the main dashboard page, not any of the other pages.

-   Main content area where the specific dashboard widgets will go.

-   Ensure that the design responds well to mobile (320px), tablet (768px) and desktop (1024px) screen sizes.

####

### Demo alert notification.

-   In the dashboard.png, this appears as the purple bar near the top of the page with the word "Alert" in it. When the page loads this alert should be visible, but the user should be able to close the alert by clicking the X button.

-   Include a notification icon in the navigation header. Use the icon-bell.svg file. In the mockup this is the bell in the top right corner of the page.

####

### Chart widgets

-   Using chart.js, create and include the information for the following chart widgets, as shown in the mockup for the:

-   Web Traffic (line chart)

-   Daily Traffic Bar Chart (bar chart)

-   Mobile User Pie Chart (donut chart)

-   Style the charts to match the overall style of the dashboard.

-   You will need to make up this data -- you can see the mockup for sample data.

````
<div class="traffic">
  <div class="traffic__main">
      <div class="traffic__menu">
          <h3 class="traffic__title">Traffic</h3>
          <ul class="traffic__list">
              <li class="traffic__option">Hourly</li>
              <li class="traffic__option">Daily</li>
              <li class="traffic__option--active">Weekly</li>
              <li class="traffic__option">Monthly</li>
          </ul>
      </div>
      <!-- Create a navigation similar to the one in the mockup when the Hours, 
      Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, 
      Daily, Weekly and Monthly buttons so that a
      different line chart is displayed on click. -->
      <canvas height="100" class="traffic__ranged--small"></canvas>
      <canvas height="60" class="traffic__ranged--large"></canvas>
  </div>
  <div class="traffic__daily">
      <h3 class="traffic__title">Daily Traffic</h3>
      <canvas id="trafficBar" height="100"></canvas>
  </div>
  <div class="traffic__mobile">
      <h3 class="traffic__title">Mobile Users</h3>
      <canvas id="trafficPie" height="100"></canvas>
  </div>
</div>
````

````
var lineChartSmall = document.querySelector('.traffic__ranged--small'),
    lineChartLarge = document.querySelector('.traffic__ranged--large'),

    
    trafficDaily = document.querySelector('#trafficBar'),
    trafficMobile = document.querySelector('#trafficPie'),
    rangedTrafficSmall = new Chart(lineChartSmall, hourlyData),
    rangedTrafficLarge = new Chart(lineChartLarge, hourlyData),
    // Bar chart
    dailyTrafficBarChart = new Chart(trafficDaily, barData),
    mobileTrafficDoughnutChart = new Chart(trafficMobile, doughnutData);
````

####

### Social Stats Widget

-   Create a widget (or three separate widgets) to display social network stats for Facebook, Twitter and Google+.

-   Use the provided SVG icons for each of the social networks.

-   Style the social information to match the corresponding social network.

-   Style to match the overall look and feel of the dashboard.

````
<div class="social__site">
  <span class="social__span">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="social__twitter" height="40">
          <path d="M32 3.1c-1.2.5-2.4.9-3.8 1
           1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2
            1.6C25.8.8 24 0 22.2 0c-3.6 0-6.6 
            2.9-6.6 6.6 0 .5.1 1 .2 
            1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 
            2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 
            0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 
            6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8
            2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2
             2.8-.5 0-1.1 0-1.6-.1 2.9 1.9 6.4 3 
             10.1 3 12.1 0 18.7-10 
             18.7-18.7v-.8c1.3-1 2.4-2.2 3.3-3.5z"
          />
      </svg>
  </span>
  <div class="social__container">
      <h4 class="social__header">Twitter</h4>
      <span class="social__counter">10,345</span>
  </div>
</div>
````

###  New Members and Recent Activity Widgets

-   Create widgets that lists users for both widgets.

-   Include avatars for each member (You can search for a "random user generator" like <https://randomuser.me/photos> or find some some pictures elsewhere).

-   Add the information for each user as shown in the mockup, such as Member name, email address, Sign up Date etc.

````
<li class="members__item">
    <img src="img/67.jpg" alt="iboya vat" class="members__avy" />
    <div class="members__details">
        <span class="members__name">Iboya Vat</span>
        <a href="#" class="members__email">iboya.vat@example.com</a>
    </div>
    <span class="members__date">10/15/17</span>
</li>
````

####

### Message User Widget

-   Create a field for searching for a user.

-   You don't have to add real search functionality, but if you attempt to get the exceeds grade, you'll need to make up some user data.

-   Add a message textarea field that lets you add a message.

-   Create a "Send" button and use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.

-   Use JS to display error messages if user isn't selected or message field is empty.

-   Style to match the overall look and feel of the dashboard.

````
<div class="message__container">
  <h3 class="bottom__title">Message User</h3>
  <span class="message__success-message" id="successMessage"></span>
  <form class="message__form">
      <input type="text" class="message__input" placeholder="Search for User" />
      <span class="message__search-error" id="searchError"></span>
      <textarea class="message__textarea" placeholder="Message for User"></textarea>
      <span class="message__text-error" id="textError"></span>
      <input type="submit" class="message__submit" value="Send">
  </form>
</div>
````

####

### Settings Widget

-   Create a settings widget to display various setting options using different form elements.

-   Create an on/off widget for whether to send email notifications.

-   Create an on/off widget for whether to set profile to public or private.

-   Create a dropdown to select timezone.

-   Add Save and Cancel buttons (these do not have to do anything functional).

-   Style to match the overall look and feel of the dashboard.

````
<ul class=settings__list>
  <li class="settings__item">
      <!-- Step Six (b): Create an on/off widget for whether to send email notifications -->
      <span class="settings__desc">Send Email Notifications</span>
      <label class="settings__switch-label">
          <input type="checkbox" class="settings__switch" id="emailSwitch">
          <span class="settings__slider"></span>
      </label>
  </li>
  <li class="settings__item">
      <!-- Step Six (c): Create an on/off widget for whether to set profile to public or private -->
      <span class="settings__desc">Set Profile to Public</span>
      <label class="settings__switch-label">
          <input class="settings__switch" type="checkbox" id="profileSwitch">
          <span class="settings__slider"></span>
      </label>
  </li>
</ul>
````

####

### Display at least two notifications when the user clicks the alerts icon

-   This could be a pop-up window or dropdown menu.

````
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
````

####

### Traffic chart widget

-   Create a navigation similar to the one in the mockup to display different data when the Hourly, Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly and Monthly buttons so that a different line chart is displayed on click.

````
<div class="traffic__main">
  <div class="traffic__menu">
      <h3 class="traffic__title">Traffic</h3>
      <ul class="traffic__list">
          <li class="traffic__option">Hourly</li>
          <li class="traffic__option">Daily</li>
          <li class="traffic__option--active">Weekly</li>
          <li class="traffic__option">Monthly</li>
      </ul>
</div>
````

####

### Add an "autocomplete" feature for the "Search for User" box, listing names that match the search term.

````
var userElements = document.querySelectorAll('.members__name'),
    searchBox = document.querySelector('.message__input'),
    autocomplete = new autoComplete({
        selector: '.message__input',
        minChars: 2,
        source: function(term, suggest) {
            term = term.toLowerCase();
            var userNames = [],
                suggestions = [];
            for (var i = 0; i < userElements.length; i++) {
                userNames.push(userElements[i].textContent);
            }
            for (var j = 0; j < userNames.length; j++) {
                if(~userNames[j].toLowerCase().indexOf(term)) {
                    suggestions.push(userNames[j]);
                    suggest(suggestions);
                }
            }
        }
    });
````

####

### Use local storage to save the settings.
-   When page is reloaded the settings are remembered.

````
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
````
