"use strict";

// Global so that search will actually work.
var sjs = null;

// Function to dynamically update navigation main with post title or search bar.
function insert_into_nav_main(search_bar, post_title) {
    var ul = document.getElementsByClassName("main-nav")[0].childNodes[1];
    var li = document.createElement("li");

    if (search_bar) {
        li.innerHTML = "<div id=\"search-container\"><input type=\"text\" class=\"search-input\" placeholder=\"$ Type to search\" autofocus onKeyPress=\"handle_search_input(event)\" onKeyUp=\"handle_search_input(event)\">";

        // Insert to head of nav.
        ul.insertBefore(li, ul.firstChild);

        // Instantiate search object.
        sjs = SimpleJekyllSearch({
            searchInput: document.getElementById('search-input'),
            resultsContainer: document.getElementById('results-container'),
            json: 'localhost:4000/assets/js/search.json'
        });
    }
    else {
        li.innerHTML = "<a href=\"{{ p.url }}\" class=\"active\">" + post_title + "</a>";
 
        // Append the new element.
       ul.appendChild(li);
    }
}

function handle_search_input(event) {
    const value = event.target.value;
    sjs.search(value);
}