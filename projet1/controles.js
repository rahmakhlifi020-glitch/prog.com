let targetDate = new Date("December 4, 2025 16:34:00").getTime();

let timer = setInterval(function () {

    let now = new Date().getTime();
    let diff = targetDate - now;

    if (diff < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Event started!";
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
