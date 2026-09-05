const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* LIQUID MOUSE EFFECT */

const exploreButton = document.querySelector(".main-button");

exploreButton.addEventListener("mousemove", (event) => {
    const rect = exploreButton.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    exploreButton.style.setProperty("--mouse-x", `${x}px`);
    exploreButton.style.setProperty("--mouse-y", `${y}px`);
});

exploreButton.addEventListener("mouseleave", () => {
    exploreButton.style.setProperty("--mouse-x", "50%");
    exploreButton.style.setProperty("--mouse-y", "50%");
});
