document.addEventListener('DOMContentLoaded', function () {
    // Funzione per animare il fade-in
    function fadeIn(element, duration) {
        element.style.opacity = 0;
        let startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const opacityValue = progress / duration;

            element.style.opacity = Math.min(opacityValue, 1);

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Seleziona gli elementi da animare
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Applica l'animazione a ciascun elemento
    fadeInElements.forEach(function (element) {
        fadeIn(element, 1000); // Durata dell'animazione: 1000ms (1 secondo)
    });
});