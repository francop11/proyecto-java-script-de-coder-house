///variables del programa
//arreglo de pedidos vacio
let arregloPedidos=[]
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
//variable del espan para generar numero de pedido aleatorio
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


//instanciamos un objeto con calse pedido que tiene su metodo crearitems
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
   if (inputNombre.value && inputAutor.value && inputDireccion.value){
      //en este condicional vamos validando con el obejto instanciado y tomando el valor de cada input con value
      //y se ira agregando al arreglo vacio con push
if(arregloPedidos.length < 5){
   let item=new Pedido(inputNombre.value,inputAutor.value,inputDireccion.value )
   borrarInputs()
   arregloPedidos.push(item)
}else{alert("Has llegado al limite de libros por pedido")
   borrarInputs()
}}
else {alert("no han sido completado todos los campos")
   borrarInputs()
   //en este condicional generamos un nuero de pedido al azar
}if (arregloPedidos.length == 1){
        
   numeroPedido.textContent = "Nro. de pedido: " + randomNumber()
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
})   









