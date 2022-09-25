let productos = [];
let catalogo
let inputCantidad

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

    botonLimpiarStorage = document.getElementById("botonLimpiarStorage");

} 
function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
    btnLimpiarStorage.onclick = eliminarStorage 
}
  
function eliminarStorage (){ 
    localStorage.clear();
    productos = []

}


  function validarCompra(event) { 
    event.preventDefault();
    let cantidad = parseInt(inputCantidad.value);
  
    const idExiste = catalogo.some((producto) => producto.id === catalogo);
    if (!idExiste) {
      let producto = new catalogo(
        cantidad
      );
  
      catalogo.push(producto);
    catalogo.reset();
    actualizarProductosStorage ();
  }}

  function eliminarProducto(idProducto) {
    let columnaBorrar = document.getElementById(`columna-${idProducto}`);
    let indiceBorrar = productos.findIndex(
      (producto) => Number(producto.id) === Number(idProducto)
    );
  
    productos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    actualizarProductosStorage() 
  }