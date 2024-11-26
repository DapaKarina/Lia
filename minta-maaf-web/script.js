document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("exploreBtn");

    // Play music when the page loads
    music.play();

    button.addEventListener("click", () => {
        alert("Fracilia, maafkan aku. Aku ingin memperbaiki semuanya.");
    });
});
