// JavaScript pour activer/désactiver le menu burger
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('link');
    const navMenu = document.querySelector('.nav-menu');
  
    burger.addEventListener('click', function (e) {
      e.preventDefault();
      navMenu.classList.toggle('active');
    });
  });
  