function script(d, s, id) {
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
	if (currentTheme == 'gray') {
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
	document.getElementById('weather').setAttribute('data-textcolor', '#37352f');
	document.getElementById('weather').removeAttribute('data-cloudfill');
	script(document, 'script', 'weatherwidget-io-js');
}
function dark() {
	localStorage.setItem('data-theme', 'gray');
	document.documentElement.setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-basecolor', '#191919');
	document.getElementById('weather').removeAttribute('data-textcolor');
	document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
	script(document, 'script', 'weatherwidget-io-js');
}
let currentTheme = localStorage.getItem('data-theme');
if (currentTheme == 'pure') {
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
	document.getElementById('weather').removeAttribute('data-cloudfill');
	document.getElementById('weather').setAttribute('data-suncolor', '#ffae00');
	document.getElementById('weather').setAttribute('data-highcolor', '#600ef9');
	document.getElementById('weather').setAttribute('data-lowcolor', '#51f90e');
	document.getElementById('weather').setAttribute('data-cloudcolor', '#191919');
	document.getElementById('weather').setAttribute('data-raincolor', '#42fefc');
	document.getElementById('weather').setAttribute('data-snowcolor', '#cbfbfa');
	document.getElementById('weather').setAttribute('data-accent', 'rgba(0, 0, 0, 0.1)');
	document.getElementById('weather').setAttribute('data-shadow', 'rgba(255, 174, 0, 0.35)');
	script(document, 'script', 'weatherwidget-io-js');
}

function dark() {
	document.documentElement.setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-basecolor', '#191919');
	document.getElementById('weather').removeAttribute('data-textcolor');
	document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
	document.getElementById('weather').setAttribute('data-suncolor', '#ffae00');
	document.getElementById('weather').setAttribute('data-highcolor', '#600ef9');
	document.getElementById('weather').setAttribute('data-lowcolor', '#42fefc');
	document.getElementById('weather').setAttribute('data-cloudcolor', '#f3f3f3');
	document.getElementById('weather').setAttribute('data-raincolor', '#42fefc');
	document.getElementById('weather').setAttribute('data-snowcolor', '#cbfbfa');
	document.getElementById('weather').setAttribute('data-accent', 'rgba(255, 255, 255, 0.1)');
	document.getElementById('weather').setAttribute('data-shadow', 'rgba(255, 174, 0, 0.35)');
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
