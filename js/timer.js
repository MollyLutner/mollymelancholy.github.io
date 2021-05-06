var time;
var resultsPage;
var interval;

const startTimer = (duration, nextPage) => {
    time = duration;
    resultsPage = nextPage;
    interval = setInterval(timer, 1000);
}

const formatTime = (time) => {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    seconds = (seconds < 10 ? "0" : "") + seconds;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    return minutes + ":" + seconds;
}

const timer = () => {
    if (time > 0) {
        time--;
        formattedTime = formatTime(time);
        document.getElementById("timer").innerHTML = formattedTime;
    } else {
        clearInterval(interval);
        alert("Times up!");
        window.open(resultsPage, '_self', false);
    }

}