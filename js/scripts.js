/* Select page elements */
var link = document.getElementsByClassName("links")[0];

/* Add event listeners */
link.addEventListener("mouseover", function() {
    changeAnimationSpeed('0.25s');
});
link.addEventListener("mouseleave", function() {
    changeAnimationSpeed('0.5s');
});

/* Define shared functions */
function changeAnimationSpeed(time) {
    document.getElementsByClassName("ball")[0].style.animationDuration = time;
}