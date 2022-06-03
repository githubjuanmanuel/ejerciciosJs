//console.log("hola mundo");
let a = 10;
var b = 10;
const c = 10;
// c = 20 no se puede hacer pues es un error
console.log(a, b, c);
let n = 5;
let x = 4;
let resultado = 0;
let t1 = 5 + (n * x) / 1;
let t2 = (n * (n - 1) * x ** 2) / 2;
resultado = t1 + t2 + 2;
console.log(resultado);

let y = 5;
let z = 10;

let elevado = 5 ** 2;

console.log(5 ** 2);

console.log("5 ^ 5 es :" + elevado);
console.log(`${y} elevado a la ${z} es : ${elevado}`);
//Formas de imprimer en consola

let prestamo = 5000;
const interes = 700;
let totalAPagar = 0; //Los espacios los cuenta como error
let diferencia = 0;
totalAPagar = prestamo + interes;
diferencia = totalAPagar - prestamo;
console.log(
  `el prestamo fue de ${prestamo}, el interes fue de ${interes}, el total a pagar fue de ${totalAPagar} y la diferencia fue de ${diferencia}`
);
// Que día es hoy

//Ejercicio con el if

// let numdia = 1;
// let semana = 7;
// let díasolicitado = prompt("Ingrese el número de día :");

// if (díasolicitado === "1") {
//   console.log("hoy es Domingo");
// } else if (díasolicitado === "2") {
//   console.log("hoy es Lunes");
// } else if (díasolicitado === "3") {
//   console.log("hoy es Martes");
// } else if (díasolicitado === "4") {
//   console.log("hoy es Miercoles");
// } else if (díasolicitado === "5") {
//   console.log("hoy es Jueves");
// } else if (díasolicitado === "6") {
//   console.log("hoy es Viernes");
// } else if (díasolicitado === "7") {
//   console.log("hoy es Sabado");
// }

// Capture varios datos con: código, nombre, edad, sexo y estatura. Seleccione las mujeres
// solteras con estatura no mayor que 1.79. Imprima la edad promedio de los hombres casados.

let mujerSoltera = 0;
let hombreCasado = 0;
let edadHombreIng = 0;
let edadesHombre = 0;
let estado = "";
let promedioEdadHombres = 0;
let codigo = 0;

//------ Inicio pido código --------
codigo = parseInt(prompt("Ingrese código :"));

//Inicio ciclo
while (codigo !== 0) {
  nombre = prompt("Ingrese nombre :");
  let sexo = prompt("Ingrese sexo :");

  if (sexo === "f") {
    estado = prompt("Estado civil ? :");

    if (estado === "s") {
      estatura = parseFloat(prompt("Ingrese la estatura :"));
    }
    if (estatura < 1.79) {
      mujerSoltera = mujerSoltera + 1;
      codigo = parseInt(prompt("Ingrese código :"));
    }
  } else {
    estado = prompt("Estado civil ? :");
    if (estado === "c") {
      edadHombreIng = parseInt(prompt("Ingrese edad :"));
      hombreCasado = hombreCasado + 1;
      edadesHombre = edadesHombre + edadHombreIng;
      codigo = parseInt(prompt("Ingrese código :"));
    }
  }
}

//---- Fin ciclo mientras -----

promedioEdadHombres = edadesHombre / hombreCasado;

//----- Imprima ------------------
console.log("Promedio edad hombres" + promedioEdadHombres);
console.log("Número de mujeres solteras" + mujerSoltera);
