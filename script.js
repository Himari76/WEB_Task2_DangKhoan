/* Homepage slideshow */

const slides = [
{
    eyebrow: "WORK SMARTER",
    title: "Achieve Your Goals",
    copy: "Track progress, manage information, and improve productivity with a clear and organized workflow.",
    image: "Resources/photo-1454165804606-c3d57bc86b40_1.jpg"
},
    {
        eyebrow: "WORK TOGETHER",
        title: "Better Team Collaboration",
        copy: "Bring your team together, organize responsibilities, and manage tasks in one convenient place.",
        image: "Resources/photo-1521737711867-e3b97375f902_1.jpg"
    },
    {
        eyebrow: "WELCOME TO OUR PLATFORM",
        title: "Management Made Simple",
        copy: "Stay organized with a modern workspace designed to help you focus on what matters most.",
        image: "Resources/photo-1497366754035-f200968a6e72_1.jpg"
    }
];

let currentSlide = 0;
let timer;

const hero = document.getElementById("hero");

if (hero) {
    const eyebrow = document.getElementById("hero-eyebrow");
    const title = document.getElementById("hero-title");
    const copy = document.getElementById("hero-copy");
    const dots = [...document.querySelectorAll(".dot")];
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        const slide = slides[currentSlide];

        eyebrow.textContent = slide.eyebrow;
        title.textContent = slide.title;
        copy.textContent = slide.copy;

        hero.style.backgroundImage = `url("${slide.image}")`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("selected", i === currentSlide);
        });
    }

    if (prev) {
        prev.addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });
    }

    if (next) {
        next.addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
    });

    showSlide(0);

    function startSlideshow() {
        clearInterval(timer);

        timer = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5500);
    }

    startSlideshow();

    hero.addEventListener("mouseenter", () => {
        clearInterval(timer);
    });

    hero.addEventListener("mouseleave", startSlideshow);
}

/* Login form */

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email && password.length >= 4) {
            alert("Login successful");

            window.location.href = "home.html";
        }
    });

    /* Forgot password */

    const forgotLink = document.getElementById("forgot-link");

    if (forgotLink) {
        forgotLink.addEventListener("click", event => {
            event.preventDefault();

            document.getElementById("form-feedback").textContent =
                "Please contact your administrator to reset your password.";
        });
    }

    /* Sign up */

    const signupLink = document.getElementById("signup-link");

    if (signupLink) {
        signupLink.addEventListener("click", event => {
            event.preventDefault();

            document.getElementById("form-feedback").textContent =
                "Account registration is not connected in this demo yet.";
        });
    }
}
/* Course Details Popup */

const courseDetails = {
    html: {
        title: "HTML",
        description:
            "HTML stands for HyperText Markup Language. It creates the structure of a web page using headings, paragraphs, images, and links."
    },

    css: {
        title: "CSS",
        description:
            "CSS stands for Cascading Style Sheets. It controls the appearance of web pages, including colors, fonts, spacing, and layouts."
    },

    bootstrap: {
        title: "Bootstrap",
        description:
            "Bootstrap is a front-end framework. It provides ready-made components and a responsive grid system to build websites quickly."
    },

    javascript: {
        title: "JavaScript",
        description:
            "JavaScript is a programming language that makes web pages interactive. It can handle button clicks, form validation, popups, and dynamic content."
    }
};

const courseModal = document.getElementById("course-modal");

if (courseModal) {
    const modalTitle = document.getElementById("modal-title");
    const modalDescription =
        document.getElementById("modal-description");

    const closeButton = document.getElementById("modal-close");
    const closeX = document.getElementById("modal-x");

    function closeCourseModal() {
        courseModal.classList.remove("show");
    }

    // Handle all Learn More buttons
    document.querySelectorAll(".course-button").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            const courseName =
                button.dataset.course.toLowerCase();

            const course = courseDetails[courseName];

            if (!course) return;

            modalTitle.textContent = course.title;
            modalDescription.textContent = course.description;

            courseModal.classList.add("show");
        });
    });

    // Close using the Close button
    if (closeButton) {
        closeButton.addEventListener("click", closeCourseModal);
    }

    // Close using the X button
    if (closeX) {
        closeX.addEventListener("click", closeCourseModal);
    }

    // Close by clicking outside the popup
    courseModal.addEventListener("click", event => {
        if (event.target === courseModal) {
            closeCourseModal();
        }
    });

    // Close by pressing Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCourseModal();
        }
    });
}