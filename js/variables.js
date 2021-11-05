//VARIABLES
let nombre = 'Diego Valdera';
const edad = 27;
console.log(nombre, edad)

//TIPO DE DATOS
let string = 'Diego'; //string
let number = 35 // number
let verdadero = true; // booleano
let falso = false; // booleano
let nulo = null // nulo
let narried; // underfined -> no existe
let hash = Symbol('123456');// simbolo - valor unico
let alumno = {
    sexo:'f',
    edad: 35,
    grado:5,
}; // objeto

console.log(string, typeof string)
console.log(number, typeof number)
console.log(verdadero, typeof verdadero)
console.log(falso, typeof falso)
console.log(nulo, typeof nulo)
console.log(narried, typeof narried)
console.log(hash, typeof hash)
console.log(alumno,typeof alumno)

// CAMBIAR TIPO DE DATOS
let age2 = 30;
console.log(age2, typeof age2);
console.log(age2, String(age2).replace('30',200))

let age3 = '100';
console.log(age3, typeof age3);
console.log(Number(age3).toFixed(2))
