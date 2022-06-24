!function script(d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://weatherwidget.io/js/widget.min.js';
	fjs.parentNode.insertBefore(js, fjs);
}
/* FOR JS LOCAL STORAGE SETTINGS
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
window.addEventListener(touchEvent, mode);
function mode() {
	const currentTheme = document.getElementById('weather').getAttribute('data-theme');
	console.log(currentTheme);
	if (currentTheme == 'light') {
		light();
	} else {
		dark();
	}
}
function light() {
	localStorage.setItem('data-theme', 'pure');
	document.documentElement.setAttribute('data-theme', 'pure');
	document.getElementById('weather').setAttribute('data-theme', 'pure');
	document.getElementById('weather').removeAttribute('data-basecolor');
	document.getElementById('weather').setAttribute('data-textcolor', '#191919');
	document.getElementById('weather').setAttribute('data-highcolor', '#ff1c8d');
	document.getElementById('weather').setAttribute('data-lowcolor', '#42fefc');
	document.getElementById('weather').removeAttribute('data-cloudfill');
	document.getElementById('weather').setAttribute('data-mooncolor', '#f3f3f3');
	document.getElementById('weather').setAttribute('data-snowcolor', '#f3f3f3');
	script(document, 'script', 'weatherwidget-io-js');
}
function dark() {
	localStorage.setItem('data-theme', 'gray');
	document.documentElement.setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-basecolor', '#191919');
	document.getElementById('weather').removeAttribute('data-textcolor');
	document.getElementById('weather').setAttribute('data-highcolor', '#ff1c8d');
	document.getElementById('weather').setAttribute('data-lowcolor', '#42fefc');
	document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
	document.getElementById('weather').setAttribute('data-mooncolor', '#f3f3f3');
	document.getElementById('weather').setAttribute('data-snowcolor', '#f3f3f3');
	script(document, 'script', 'weatherwidget-io-js');
}
let currentTheme = localStorage.getItem('data-theme');
if (currentTheme == 'light') {
	light();
} else {
	dark();
}
*/

// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE

function light() {
	document.documentElement.setAttribute('data-theme', 'pure');
	document.getElementById('weather').setAttribute('data-theme', 'pure');
	document.getElementById('weather').removeAttribute('data-basecolor');
	document.getElementById('weather').setAttribute('data-textcolor', '#191919');
	document.getElementById('weather').setAttribute('data-highcolor', '#ff1c8d');
	document.getElementById('weather').setAttribute('data-lowcolor', '#42fefc');
	document.getElementById('weather').removeAttribute('data-cloudfill');
	document.getElementById('weather').setAttribute('data-suncolor', '#FFAE00');
	document.getElementById('weather').setAttribute('data-mooncolor', '#f3f3f3');
	document.getElementById('weather').setAttribute('data-snowcolor', '#f3f3f3');
	script(document, 'script', 'weatherwidget-io-js');
}

function dark() {
	document.documentElement.setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-basecolor', '#ffffff');
	document.getElementById('weather').setAttribute('data-textcolor', '#191919');
	document.getElementById('weather').setAttribute('data-highcolor', '#ff1c8d');
	document.getElementById('weather').setAttribute('data-lowcolor', '#42fefc');
	document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
	document.getElementById('weather').setAttribute('data-suncolor', '#FFAE00');
	document.getElementById('weather').setAttribute('data-mooncolor', '#f3f3f3');
	document.getElementById('weather').setAttribute('data-snowcolor', '#f3f3f3');
	script(document, 'script', 'weatherwidget-io-js');
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
