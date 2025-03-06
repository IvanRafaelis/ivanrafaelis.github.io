document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll(".progress-bar");

    function showBars() {
        bars.forEach(bar => {
            bar.classList.remove("hidden");
        });
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > document.getElementById("skills").offsetTop - 400) {
            showBars();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const texts = [
        "Ahoj! Som Ivan, študent a vo voľnom čase web developer.",
        "Tvorím moderné a funkčné weby.",
        "Zaujímam sa o technológie a kybernetickú bezpečnosť.",
        "Ak máš nápad na projekt, neváhaj ma kontaktovať!"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 10; // Rýchlosť písania (ms)
    const delayBetweenTexts = 1000; // Čas pred zmazaním textu (ms)

    function typeEffect() {
        let currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    typeEffect();
});
