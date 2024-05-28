///variables del programa
// Arreglo de pedidos inicializado con el contenido de localStorage o un arreglo vacío si no hay nada en localStorage
let arregloPedidos= JSON.parse(localStorage.getItem("pedidos")) || [];
//variable de los divs
let divConfirmaciones=document.querySelector(".confirmaciones")
//variables de los botones
let botonCargar=document.querySelector("#cargar")
let botonRefrescar=document.querySelector("#refrescar")
///variables de los inputs
let inputNombre=document.querySelector("#nombre")
let inputAutor=document.querySelector("#autor")
let inputDireccion=document.querySelector("#direccion")
//variable de la ul
let listaDesordenada=document.querySelector("#listaDesordenada")
//variable del span para generar numero de pedido aleatorio
let numeroPedido=document.querySelector("#pedido")

//funciones
//funcion para borrar todos los inputs
function borrarInputs(){
   inputNombre.value=""
   inputAutor.value=""
   inputDireccion.value=""
}

//funcion para generar un numero al azar para simular un numero de pedidos
function randomNumber(){
   let numeroRandom=Math.floor(Math.random()*1000)
   return numeroRandom
}

//funcion para borrar numero de pedidos
function borrarNroPedido(){
   numeroPedido.textContent=""
}

// Función para guardar los pedidos en el almacenamiento local
function guardarPedidosEnLocalStorage() {
   localStorage.setItem("pedidos", JSON.stringify(arregloPedidos));
}

// Función para cargar los pedidos guardados en el almacenamiento local al iniciar la página
function cargarPedidosDesdeLocalStorage() {
   arregloPedidos.forEach(pedido => {
      let item = new Pedido(pedido.nombre, pedido.autor, pedido.direccion);
   });
}
//ah window le damos un evento de load para que al cargar la pagina sigan apreciendo los pedidos cargados
window.addEventListener("load", function() {
   cargarPedidosDesdeLocalStorage();
});

//creamos una funcion para que el numero de pedidos siga apreciendo despues de recargar la pagina y lo guarde en local storage
function generarYGuardarNumeroPedidoAleatorio() {
   let numeroPedidoAleatorio = randomNumber()//guardamos en la variable a la funcion randomnumber que genera el pedido;
   localStorage.setItem("numeroPedidoAleatorio", numeroPedidoAleatorio);
   numeroPedido.textContent = "Nro. de pedido: " + numeroPedidoAleatorio;
}

//en esta funcion traemos del local storage al numero de pedido guardado
function cargarNumeroPedidoAleatorioDesdeLocalStorage() {
   let numeroPedidoGuardado = localStorage.getItem("numeroPedidoAleatorio")
   numeroPedidoGuardado ? numeroPedido.textContent = "Nro. de pedido: " + numeroPedidoGuardado : null }//aplicamos operador ternario

   
//ah window le damos un evento de load para que al cargar la pagina sigan apreciendo el numero de pedido
window.addEventListener("load", function() {
   cargarNumeroPedidoAleatorioDesdeLocalStorage();
});


//instanciamos un objeto con clase pedido que tiene su metodo crearitems
class Pedido{
   constructor(nombre,autor,direccion){
      this.nombre=nombre
      this.autor=autor
      this.direccion=direccion
      this.cargarItems(nombre,autor,direccion)
   }
   ///el metodo creara los li que iran dentro de los ul
   cargarItems(nombre,autor,direccion){
      let listItems=document.createElement("li")
      listItems.textContent="✓ El libro titulado " + nombre + ", del autor  " + autor + " será llevado a  la dirección " + direccion
      listaDesordenada.appendChild(listItems)
      
   }

}

//definimos el comportamiento de los botones
//boton cargar
//en la funcion definira el numero de pedidos maximo es 5 en ese caso el condicional valida
//que se llenen los campos y que al cargarlos no supere 5 pedidos
botonCargar.addEventListener("click",function(){
   if (inputNombre.value && inputAutor.value && inputDireccion.value ){
      //en este condicional vamos validando con el obejto instanciado y tomando el valor de cada input con value
      //y se ira agregando al arreglo vacio con push
if(arregloPedidos.length < 5){
   let item=new Pedido(inputNombre.value,inputAutor.value,inputDireccion.value )
   borrarInputs()
   arregloPedidos.push(item)
   guardarPedidosEnLocalStorage(); // Guardar los pedidos al agregar uno nuevo
   
}else{
borrarInputs()//si el usuario supera los 5 pedidos se borraran los inputs
}}
else {
   borrarInputs()//si el usuario no completa todos los campos se borran los inputs
   
}
if (arregloPedidos.length == 1){//en este condicional generamos un nuero de pedido al azar
   generarYGuardarNumeroPedidoAleatorio();
   
}

})


//boton refrescar
botonRefrescar.addEventListener("click",function(){
   //seleccionamos todos los li y los recorremos al arreglo con for of y los removemos de la lista
   let itemsLista=document.querySelectorAll("li")
   for(let value of itemsLista){
      listaDesordenada.removeChild(value)
   }
   arregloPedidos=[]
   borrarInputs()
   borrarNroPedido()
   localStorage.removeItem("pedidos");
})   