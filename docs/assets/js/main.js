"use strict";

// Function to dynamically update navigation main with post title or search bar.
function insert_into_nav_main(search_bar, post_title) {
    var ul = document.getElementsByClassName("main-nav")[0].childNodes[1];
    var li = document.createElement("li");

    if (search_bar) {
        li.innerHTML = "<div id=\"search-container\"><input type=\"text\" class=\"search-input\" placeholder=\"Search on title, text, tag...\"><ul id=\"results-container\"></ul></div>";

        // Insert to head of nav.
        ul.insertBefore(li, ul.firstChild);

        // Instantiate search object.
        SimpleJekyllSearch({
            searchInput: document.getElementById('search-input'),
            resultsContainer: document.getElementById('results-container'),
            json: '/assets/js/search.json'
        });
    }
    else {
        li.innerHTML = "<a href=\"{{ p.url }}\" class=\"active\">" + post_title + "</a>";
 
        // Append the new element.
       ul.appendChild(li);
    }
}
