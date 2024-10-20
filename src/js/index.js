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

//HELADOS
const helados = [
  {
    id: 1,
    nombre: 'Vainilla',
    descripcion: 'Inconfundible, clásico y cremoso helado de vainilla.',
    image: '../assets/images/IceCream/vainilla.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 2,
    nombre: 'Chocolate',
    descripcion: 'Helado de puro chocolate belga con delicadas láminas de chocolate belga negro.',
    image: '../assets/images/IceCream/chocolate.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 3,
    nombre: 'Strawberry Cream',
    descripcion: 'Helado de crema y fresa con trozos de las fresas más selectas.',
    image: '../assets/images/IceCream/fresacrema.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 4,
    nombre: 'Vanilla Raspberry',
    descripcion: 'Helado de frambuesa con helado de vainilla y crujiente de chocolate.',
    image: '../assets/images/IceCream/vainillaraspberry.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 5,
    nombre: 'Red Velvet',
    descripcion: 'Helado con base de tarta de queso y notas de vainilla.',
    image: '../assets/images/IceCream/redvelvet.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 6,
    nombre: 'Cheesecake',
    descripcion: 'Extraordinario helado de tarta de queso con salsa de fresa y trocitos de galleta crujiente.',
    image: '../assets/images/IceCream/cheesecake.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 7,
    nombre: 'Caramel Chai Latte',
    descripcion:
      'El delicioso sabor de caramelo a través de un sublime helado de caramelo, salsa y crujientes trozos de caramelo.',
    image: '../assets/images/IceCream/caramelchailatte.png',
    precio: 6.99,
    stock: 10
  },
  {
    id: 8,
    nombre: 'Dulce de Leche',
    descripcion: 'Helado de dulce de leche con remolinos de salsa de dulce de leche.',
    image: '../assets/images/IceCream/dulceleche.png',
    precio: 6.99,
    stock: 10
  }
];

const vainilla = document.getElementById('vainilla');
vainilla.addEventListener('change', checkedVainilla);

const chocolate = document.getElementById('chocolate');
chocolate.addEventListener('change', checkedChocolate);

const caramelo = document.getElementById('caramelo');
caramelo.addEventListener('change', checkedCaramelo);

const newin = document.getElementById('newin');
newin.addEventListener('change', checkedNewin);

guardarFiltros = [];

function checkedVainilla() {
  console.log(this.guardarFiltros);
  if (vainilla.checked) {
    this.guardarFiltros.push('vainilla');
  } else {
    const vainillaPosition = this.guardarFiltros.indexOff('vainilla');
    this.guardarFiltros.splice(vainillaPosition, 1);
  }
  console.log(this.guardarFiltros);
}

function checkedChocolate() {
  console.log(chocolate.checked);
}
function checkedCaramelo() {
  console.log(caramelo.checked);
}
function checkedNewin() {
  console.log(newin.checked);
}

function pintarHelados() {
  const contenedor = document.getElementById('heladoContainer');

  helados.forEach(helado => {
    const card = document.createElement('div');
    card.classList.add('helado-card');

    card.innerHTML = `
      <img src="${helado.image}" alt="${helado.nombre}">
      <h3>${helado.nombre}</h3>
      <p>${helado.descripcion}</p>
      <div class="precio">${helado.precio.toFixed(2)}€</div>
      <div class="quantity-container">
        <label for="cantidad-${helado.id}">Cantidad:</label>
        <input id="cantidad-${helado.id}" type="number" value="1" min="1" max="${helado.stock}">
      </div>
      <button>Añadir producto</button>
   `;

    contenedor.appendChild(card);
  });
}

window.onload = pintarHelados;
