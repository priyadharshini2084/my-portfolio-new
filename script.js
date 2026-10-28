// 1. Highlight the active navigation link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

```
link.addEventListener("click", function () {

    navLinks.forEach(function (item) {
        item.classList.remove("active");
    });

    link.classList.add("active");

});
```

});

// 2. Smooth scrolling for navigation links

navLinks.forEach(function (link) {

```
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
```

});

// 3. Display a welcome message in the console

console.log("Welcome to Priya Dharshini's Portfolio!");

// 4. Initialize EmailJS

const EMAILJS_PUBLIC_KEY = "cO0LwA9EIW8HDiCDC";
const EMAILJS_SERVICE_ID = "service_rpmhubu";
const EMAILJS_TEMPLATE_ID = "template_sy6p4tr";

if (typeof emailjs !== "undefined") {

```
emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});
```

} else {

```
console.error("EmailJS library failed to load.");
```

}

// 5. Contact form submission

const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-btn");
const formStatus = document.querySelector("#form-status");

if (contactForm) {

```
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (typeof emailjs === "undefined") {

        formStatus.textContent =
            "Email service is unavailable. Please try again later.";

        return;

    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "Sending your message...";

    emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactForm
    )

    .then(function () {

        formStatus.textContent =
            "Your message has been sent successfully!";

        contactForm.reset();

    })

    .catch(function (error) {

        console.error("EmailJS error:", error);

        formStatus.textContent =
            "Message could not be sent. Please try again.";

    })

    .finally(function () {

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

    });

});
```

}
