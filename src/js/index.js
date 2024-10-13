// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

//NAVBAR MOBILE
// Seleccionamos el icono y la barra de navegación
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('navbar-links');
const banner = document.getElementById('banner');

// Añadimos un evento de clic para alternar la visibilidad de la barra de navegación
hamburgerIcon.addEventListener('click', () => {
  // Si la barra de navegación está oculta, la mostramos
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'flex'; // Mostramos el menú en modo 'flex'
    banner.style.marginTop = '200px';
  } else {
    navLinks.style.display = 'none'; // Ocultamos el menú
    banner.style.marginTop = '0';
  }
});
