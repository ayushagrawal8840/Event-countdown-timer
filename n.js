// Set the date of the event (replace with your event date)
const eventDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = eventDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + "d";
    document.getElementById('hours').innerHTML = hours + "h";
    document.getElementById('minutes').innerHTML = minutes + "m";
    document.getElementById('seconds').innerHTML = seconds + "s";

    // When the countdown timer reaches zero
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Event is happening now!";
    }
}, 1000);