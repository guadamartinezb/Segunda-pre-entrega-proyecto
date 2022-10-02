let productoss = [];
let catalogo
let productos 
let usuario
let botonCompra

let identificacionForm
let identificacionC
let usuarioC
let usuarioText

let botonLimpiarStorage;
let form;
let inputId;
let inputNombre;
let inputprecio;
let inputCantidad;
let contenedorDelosProductos;

class maquillaje {
  constructor(nombreproducto, precio, cantidad) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.nombreproducto = nombreproducto.toUpperCase();
    this.precio = precio;
    this.cantidad = cantidad;
  }
  totalPrecioproducto = () => this.precioCompra * this.cantidad;

}
function inicializarElementos() {
  form = document.getElementById("form");
  inputId = document.getElementById("inputId");
  inputNombre = document.getElementById("inputNombreProducto");
  inputPrecioCompra = document.getElementById("inputPrecioCompra");
  inputCantidad = document.getElementById("inputCantidad");
  contenedorDelosProductos = document.getElementById("contenedorDelosProductos");


  catalogo = document.getElementById("cantidad")
  inputCantidad = document.getElementById("inputCantidad")

  botonCompra = document.getElementById("botonCompra");
  nombreproducto = document.getElementById("nombreproducto");
  productos = document.getElementById("productos")

  botonLimpiarStorage = document.getElementById("botonLimpiarStorage");

  identificacionForm = document.getElementById("identificacionForm ");
  inputUsuario = document.getElementById("inputUsuario");

  identificacionC = document.getElementById("identificacionC");
  usuarioText = document.getElementById("usuarioText");
  usuarioC = document.getElementById("usuarioC");

}
function inicializarEventos() {
  cantidad.onsubmit = (event) => validarCantidad(event);
  btnLimpiarStorage.onclick = eliminarStorage
  identificacionForm.onsubmit = () => identificarElUsuario

}
function identiciarUsuario(event) {
  event.preventDefault()
  usuario = inputUsuario.value
  identificacionForm.reset() //actualizo info en storage
  actualizarUsuarioStorage()
  mostrarusuarioText()
}

function mostrarusuarioText() {
  identificacionC.hidden = true
  usuarioC.hidden = false
  usuarioText.innerHTML += '${usuario}'
}

function eliminarStorage() {
  localStorage.clear();
  productoss = []
  contenedorDelosProductos.innerHTML = ""
}


function validarCantidad(event) {
  event.preventDefault();
  let idProducto = inputId.value;
  let nombre = inputNombre.value;
  let precio = parseFloat(inputprecio.value);
  
  let cantidad = parseInt(inputCantidad.value);
  const idExiste = catalogo.some((producto) => producto.id === catalogo);
  if (!idExiste) {
    let producto = new catalogo(
      idProducto,
      nombre,
      cantidad,
      precio
    );

    catalogo.push(producto);
    catalogo.reset();
    actualizarProductosStorage();
    pintarProductos();

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

function pintarProductos() {
  productosC.innerHTML = "";
  productoss.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">ID:
                    <b>${producto.id}</b>
                </p>
                <p class="card-text">Nombre:
                    <b>${producto.nombre}</b>
                </p>
                <p class="card-text">Precio compra:
                    <b>${producto.precio}</b>
                </p>
          
                <p class="card-text">Cantidad:
                    <b>${producto.cantidad}</b>
                </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger" id="botonEliminar-${producto.id}" >Eliminar</button>
                </div>
            </div>`;

    contenedorDelosProductos.append(column);

    let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
    botonEliminar.onclick = () => eliminarProducto(producto.id);
  });
}
function actualizarUsuarioStorage (){
  localStorage.setItem("usuario", usuario )
}



//llamo lo que hice antes para almacenar en storage
function actualizarProductosStorage() {
  let productosJSON = JSON.stringify(productoss);
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
    mostrarusuarioText()
  }
}

function main() {
  inicializarElementos();
  inicializarEventos();
  obtenerProductosStorage();
  obtenerUsuarioStorage ();

}

main();