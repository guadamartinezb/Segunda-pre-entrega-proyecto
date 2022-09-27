let productoss = [];
let catalogo
let inputCantidad
let botonCompra
let productos

let botonLimpiarStorage;

class maquillaje {
  constructor(nombreproducto, precioCompra, cantidad) {
    this.nombreproducto = nombreproducto.toUpperCase();
    this.precioCompra = precioCompra;
    this.cantidad = cantidad;
  }
  totalPrecioproducto = () => this.precioCompra * this.cantidad;

}
function inicializarElementos() {
  catalogo = document.getElementById("cantidad")
  inputCantidad = document.getElementById("inputCantidad")

  botonCompra = document.getElementById("botonCompra");
  nombreproducto = document.getElementById("nombreproducto");
  productos = document.getElementById("productos")

  botonLimpiarStorage = document.getElementById("botonLimpiarStorage");

}
function inicializarEventos() {
  cantidadD.onsubmit = (event) => validarCantidad(event);
  btnLimpiarStorage.onclick = eliminarStorage

}

function eliminarStorage() {
  localStorage.clear();
  productoss = []

}


function validarCantidad(event) {
  event.preventDefault();
  let cantidad = parseInt(inputCantidad.value);
  let precio = parseInt(precio.value);
  const idExiste = catalogo.some((producto) => producto.id === catalogo);
  if (!idExiste) {
    let producto = new catalogo(
      cantidad,
      precio
    );

    catalogo.push(producto);
    catalogo.reset();
    actualizarProductosStorage();
  }
}

function eliminarProducto(idProducto) {
  let columnaBorrar = document.getElementById(`columna-${idProducto}`);
  let indiceBorrar = productoss.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  );

  productos.splice(indiceBorrar, 1);
  columnaBorrar.remove();
  actualizarProductosStorage()
}

//llamo lo que hice antes para almacenar en storage
function actualizarProductosStorage() {
  let productosJSON = JSON.stringify(productos);
  localStorage.setItem("productos", productosJSON);
}
function obtenerProductosStorage() {
  let productosJSON = localStorage.getItem("productoss")
  //aca valido que hay algo en storage  
  if (productosJSON) {
    productoss = JSON.parse(productosJSON)
    pintarProductos();

  }
}
function obtenerUsuarioStorage() {
  let usuarioAlmacenado = localStorage.getItem("usuario");
  if (usuarioAlmacenado) {
    usuario = usuarioAlmacenado
    mostrarTextoUsuario()
  }
}

function main() {
  inicializarElementos();
  inicializarEventos();
  obtenerProductosStorage();

}

main();