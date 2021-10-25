// |||||||||||||||||||||||||||||||||
// |||      Hamburger Toggle     |||
// |||||||||||||||||||||||||||||||||

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));


// |||||||||||||||||||||||
// |||      Slider     |||
// |||||||||||||||||||||||

setInterval(nextDonut, 5000);

const donutImg = document.getElementById('banner-donut');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const donut = new Array;

// initiate starting donut
let currentDonut = 1;

function showDonut() {
  donut[currentDonut] = "./images/banner-donut-" + currentDonut + ".png";
  donutImg.src = donut[currentDonut];
}

function nextDonut() {
  currentDonut++;
  if (currentDonut > 8) {
    currentDonut = 1;
  }
  donut[currentDonut] = "./images/banner-donut-" + currentDonut + ".png";
  donutImg.src = donut[currentDonut];
}


window.addEventListener('DOMContentLoaded', function() {
  showDonut(currentDonut);
});

nextBtn.addEventListener('click', function() {
  currentDonut++;
  if (currentDonut > 8) {
    currentDonut = 1;
  }
  showDonut(currentDonut);
});

prevBtn.addEventListener('click', function() {
  currentDonut--;
  if (currentDonut < 1) {
    currentDonut = 8;
  }
  showDonut(currentDonut);
});


