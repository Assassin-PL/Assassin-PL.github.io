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