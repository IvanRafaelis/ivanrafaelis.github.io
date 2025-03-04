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
