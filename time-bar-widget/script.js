function date() {
    var today = new Date();
    document.getElementById('date').innerHTML = today.toDateString();
    }
    
    
    function clock() {
    var today = new Date();
    var hour = zeros(today.getHours());
    var minutes = zeros(today.getMinutes());
    var seconds = zeros(today.getSeconds());
    if(today.getHours() >=12){
        seconds+=" pm"
    }
    else{
        seconds+=" am"
    }
    hrs = today.getHours();
    if (hrs < 12)
            greet = 'Good Morning  ';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon ';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening  ';
    // console.log(today.toLocaleTimeString());
    document.getElementById('greet').innerHTML = greet;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
    }
        
    // adds zero infront of single digit number
    function zeros(num) {
    if (num < 10) {
        num = '0' + num
    };
    return num;
    }
    
    function dateTime() {
    date();
    clock();
    setTimeout(dateTime, 500);
    }
    
    dateTime()

/* FOR JS LOCAL STORAGE SETTINGS
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
window.addEventListener(touchEvent, mode);
function mode() {
	const currentTheme = localStorage.getItem('time-data-theme');
	console.log(currentTheme);
	if (currentTheme === 'dark') {
		light();
	} else {
		dark();
	}
}
function light() {
	localStorage.setItem('time-data-theme', 'light');
	document.documentElement.setAttribute('time-data-theme', 'light');
}
function dark() {
	localStorage.setItem('time-data-theme', 'dark');
	document.documentElement.setAttribute('time-data-theme', 'dark');
}
let currentTheme = localStorage.getItem('time-data-theme');
if (currentTheme == 'light') {
	light();
} else {
	dark();
}
*/

// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE

function light() {
	document.documentElement.setAttribute('time-data-theme', 'light');
}

function dark() {
	document.documentElement.setAttribute('time-data-theme', 'dark');
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