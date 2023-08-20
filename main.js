const seconds = 60;

const timer = {
    seconds: 60,
    minutes: 1
};

function minutesDown() {
    if ( timer.seconds === 0) {
        timer.minutes = --timer.minutes;
        console.log(timer.minutes);
    }
}

// timer.seconds = prompt(`Enter the number of seconds of your choice: `);

function secondsDown () {
    timer.seconds = --timer.seconds;
    console.log(timer.seconds);
    if (timer.seconds === 0) {
        alert(`Time's Up!!!`);
        clearInterval(interval);
    }
}

const interval = setInterval(secondsDown, 1000);
// clearInterval(interval);

