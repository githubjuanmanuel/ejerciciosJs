// Capture 740 números, almacénelos en un vector, luego recorra el vector para obtener la suma
// de los inferiores que 860 y el producto de los mayores a 750.

let vectorNumeros = [];
let menoresDe15 = [];
let contadorNumeros = 0;
let suma = 0;
let producto = 1;

const numeros = () => {
  for (let k = 0; k < 100; k++) {
    vectorNumeros.push(k);
  }
};
numeros();
for (let y = 1; y < vectorNumeros.length; y++) {
  if (y < 8) {
    // menoresDe15.push(y);
    suma += vectorNumeros[y];

    if (y > 300) {
      producto = producto * vectorNumeros[y];
    }
  }
  if (y % 42 === 0) {
    console.log(y);
  }
}
console.log(suma);
console.log(producto);

console.log(vectorNumeros);

// const nume = 2;
// const nume2 = 3;
// const nume3 = 4;
// vectorNumeros.push(nume,nume2,nume3)
// console.log(vectorNumeros) forma2
