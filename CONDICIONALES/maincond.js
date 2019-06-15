//Condicionales

// if(condicion) {
//     pasos a efectuar dependiendo de la condicion
// }else{
//     Pasos a efectuar en caso de que no se cumpla la condicion
// } 
// >< = == ===


// let nombre = "Billy";
// let edad = prompt(nombre + ",ingresa tu edad");
// let edadlegal = 18,

// if(edad<edadlegal){
//     console.log("no puedes pasar!!")
// }else{
//     console.log("Puedes pasar")
// }


//let edad = prompt("ingresa tu edad");

// if(edad >=18){
//     console.log("puedes conducir")
// }else if (edad > 15){
//     console.log ("puedes conducir con permiso")
// }else{
//     console.log ("lo siento no puedes conducir")
// }

// "let password = prompt("Ingresa Password");

// if(password==="gaby"){
//     console.log("Puedes pasar")
// }else{
//     console.log("password incorrecto")
// }"

// && || !

// let num = prompt ("ingresa un número")
// if( num%2 === 0){
//          console.log("par")
//      }else{
//      console.log ("impar")
//     }

let jugador1 = prompt ("elige piedra, papel o tijeras");
let jugador2 = prompt ("elige piedra, papel o tijeras");

if(jugador1===jugador2){
    console.log ("empate")
}else if(jugador1==="piedra" && jugador2==="papel"){
    console.log("Ganador Jugador 2 ")
} else if ( jugador1==="piedra" && jugador2==="tijeras"){
    console.log("Ganador jugador1")
}else if(jugador1==="papel" && jugador2==="piedra"){
    console.log ("ganador jugador1 ")
}else if(jugador1==="papel" && jugador2==="tijeras"){
    console.log("ganador jugador2")
}else if(jugador1==="tijeras" && jugador2==="piedra"){
    console.log("ganador jugador 2")
}else if (jugador1="tijeras" && jugador2=== "papel"){
    console.log("ganador jugador1")
}









     




