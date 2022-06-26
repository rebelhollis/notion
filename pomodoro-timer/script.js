const minElem = document.querySelector("#minutes"), secElem = document.querySelector("#seconds"), setting = document.querySelector("#setting");

let toggleSettings = false;

setting.onclick = function () {
    if (!toggleSettings){
        toggleSettings = true;
        minElem.contentEditable = true;
        minElem.style.borderBottom = `1px dashed #ffffff50`;
        secElem.contentEditable = true;
        secElem.style.borderBottom = `1px dashed #ffffff50`
    } else {
        resetValues();
    }
}

minElem.onblur = function () {
    resetValues();
}

secElem.onblur = function(){
    resetValues();
}

const startStop = document.querySelector("#stsp");

let minutes = document.querySelector("#stsp").innerHTML, seconds = document.querySelector("#seconds").innerHTML;

startStop.onclick = function () {
    if (startStop.innerHTML === "START") {
        if (!(parseInt(minutes) === 0 & parseInt(seconds) === 0)){
            startStop.innerHTML = "STOP";
            startStopProgress();
        } else {
            startStop.innerHTML = "STOP";
            startStopProgress();
        }
    }
}

function startStopProgress() {
    if (!progress) {
        progress = setInterval(progressTrack, speed);
    } else {
        clearInterval(progress);
        progress = null;
        progressStart = 0;
        progressBar.style.background = `conic-gradient( #191919a 360deg, #191919a 360deg)`;
    }
}

function progressTrack() {
	progressStart++;

	secRem = Math.floor((progressEnd - progressStart) % 60);
	minRem = Math.floor((progressEnd - progressStart) / 60);

	secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
	minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

	progressBar.style.background = `conic-gradient(
      	#9d0000 ${progressStart * degTravel}deg,
      	#17171a ${progressStart * degTravel}deg
  		)`;
	if (progressStart == progressEnd) {
		progressBar.style.background = `conic-gradient(
				#00aa51 360deg,
				#00aa51 360deg
		  )`;
		clearInterval(progress);
		startStop.innerHTML = "START";
		progress = null;
		progressStart = 0;
	}
}

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
