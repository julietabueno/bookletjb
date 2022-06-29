//Actividad 1

/* let nombre = "Homero";
let apellido = "Simpson";
let edad = "35";

console.log (nombre);
console.log(apellido);
console.log(edad);

 */

//Actividad 2

/* const ciudad1 = "Springfield";
const ciudad2 = "Buenos Aires";
const ciudad3 = "La Pampa";
const ciudad4 = "Escobar";
const ciudad5 = "Vicente Lopez";
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

 */
//Actividad 3


/* let nombreapellido    = "Julieta Bueno";
let direccion  = "Barrio El Naudir";
let pais       = "Argentina";
let fnacimiento = "12-09-1984";
const codigo   = "B47U89RE243";
let carnet = "Codigo: " + codigo + " " +
            "Nombre: " + nombreapellido + " " +
            "Direccion: " + direccion + " " +
            "Pais: " + pais + " " +
            "Fecha de Nacimiento: " + fnacimiento;

console.log(carnet);
 */

//Actividad 4
/*
let integrante1 = prompt('Ingrese integrante 1');
let integrante2 = prompt('Ingrese integrante 2');
let integrante3 = prompt('Ingrese integrante 3');
let integrante4 = prompt('Ingrese integrante 4');
let integrante5 = prompt('Ingrese integrante 5');
let familia =   "1) "+integrante1+" "+
                "2) "+integrante2+" "+
                "3) "+integrante3+" "+
                "4) "+integrante4+" "+
                "5) "+integrante5;
console.log(familia);

 */


//Actividad 5
/* let precio = parseFloat(prompt("INGRESAR PRECIO"));
let descuento20 = precio - (precio  * 0.2);
let descuento30 = precio - (precio  * 0.3);
console.log(descuento20);
console.log(descuento30); */



//CLASE 2

//Actividad 1 - YO NO FUI

/* let nombre = prompt("Ingrese su nombre").toLowerCase();
let quienfue = "lucas";

if (nombre == quienfue){
    console.log("Fui Yo");
} else{
    console.log("Yo no fui")
}
 */


//Actividad 2 - Presionar Y
/*
let letra = prompt("Ingrese una letra");

if (letra == "y" || letra == "Y") {
    console.log("Correcto");
} else {
    console.log("Error");
} */


//Actividad 3 - ESCOGER PERSONAJE

/* let numero = prompt("Ingrese un número");

if (numero == 1) {
    console.log("Elegiste a Homero");
} else if (numero == 2) {
    console.log("Elegiste a Marge")
} else if (numero == 3) {
    console.log("Elegiste a Bart")
} else if (numero == 4) {
    console.log("Elegiste a Lisa")
} else
    console.log("Ingresa otro número") */



//Actividad 4 -   PRESUPUESTO

/* let numero = prompt("Ingrese un número");
if (numero >= 0 && numero <= 1000) {
    console.log("Presupuesto bajo");
} else if (numero > 1000 && numero <3001) {
    console.log("Presupuesto medio");
} else if (numero>3000){
    console.log("Presupuesto alto");
} else [
    console.log("Ingrese un numero natural")
] */



//CLASE 3


//Actividad 1 - El Pizarron

/* let numero = prompt("Ingrese un numero");
let texto = prompt("Ingrese una frase");
let i = 0;

for (i = 0; i < numero; i++){
alert(texto)
}
 */

//Actividad 2 - EL CUADRADO ORDINARIO

/* let rep = parseFloat(prompt("Por favor, ingrese cantidad de lados"));


for(let i =0; i<rep; i++){
    if (i>3){
        break;
    }
    alert("lado");
} */

//Actividad 3 - REGISTRO DE ALUMNOS
let alumno = '';

for (let i = 0; i < 10; i++) {
    alumno += prompt("Por favor, ingrese nombre del alumno") + "\n";
}
alert(alumno);


