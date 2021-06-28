"use strict";

// Function to dynamically update navigation main with post titles.
function insert_post_into_nav_main(post_title) {
    var ul = document.getElementsByClassName("main-nav")[0].childNodes[1];
    var li = document.createElement("li");
    li.innerHTML = "<a href=\"{{ p.url }}\" class=\"active\">" + post_title + "</a>";
    ul.appendChild(li);
}