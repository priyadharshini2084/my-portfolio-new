// 1. Highlight the active navigation link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// 2. Smooth scrolling for navigation links

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// 3. Display a welcome message in the console

console.log("Welcome to Priya Dharshini's Portfolio!");