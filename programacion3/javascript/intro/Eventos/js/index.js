/*const h1El = document.querySelector("h1");
const nombreUsuario = "Pepe";

h1El.addEventListener("click", () => {
  h1El.innerText = `Hola ${nombreUsuario}`;
});*/

const btn = document.getElementById("btn");
const bodyEl = document.querySelector("body");

function stringLength(str) {
  return str.length;
}
btn.addEventListener("click", () => {
  bodyEl.classList.toggle("oscuro");
  btn.innerText = bodyEl.classList.contains("oscuro")
    ? "Modo Claro"
    : "Modo Oscuro";
});

const textAreaEl = document.getElementById("comentario");
const pEl = document.getElementById("contador");
const pE1ClassColor = "rojo";

const limite = 50;

textAreaEl.addEventListener("input", () => {
  const largoFrase = textAreaEl.value.length;

  if (largoFrase <= limite) {
    pEl.innerText = `Te quedan  ${limite - largoFrase} caracteres`;
    if (pEl.classList.contains(pE1ClassColor)) {
      pEl.classList.remove(pE1ClassColor);
    }
  } else {
    pEl.innerText = `Te pasaste  ${limite - largoFrase} caracteres`;
    if (!pEl.classList.contains(pE1ClassColor)) {
      pEl.classList.add(pE1ClassColor);
    }
  }
});
const buscadorEl = document.getElementById("buscador");
const itemsEl = document.querySelectorAll(".nombre li");
const listEl = document.querySelector(".nombre");
console.log(itemsEl);
const nombres = [...itemsEl].map((item) => {
  return item.innerText;
});

console.log(nombres);

buscadorEl.addEventListener("input", () => {
  const texto = buscadorEl.value.toLowerCase();
  const lista = nombres.filter((item) => {
    return item.toLowerCase().includes(texto);
  });
  console.log(lista);
  listEl.innerHTML = "";
  lista.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    listEl.appendChild(li);
  });
});

const productosConDescuento = [
  {
    id: 1,
    nombre: "mouse",
    descripcion: "mouse gamer",
    precio: 100,
    descuento: 10,
  },
  {
    id: 2,
    nombre: "teclado",
    descripcion: "teclado gamer",
    precio: 190,
    descuento: 15,
  },
  {
    id: 3,
    nombre: "monitor",
    descripcion: "monitor gamer",
    precio: 350,
    descuento: 20,
  },
];

const calcularPrecioFinal = (precio, descuento) => {
  return precio - (precio * descuento) / 100;
};
const precioTotal = productosConDescuento.reduce((acumulador, producto) => {
  return acumulador + calcularPrecioFinal(producto.precio, producto.descuento);
});

//cuando retorno un objeto tengo que usar () para que no lo tome como un bloque de codigo en una funcion flecha
const generarCards = (producto) => {
  producto.map((Producto) => {
    const precioFinal = calcularPrecioFinal(
      Producto.precio,
      Producto.descuento
    );
    const card = document.createElement("div");

    card.innerHTML = ` 
    <h3>${Producto.titulo}</h3>
    <p>${Producto.precio}</p>
    <p>${Producto.descuento}</p>
    <span>${precioFinal}</span>
  `;
    return card;
  });
};
const contenedorEl = document.getElementById("product-container");

const cards = generarCards(productosConDescuento);

//contenedorEl.append(...cards);
cards.forEach((cards) => {
  contenedorEl.appendChild(card);
});
