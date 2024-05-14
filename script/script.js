//el programa es simulador de compras de libros,pedira al usuario datos de autor nombre y entrega y generara su pedido

//alerts
alert("En este programa deberas realizar un pedido de libros y a donde deseas resivirlo")
alert("ATENCION!!SOLO PUEDES SOLICITAR HASTA 10 LIBROS")
alert("Por favor selecciona una opcion: \n 1)Ver listado de libros no disponibles \n 2)Solicitar libro \n 3)Realizar pedido  \n 4)Ver listado de libros recien agregados al stock " )

//variable que inicia el ciclo switch
let opcionUsuario=prompt("ingrese una opcion")
switch(opcionUsuario){
   case "1":
    //arreglo utilizado para mostrar los libros no disponibles  
   librosNoDisponibles=[" Harry Potter y el legado maldito.","\n Harry Potter y la piedra filosofa "," \n Maze Runner-Virus letal - El comienzo (renovación)","\n Inteligencia emocional (Daniel Goleman)","\n El miedo a la Libertad (Erich Fromm)","\n Air. La historia de Michael Jordan"]
   alert(librosNoDisponibles)

   break
   case "2":
      //arreglo vacio que se ire completando atravez de un while con los datos que brinde el usuario
      let librosAgregados=[]
      alert("En esta seccion podra solicitar nombres de libros que le gustaria que sumemos a nuestro listado")
      alert("!!IMPORTANTE!!,PARA SALIR ESCRIBA ESC")
      let usuario=prompt("ingrese nombre de libros que le gustaria que sumemos a nuestro listado")
      while(usuario.toLowerCase()!="esc"){
         librosAgregados.push(usuario)
         usuario=prompt("ingrese nombre del libro")
         if(usuario.toLowerCase()=="esc"){
            alert("Los libros que solicitaste fueron : " +"\n"+librosAgregados )
            alert("Gracias por solicitar,pronto los estaremos sumando a nuestro listado")
         }
      }


   break
   case "3":
      //variables del case 3
      let numeroDePedidos=parseInt(prompt("Cuantos libros deseas solicitar?"))
      let contador=0
      let ingresados=""

   //bucle que pedira datos al usuario hasta que la condicion se cumpla
      while(numeroDePedidos<=10 && contador<numeroDePedidos){
         let nombreLibro=prompt("ingrese nombre del libro")
         let autor=prompt("ingrese autor")
         let direccion=prompt("ingrese direccion")

         //variables ingresados con strings vacia que se ira completando a medida que el contador incremente su vuelta con datos del usuario
         ingresados +="el libro "+ nombreLibro +" del autor " +autor + " sera enviado a "+ direccion +"\n"
         contador=contador+1

         alert(ingresados)

          
      }

   break
   case "4":
      alert("aqui podes ver el listado de libros que aregamos recientemente a nuestro stock")
      //instanciamos un objeto nuevo que iremos completando e implementando dentro del arreglo vacio de la variable libros nuevos
      class Libro{
         constructor(nombre,nuevo,autor){
            this.nombre=nombre
            this.nuevo=nuevo
            this.autor=autor
         }
      }
      
      let librosNuevos=[]
      //agregamos los libros nuevos al arreglo vacio con el metodo push
      librosNuevos.push(new Libro("Los vecinos mueren en las novelas",true,"Sergio Aguirre"))
      librosNuevos.push(new Libro("Mi planta de naranja lima",false,"José Mauro de Vasconcelos"))
      librosNuevos.push(new Libro("Campos de fresas",false,"Jordi Sierra i Fabra"))
      librosNuevos.push(new Libro("El principito",true,"Antoine de Saint-Exupéry"))
      librosNuevos.push(new Libro("En agosto nos vemos",true,"Gabriel García Márquez"))
      

      //con for each recorremos el arreglo mostrando los libros agregados
       librosNuevos.forEach(function(libro){
              alert(libro.nombre)
          })

          alert("Acontinuacion te detallamos los libros que se encuentran usados pero en buen estado")

          //creamos una funcion de corroborar que usara el metodo filter para mostrar los libros con estado usado(false)
          function corroborarEstadoDeLibro(){
          let buscarEstadoDeLibro=librosNuevos.filter(condicionDeLibro=>condicionDeLibro.nuevo===false)
          //dentro iniciamos un for each para que nos muestre el nnombre de los libros usados
         buscarEstadoDeLibro.forEach(function(estado){
            alert(estado.nombre)
         })
      }corroborarEstadoDeLibro()

   break
  
          
   default:
      alert("!!ERROR!!,no selecionaste una opcion valida")
}
                    
