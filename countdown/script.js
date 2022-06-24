const year = new Date().getFullYear();
const myDate = new Date('Oct 15, 2024 00:00:00');
console.log(myDate);

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = myDate - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("days").innerHTML=days
  document.getElementById("hours").innerHTML=hours
  document.getElementById("minutes").innerHTML=minutes
  document.getElementById("seconds").innerHTML=seconds



}, 1);