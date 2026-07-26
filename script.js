// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Fade Animation on Scroll
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.classList.add("hidden");
    observer.observe(card);

});


// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    }
    else {

        navbar.style.boxShadow = "none";

    }

});


// ===============================
// Typing Effect
// ===============================

const roles = [

    "Embedded Systems Engineer",
    "Firmware Developer",
    "STM32 Developer",
    "IoT Developer",
    "Embedded C Programmer"

];

let roleIndex = 0;
let charIndex = 0;

const roleText = document.querySelector(".hero h2");

function typeRole() {

    if (!roleText) return;

    if (charIndex < roles[roleIndex].length) {

        roleText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 80);

    }

    else {

        setTimeout(eraseRole, 1800);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 40);

    }

    else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeRole, 400);

    }

}

window.onload = () => {

    if (roleText) {

        roleText.textContent = "";
        typeRole();

    }

};
