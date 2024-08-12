// Function for countdown to the wedding day
document.addEventListener('DOMContentLoaded', function() {
    const countdownTargetDate = new Date("July 18, 2025 15:30:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownTargetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + " dni " + hours + " godzin "
        + minutes + " minut " + seconds + " sekund ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Jesteśmy już po ślubie!";
        }
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector('.gallery');
    const images = [
        'plaza1.jpg',
        'plaza2.jpg'
    ];

    images.forEach(function(image) {
        const imgElement = document.createElement('img');
        imgElement.src = `resources/images/${image}`;
        imgElement.alt = `Zdjęcie Michała i Kamilii`;
        imgElement.className = 'img-plaza';
        galleryContainer.appendChild(imgElement);
    });

});