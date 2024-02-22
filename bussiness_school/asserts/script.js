let navButton = document.getElementById("nav-but");
let navMobile = document.getElementById("nav-mobile")

navButton.addEventListener("click", () => {
    navMobile.classList.toggle("close-nav");
})