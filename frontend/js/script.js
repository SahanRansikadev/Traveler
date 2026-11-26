
/* TYPEWRITER EFFECT */

const typingText = document.getElementById("typing-text");

const lines = [
    "Explore the world.",
    "Travel your way."
];

const fullText = lines.join("\n");

let index = 0;

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (typingText && reducedMotion) {
    typingText.textContent = fullText;
} else if (typingText) {

    function typeWriter() {

        if (index < fullText.length) {

            index++;

            typingText.textContent = fullText.substring(0, index);

            setTimeout(typeWriter, 90);

        } else {

            setTimeout(() => {

                index = 0;
                typingText.textContent = "";

                setTimeout(typeWriter, 500);

            }, 2500);

        }

    }

    setTimeout(typeWriter, 400);
}


/* BACKGROUND IMAGE SLIDESHOW */

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

if (!reducedMotion && slides.length > 1) {

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");

    }, 6000);

}
