  const deg = 6;
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');

setInterval(() => {

   let day = new Date();
   let hh = day.getHours() * 30;
   let mm = day.getMinutes() * deg;
   let ss = day.getSeconds() * deg;

   hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
   mn.style.transform = `rotateZ(${mm}deg)`;
   sc.style.transform = `rotateZ(${ss}deg)`;
})
    
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
