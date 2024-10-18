// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

//NAVBAR MOBILE
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('navbar-links');
const banner = document.getElementById('banner');

hamburgerIcon.addEventListener('click', () => {
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'flex'; // Muestro el menú
    banner.style.marginTop = '200px';
  } else {
    navLinks.style.display = 'none'; // Oculto el menú
    banner.style.marginTop = '0';
  }
});
