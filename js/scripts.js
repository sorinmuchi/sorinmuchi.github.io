/*jshint esversion: 6 */
/* Select page elements */
var links = document.querySelectorAll('a');

/* Add event listeners */
links.forEach(link => {
    link.addEventListener("mouseover", function() {
        changeAnimationSpeed('0.25s');
    });
    link.addEventListener("mouseleave", function() {
        changeAnimationSpeed('0.5s');
    });
});

/* Define shared functions */
function changeAnimationSpeed(time) {
    document.getElementsByClassName("ball")[0].style.animationDuration = time;
}