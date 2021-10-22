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

// Sticky NavBar

// window.onscroll = function() {myFunction()};

// var navbar = document.querySelector('.navbar-container');
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.toggle("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
//   console.log(navbar);
// }




