
const mainNav = document.getElementById("navigation");
const contact = document.getElementById("contact");
const mybutton = document.getElementById("top");

// Resizing the window causes to remove the mobile Nav-Bar
window.onresize = resizeFunction;

function resizeFunction() {
    if(document.documentElement.clientWidth > 705) {
        mainNav.classList.remove("main-nav-mobile");
    }
}

// Toggle switch for Show and Hide Mobile Nav Bar
jQuery(".menu-mobile").click(function () {
    mainNav.classList.toggle("main-nav-mobile");
    contact.classList.toggle("contact-mobile")
})

// tab.onclick = function() {
//     mainNav.classList.toggle("main-nav-mobile");

// }



