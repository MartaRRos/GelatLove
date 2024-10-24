// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

//NAVBAR MOBILE
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('navbar-links');
const banner = document.getElementById('banner');

hamburgerIcon?.addEventListener('click', () => {
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
    stock: 10,
    ingredientes: ['vainilla'],
    nuevo: false
  },
  {
    id: 2,
    nombre: 'Chocolate',
    descripcion: 'Helado de puro chocolate belga con delicadas láminas de chocolate belga negro.',
    image: '../assets/images/IceCream/chocolate.png',
    precio: 6.99,
    stock: 5,
    ingredientes: ['chocolate'],
    nuevo: false
  },
  {
    id: 3,
    nombre: 'Strawberry Cream',
    descripcion: 'Helado de crema y fresa con trozos de las fresas más selectas.',
    image: '../assets/images/IceCream/fresacrema.png',
    precio: 6.99,
    stock: 10,
    ingredientes: ['fresa'],
    nuevo: true
  },
  {
    id: 4,
    nombre: 'Vanilla Raspberry',
    descripcion: 'Helado de frambuesa con helado de vainilla y crujiente de chocolate.',
    image: '../assets/images/IceCream/vainillaraspberry.png',
    precio: 6.99,
    stock: 10,
    ingredientes: ['vainilla', 'chocolate'],
    nuevo: false
  },
  {
    id: 5,
    nombre: 'Red Velvet',
    descripcion: 'Helado con base de tarta de queso y notas de vainilla.',
    image: '../assets/images/IceCream/redvelvet.png',
    precio: 6.99,
    stock: 10,
    ingredientes: ['vainilla'],
    nuevo: true
  },
  {
    id: 6,
    nombre: 'Cheesecake',
    descripcion: 'Extraordinario helado de tarta de queso con salsa de fresa y trocitos de galleta crujiente.',
    image: '../assets/images/IceCream/cheesecake.png',
    precio: 6.99,
    stock: 10,
    ingredientes: ['fresa'],
    nuevo: true
  },
  {
    id: 7,
    nombre: 'Caramel Chai Latte',
    descripcion: 'Delicioso sabor de caramelo a través de un sublime helado de caramelo, salsa y trozos de caramelo.',
    image: '../assets/images/IceCream/caramelchailatte.png',
    precio: 6.99,
    stock: 10,
    ingredientes: ['caramelo'],
    nuevo: false
  },
  {
    id: 8,
    nombre: 'Dulce de Leche',
    descripcion: 'Helado de dulce de leche con remolinos de salsa de dulce de leche.',
    image: '../assets/images/IceCream/dulceleche.png',
    precio: 6.99,
    stock: 10,
    ingredientes: ['caramelo'],
    nuevo: false
  }
];

//FILTROS
const vainilla = document.getElementById('vainilla');
vainilla?.addEventListener('change', filtrarHelados);

const chocolate = document.getElementById('chocolate');
chocolate?.addEventListener('change', filtrarHelados);

const caramelo = document.getElementById('caramelo');
caramelo?.addEventListener('change', filtrarHelados);

const newin = document.getElementById('newin');
newin?.addEventListener('change', filtrarHelados);

function filtrarHelados() {
  const contenedor = document.getElementById('heladoContainer');
  contenedor.innerHTML = '';
  if (vainilla.checked || chocolate.checked || caramelo.checked || newin.checked) {
    helados.forEach(helado => {
      const card = document.createElement('div');
      card.classList.add('helado-card');

      if (
        (vainilla.checked && helado.ingredientes.includes('vainilla')) ||
        (chocolate.checked && helado.ingredientes.includes('chocolate')) ||
        (caramelo.checked && helado.ingredientes.includes('caramelo')) ||
        (newin.checked && helado.nuevo)
      ) {
        card.innerHTML = `
        <img src="${helado.image}" alt="${helado.nombre}">
        <h3>${helado.nombre}</h3>
        <p>${helado.descripcion}</p>
        <div class="precio">${helado.precio.toFixed(2)}€</div>
        <div class="quantity-container">
        <label for="cantidad-${helado.id}">Cantidad:</label>
        <input id="cantidad-${helado.id}" type="number" value="${helado.stock === 0 ? '0' : '1'}" min="${
          helado.stock === 0 ? '0' : '1'
        }" max="${helado.stock}">
        </div>
        <h5>${helado.stock === 0 ? 'No queda stock' : helado.stock < 6 ? 'Quedan pocas unidades' : ''}</h5>
        <button class="addProducts">Añadir producto</button>
      `;

        contenedor.appendChild(card);

        const addHelados = card.querySelector('.addProducts');
        addHelados.addEventListener('click', function () {
          addProducts(helado.id);
        });
        if (helado.stock === 0) {
          addHelados.disabled = true;
        }
      }
    });
  } else {
    const contenedorHeladosTienda = document.getElementById('heladoContainer');
    pintarHelados(contenedorHeladosTienda);
  }
}

//CARD HELADOS
function pintarHelados(contenedorHeladosTienda) {
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
        <input id="cantidad-${helado.id}" type="number" value="${helado.stock === 0 ? '0' : '1'}" min="${
      helado.stock === 0 ? '0' : '1'
    }" max="${helado.stock}">
      </div>
      <h5>${helado.stock === 0 ? 'No queda stock' : helado.stock < 6 ? 'Quedan pocas unidades' : ''}</h5>
      <button class="addProducts">Añadir producto</button>
   `;

    contenedorHeladosTienda.appendChild(card);

    const addHelados = card.querySelector('.addProducts');
    addHelados.addEventListener('click', function () {
      addProducts(helado.id);
    });
    if (helado.stock === 0) {
      addHelados.disabled = true;
    }
  });
}
window.onload = inicio;

function inicio() {
  const contenedorHeladosTienda = document.getElementById('heladoContainer');
  if (contenedorHeladosTienda) {
    pintarHelados(contenedorHeladosTienda);
  }
  actualizarNumeroCarrito();
  const contenedorResumenCompra = document.getElementById('resumenCompra');
  if (contenedorResumenCompra) {
    resumenCarrito(contenedorResumenCompra);
  }
}

//AÑADIR PRODUCTOS AL CARRITO

function addProducts(id) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const cantidad = +document.getElementById(`cantidad-${id}`).value;
  const heladoAdd = { id: id, cantidad: cantidad };
  if (carrito.find(elemento => elemento.id === id)) {
    const heladoCarritoPos = carrito.findIndex(elemento => elemento.id === id);
    carrito[heladoCarritoPos].cantidad = carrito[heladoCarritoPos].cantidad + cantidad;
  } else {
    carrito.push(heladoAdd);
  }
  //Guardar array carrito en el navegador
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarNumeroCarrito();
  bajarStock(heladoAdd);
}

function bajarStock(heladoAdded) {
  const heladoPos = helados.findIndex(helado => helado.id === heladoAdded.id);
  helados[heladoPos].stock = helados[heladoPos].stock - heladoAdded.cantidad;
  const contenedor = document.getElementById('heladoContainer');
  contenedor.innerHTML = '';
  if (vainilla.checked || chocolate.checked || caramelo.checked || newin.checked) {
    filtrarHelados();
  } else {
    const contenedorHeladosTienda = document.getElementById('heladoContainer');
    pintarHelados(contenedorHeladosTienda);
  }
}

function actualizarNumeroCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const numeroCarrito = document.getElementById('cart-count');
  numeroCarrito.textContent = carrito.length;

  const numeroCarritoMobile = document.getElementById('cart-count-mobile');
  numeroCarritoMobile.textContent = carrito.length;
}

function resumenCarrito(contenedorResumenCompra) {
  contenedorResumenCompra.innerHTML = '';
  const heladosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  heladosCarrito.forEach((heladoCarro, i) => {
    const infoHeladoPos = helados.findIndex(helado => helado.id === heladoCarro.id);
    const infoHelado = helados[infoHeladoPos];
    const infoHeladoCard = document.createElement('tr');
    infoHeladoCard.innerHTML = `
      <td><img class="imagenfinal" src="${infoHelado.image}" alt="${infoHelado.nombre}"></td>
      <td>${infoHelado.nombre}</td>
      <td>
        <div class="quantity-control">
          <input type="number" value="${heladoCarro.cantidad}" readonly>
        </div>
      </td>
      <td>${infoHelado.precio} €</td>
      <td><button class="botonEliminar"><img class="eliminar" src="../assets/images/Icons/trash3.svg" alt="Icono de basura"></button></td>
    `;

    contenedorResumenCompra.appendChild(infoHeladoCard);
    const quitarHelados = infoHeladoCard.querySelector('.botonEliminar');
    quitarHelados.addEventListener('click', function () {
      eliminarHelados(infoHelado, heladoCarro.cantidad, i);
    });
  });
  precioTotal();
}

function precioTotal() {
  let precioTotal = 0;
  const heladosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  heladosCarrito.forEach(heladoCarro => {
    const infoHeladoPos = helados.findIndex(helado => helado.id === heladoCarro.id);
    const infoHelado = helados[infoHeladoPos];
    precioTotal += infoHelado.precio;
  });
  const subtotal = document.getElementById('subtotal');
  if (subtotal) {
    subtotal.textContent = precioTotal + '€';
  }
  const total = document.getElementById('total');
  if (total) {
    const iva = precioTotal * 0.21;
    const totalConIva = precioTotal + iva;
    total.textContent = totalConIva.toFixed(2) + '€';
  }
}

function eliminarHelados(helado, cantidad, pos) {
  helado.stock = helado.stock + cantidad;
  helados[helado.id - 1] = helado;
  const heladosCarrito = JSON.parse(localStorage.getItem('carrito'));
  heladosCarrito.splice(pos, 1);
  if (heladosCarrito.length === 0) {
    localStorage.removeItem('carrito');
  } else {
    localStorage.setItem('carrito', JSON.stringify(heladosCarrito));
  }
  actualizarNumeroCarrito();
  const contenedorResumenCompra = document.getElementById('resumenCompra');
  resumenCarrito(contenedorResumenCompra);
}
