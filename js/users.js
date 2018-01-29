// Add an "autocomplete" feature for the "Search for User" box, listing 
// names that match the searh term

var userElements = document.querySelectorAll('.members__name'),
    searchBox = document.querySelector('.members__input'),
    autocomplete = new autoComplete({
        selector: '.members__input',
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

