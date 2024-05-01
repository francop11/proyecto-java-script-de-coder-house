//el programa es simulador de compras de libros,pedira al usuario datos de autor nombre y entrega y generara su pedido

//alerts
alert("en este programa deberas realizar un pedido de libros y a donde deas resivirlo")
alert("ATENCION!!SOLO PUEDES SOLICITAR HASTA 10 LIBROS")

//variables
let numDePedidos=parseInt(prompt("cuntaso libros deseas solicitar?"))
let contador=1
let ingresados=""

//bucle que pedira datos al usuario hasta que la condicion se cumpla
while(numDePedidos<=10 && contador<=numDePedidos ){
let nombreLibro=prompt("ingrese nombre del libro")
let autor=prompt("ingrese autor")
let direccion=prompt("ingrese direccion")

//variables ingresados con strings vacia que se ira completando a medida que el contador incremente su vuelta con datos del usuario
 ingresados +="el libro "+ nombreLibro +" del autor " +autor + " sera enviado a "+ direccion +"\n"
 
 contador=contador+1
 
 alert(ingresados)
}

//function error,compuesta por condicionales que pedira al usuario numeros enteros y mayor a 0 para ejecutar el programa
function error(){
    if(numDePedidos<=-1  ){
        alert("error !! no ingresaste un numero de pedidos valido!!")
     }else if (numDePedidos==0){
        alert("error !! no ingresaste un numero de pedidos valido!!")
     }
    
    }error()
        
          
          
     