const countdownElement = document.querySelector('.countdown');
const startBtn = document.getElementById('startBtn');

let duration;
let timerInterval;

function updateCountdownDisplay(minutes, seconds) {
    var minutesDisplay = minutes.toString().padStart(2, '0');
    var secondsDisplay = seconds.toString().padStart(2, '0');
    countdownElement.innerHTML = `${minutesDisplay}:${secondsDisplay}`;
}

function secondsDown() {
    if (duration === 0) {
        clearInterval(timerInterval);
        countdownElement.innerHTML = '00:00';
        console.log("Countdown finished!");
        return;
    }

    updateCountdownDisplay(Math.floor(duration / 60), duration % 60);
    duration--;
}

startBtn.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    duration = 180; // 2 minutes countdown (adjust as needed)
    updateCountdownDisplay(Math.floor(duration / 60), duration % 60);
    timerInterval = setInterval(secondsDown, 1000);
});
