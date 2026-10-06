/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    });
}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });

});


/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL TO TOP
========================================================= */

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


if (scrollTop) {

    scrollTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill in all fields.");

                return;
            }


            const mailSubject =
                encodeURIComponent(
                    subject
                );

            const mailBody =
                encodeURIComponent(
                    "Hello Pratheeksha,\n\n" +
                    "Name: " + name + "\n" +
                    "Email: " + email + "\n\n" +
                    "Message:\n" +
                    message
                );


            window.location.href =
                "mailto:pratheekshas160@gmail.com" +
                "?subject=" +
                mailSubject +
                "&body=" +
                mailBody;

        }
    );

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-image-card, " +
        ".about-content, " +
        ".skill-card, " +
        ".experience-card, " +
        ".project-card, " +
        ".certificate-card, " +
        ".education-item, " +
        ".contact-intro, " +
        ".contact-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal-element");

    observer.observe(element);

});


/* =========================================================
   DYNAMIC YEAR
========================================================= */

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.innerHTML =
        "© " +
        currentYear +
        " Pratheeksha S. All Rights Reserved.";

}