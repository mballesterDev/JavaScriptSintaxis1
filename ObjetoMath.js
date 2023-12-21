// Operaciones comunes con el objeto Math

// Redondeo y truncamiento
let num = 3.75;
console.log(Math.round(num));  // Redondea al entero más cercano: 4
console.log(Math.ceil(num));  // Redondea hacia arriba: 4
console.log(Math.floor(num));  // Redondea hacia abajo: 3

// Redondeo decimal
console.log(3.141592653589793.toFixed(2));  // Redondeo a 2 decimales: "3.14"

// Exponenciación y logaritmos
console.log(Math.pow(2, 2));  // elevado a 2
console.log(Math.sqrt(25));  // Raíz cuadrada: 5.0

// Mínimo y máximo
console.log(Math.min(3, 5, 1, 8, 2));  // Valor mínimo: 1
console.log(Math.max(3, 5, 1, 8, 2));  //Valro maximo 8

// Valor absoluto y signo
console.log(Math.abs(-3.14));  // Valor absoluto (eliminar negativo): 3.14
console.log(Math.sign(-3.14));  // Devuelve el signo: -1


//Numeros Aletaorios
let NumeroAleatorio = Math.random() * 100;  
console.log(Math.round(NumeroAleatorio))

//Math.random nos da un número aletorio entre 0 y 1 (con decimales)
//Entonces si lo multiplicamos por cien y luego lo redondeamos para quitar
// los decimales obtenemos un numeor entre 0 y 100






//EXTRA
console.log(Math.log2(8));
// Funciones trigonométricas
let angleRad = (45 * Math.PI) / 180;  // Convierte grados a radianes
console.log(Math.sin(angleRad));  // Seno de 45 grados
console.log(Math.cos(angleRad));  // Coseno de 45 grados
console.log(Math.tan(angleRad));  // Tangente de 45 grados  // Logaritmo base 2 de 8

// Constantes matemáticas
console.log(Math.PI);  // Valor de pi
console.log(Math.E);   // Valor de e


// Operaciones con ángulos
console.log((180 * Math.PI) / 2);  // Convierte radianes a grados: 90.0
console.log((Math.PI / 180) * 180);  