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
        'plaza2.jpg',
        'IMG_0059.png',
        'IMG_1543.png',
        'IMG_1617.png',
        'IMG_3301.png',
        'IMG_3423.png',
        'IMG_4522.png',
        'IMG_4631.png',
        'IMG_4948.png',
        'IMG_5395.png',
        'IMG_5594.png',
        'IMG_5889.png',
        'IMG_6162.png',
        'IMG_6185.png',
        'IMG_6188.png',
        'IMG_6286.png',
        'IMG_6430.png',
        'IMG_7463.png',
        'IMG_8272.png',
        'IMG_9135.png',
        'IMG_9877.png',
        'IMG_9940.png'
    ];

    images.forEach(function(image) {
        const imgElement = document.createElement('img');
        imgElement.src = `resources/images/${image}`;
        imgElement.alt = `Zdjęcie Michała i Kamilii`;
        imgElement.className = 'img-plaza';
        galleryContainer.appendChild(imgElement);
    });

});