const pomodoroDisplay = document.querySelector(".timer-display");

const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

const sessionType = document.querySelector(".session-tye");
const buttonGroup = document.querySelector(".button-group");

const progressBar = new progressBar.Circle(pomodoroDisplay, {strokeWidth: 2, text: { value: "25:00"}, trailColor: "rgba(255, 255, 255, 0.35)", color: #f3f3f3, svgStyle: {width: "85%"}})

let timerRunning = true;

let timerStopped = false;

let timerSeconds = 1500;
let currentSessionSeconds = 1500;

let breakSeconds = 300;

let timeSpent = 0;

let timerInterval = null;

let type = "work";

function InitButtons(){
    startButton.style.display = "block";
    stopButton.style.display = "none";
    pauseButton.style.display = "none";
}

const toggleSession = function(){
    if (type === "work"){
        type = "break";
        currentSessionSeconds = breakSeconds;
    } else {
        type = "work";
        currentSessionSeconds = timerSeconds;
    }
};

// Calculate session progress for progressbar
const calculateSessionProgress = () => {
    // calculate the completion rate of this session
    let sessionTotalTime = type === "work" ? timerSeconds : breakSeconds;
    return timeSpent / sessionTotalTime;
  };
  
  // set a display timer function to format time-
  const displayTimer = function(timeInput) {
    // convert seconds into minutes
    var minutes = Math.floor(timeInput / 60);
    var remainingSeconds = timeInput - minutes * 60;
    // format time for single digit prepend by 0
    if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    // return display time
    progressBar.text.innerText = `${minutes}:${remainingSeconds}`;
    workSession.textContent = totalWorkSessions;
    breakSession.textContent = totalBreakSessions;
    sessionType.textContent = type;
  };
  
  // Reset timer Seconds
  const resetTimerSeconds = function() {
    currentSessionTime = 1500;
  };
  
  // Set a time function to run pomodoro intervals
  const timerStart = function() {
    if (timerRunning) {
      timerInterval = setInterval(function() {
        timeSpent++;
        currentSessionTime--;
        displayTimer(currentSessionTime);
        progressBar.set(calculateSessionProgress());
        if (currentSessionTime < 0) {
          if (type === "work") {
            totalWorkSessions++;
          } else {
            totalBreakSessions++;
          }
          timeSpent = 0;
          timerRunning = false;
          clearInterval(timerInterval);
          toggleSession();
          initializeButtons();
          displayTimer(currentSessionSeconds);
          progressBar.set(calculateSessionProgress());
        }
      }, 1000);
    }
  };
  
  // Set a function to pause timer
  const pauseTimer = function() {
    if (!timerRunning) {
      clearInterval(timerInterval);
    }
  };
  
  // set a function to stop timer
  const stopTimer = function() {
    if (timerStopped) {
      timeSpent = 0;
      clearInterval(timerInterval);
      resetTimerSeconds();
      displayTimer(currentSessionSeconds);
      progressBar.set(calculateSessionProgress());
      timerStopped = false;
    }
  };
  
  // Listen for clicks on the document
  document.addEventListener("click", function(event) {
    // Start pomodoro on click on start button
    if (event.target.classList.contains("start")) {
      timerRunning = true;
      timerStart();
      startButton.style.display = "none";
      pauseButton.style.display = "block";
      stopButton.style.display = "block";
    }
  
    if (event.target.classList.contains("pause")) {
      timerRunning = false;
      pauseTimer();
      pauseButton.style.display = "none";
      startButton.style.display = "block";
    }
  
    if (event.target.classList.contains("stop")) {
      timerStopped = true;
      stopTimer();
      InitButtons();
    }
  });
  
  // display buttons at the start of timer
  InitButtons();

function light(){
	document.documentElement.setAttribute('data-theme', 'pure');
}
    
function dark(){
	document.documentElement.setAttribute('data-theme', 'gray');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark();
} else {
	light();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	if (event.matches) {
		dark();
	} else {
		light();
	}
});