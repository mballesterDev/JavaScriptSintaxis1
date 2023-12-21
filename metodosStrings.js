// len
let frase = 'Hola';
let longitud = frase.length; //Si es un número hay que convertirlo primero a String para poder trabajar con él con toString()
console.log(longitud);

//formateo
let nombre1 = 'Manel';
let edad = '20';
console.log(`Hola mi nombre es ${nombre1} y tengo ${edad} años`); //Hay que usar backtics ``

//Mayusculas minusculas
let mayus = 'pasar esto a mayus';
console.log(mayus.toUpperCase());
let minis = 'PASAR ESTO A MINUS';
console.log(minis.toLowerCase());

//Devolver el caracter en una posición específica
let devolverCracter = ' prueba 1';
console.log(devolverCracter.charAt(3));

//replace
let reemplazar = 'que tal, Paco?';
console.log(reemplazar.replace('Paco', 'Sofia')); //Solo reemplaza los espacios de el primer valor que encuentra

let frase = 'Quiero eliminar los espacios de esta frase';
console.log(frase.replaceAll(' ', '')); //reemplaza todos los valores 

//Eliminar espacios ambos lados, izquierda y derecha
let eliminarEspacios = '  Me enctanta JS   ';
console.log(eliminarEspacios.trim());

let eliminarEspacios = '  Me enctanta JS   ';
console.log(eliminarEspacios.trimLeft());

let eliminarEspacios = '  Me enctanta JS   ';
console.log(eliminarEspacios.trimRight());

//Slice (obteneralgunas partes)
let frase2 = 'Parte1 Parte2 ';
console.log(frase2.slice(0, 6)); //Parte1
console.log(frase2.slice(7)); //de la 7 al final Parte2

let str = "Hola, mundo!";
console.log(str.substring(0, 4)); // Lo mismo pero este solo permite indices positivos

//Split Dividir un texto y crear un array
let palabrassueltas = 'Elemento1 elemento2 elemento3';
console.log(palabrassueltas.split());

//indice indexOf
let frase3 = 'prueba123';
console.log(frase3.indexOf('e')); //devule la posición 3 ya que empieza en 0 

//último indice
const lastIndex = str.lastIndexOf(subStr);
console.log(lastIndex);

//includes Comprobar si una cadena d etexto incluye un valor especifico
let cadena1 = 'en un lugar de la Mancha';
console.log(cadena1.includes('M'));
