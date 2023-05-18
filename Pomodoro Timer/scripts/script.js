const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minuets = Math.floor(timeLeft /60);
    let seconds = timeLeft % 60;
    
    let formattedTime = `${minuets.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")}`;
    timerEl.innerHTML = formattedTime;
    if (timeLeft === 0) {
        clearInterval(interval);
        alert("Time is up!");
        timeLeft = 1500;
    }
}


function startTimer(){
    startButtonEl.disabled = true;
    interval =setInterval(()=>{
        timeLeft--;
        updateTimer();

    },1000)
};
function stopTimer(){
    startButtonEl.disabled = false;
    clearInterval(interval);
};
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    startButtonEl.disabled = false;
};

startButtonEl.addEventListener("click",startTimer);
stopButtonEl.addEventListener("click",stopTimer);
resetButtonEl.addEventListener("click",resetTimer);