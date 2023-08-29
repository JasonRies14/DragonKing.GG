const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item1, .nav-item2, .nav-item3 .nav-item4, .nav-item5 .nav-item6, .nav-item7 .nav-item8").forEach(n => n. addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
}))
