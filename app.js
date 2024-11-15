let isMenuOpen = false;

// Function to handle scroll event
window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    let moveTop = document.querySelector(".move-top");

    if (window.scrollY > 0) {
        nav.style.background = "linear-gradient(to bottom, #ae85fe, #8666ff)";
        nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)";
        moveTop.classList.add("move-top-show");
        setTimeout(() => {
            nav.style.padding = "0.7em 1.2em";
            document.querySelector(".hamburger-icon").style.top = "12px";
        }, 200);
    } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
        moveTop.classList.remove("move-top-show");
        setTimeout(() => {
            nav.style.padding = "1.2em";
            document.querySelector(".hamburger-icon").style.top = "14px";
        }, 200);
        if (isMenuOpen) {
            minimize();
        }
    }
});

// Function to toggle the hamburger menu
document.querySelector("#burgerIcon").addEventListener("click", () => {
    let nav = document.querySelector(".navbar");
    let hiddenDiv = document.querySelector("#hidden-div");

    document.querySelectorAll(".hamburger-icon span").forEach(span => {
        span.classList.toggle("tilt");
    });
    hiddenDiv.classList.toggle("show-div");
    nav.classList.toggle("navbar-extend");

    if (isMenuOpen) {
        closeMenu(nav);
    } else {
        openMenu(nav);
    }
});

// Function to minimize the menu
function minimize() {
    let nav = document.querySelector(".navbar");
    closeMenu(nav);
}

// Function to close the menu
function closeMenu(nav) {
    let hiddenDiv = document.querySelector("#hidden-div");

    hiddenDiv.classList.remove("show-div");
    nav.classList.remove("navbar-extend");
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
    setTimeout(() => {
        nav.style.padding = "1.2em";
        document.querySelector(".hamburger-icon").style.top = "14px";
    }, 200);
    isMenuOpen = false;
}

// Function to open the menu
function openMenu(nav) {
    nav.style.background = "linear-gradient(to bottom, #ae85fe, #8666ff)";
    nav.style.boxShadow = "0 3px 15px 0 rgba(0, 0, 0, .15)";
    setTimeout(() => {
        nav.style.padding = "0.7em 1.2em";
        document.querySelector(".hamburger-icon").style.top = "12px";
    }, 200);
    isMenuOpen = true;
}
