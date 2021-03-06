// Navbar fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  
  // To-Top
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
    toTop.classList.remove('-bottom-10');
    toTop.classList.add('bottom-4');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('bottom-4');
    toTop.classList.add('-bottom-10');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

// klik di luar hamburger
window.addEventListener('click', function(e){
  if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const darkToggleBG = document.querySelector('#dark-toggle-bg');

const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    toggleButton();
  } else {
    unToggleButton();
  }
});

function toggleButton(){
  html.classList.add('dark');
  darkToggleBG.classList.remove('bg-slate-300');
  darkToggleBG.classList.add('bg-primary');
  localStorage.theme = 'dark';
};

function unToggleButton(){
  html.classList.remove('dark');
    darkToggleBG.classList.add('bg-slate-300');
    darkToggleBG.classList.remove('bg-primary');
    localStorage.theme = 'light';
}

// Pindah posisi toggle sesuai state dari 'theme' di local storage
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
  toggleButton();
} else {
  darkToggle.checked = false;
  unToggleButton();
}

// It's show time
// Thanks to Aaron Farrar https://codepen.io/afarrar/pen/JRaEjP
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;

  var year = date.getFullYear();
  var day = date.getUTCDate();
  var month = monthNames[date.getMonth()];

  var fulldate = day + " " + month + " " + year;

  

  // document.getElementById("MyClockDisplay").innerText = date+time;
  document.getElementById("MyClockDisplay").textContent = fulldate + " | " +time;
  
  setTimeout(showTime, 1000);
  
}

showTime();