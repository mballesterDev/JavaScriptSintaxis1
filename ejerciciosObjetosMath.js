//Generar número aletorio entre 0 y 100

let NumeroAleatorio = Math.random() * 100;
console.log(Math.round(NumeroAleatorio));

//Decir que numero es mayor o si son iguales

num1 = '7';
num2 = '7';

if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`)
}
else if (num2 > num1) {
    console.log(`${num2} es mayor que ${num1}`)
}
else {
    console.log('son iguales')
}

num3 = '-20';
numSinSigno1 = Math.abs(num3);
num4 = '7';
numSinSigno2 = Math.abs(num4);

if (numSinSigno1 > numSinSigno2) {
    console.log(`${numSinSigno1} es mayor que ${numSinSigno2}`)
}
else if (numSinSigno2 > numSinSigno1) {
    console.log(`${numSinSigno2} es mayor que ${numSinSigno1}`)
}
else {
    console.log('son iguales')
}

//Clacular la raiz cuadradad de 33

console.log(Math.sqrt(33));

//Utiliza los distintos tipos de redondeo para la nota de un alumno

let notaAlumno = prompt('Ingrese su nota');
let notaAlumnoI = parseFloat(notaAlumno); // Convertir la cadena a número

console.log(`Su nota redondeada al alza es ${Math.ceil(notaAlumnoI)}`); 
console.log(`Su nota redondeada a la baja es ${Math.floor(notaAlumnoI)}`);
console.log(`Su nota redondeada es ${Math.round(notaAlumnoI)}`);