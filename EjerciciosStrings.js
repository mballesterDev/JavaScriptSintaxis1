//Muestra la longitud del texto: “   Me gusta JavaScript  ”. (primero eliminando los espacios)).

txt1 = '   Me gusta JavaScript   '
console.log(txt1.trim().length)

//Crea una variable con la cadena “En un lugar de la Mancha” muestra si contiene la m 
//Y haz modificaciones etxra

cadena1 = 'en un lugar de la Mancha'
console.log(cadena1.includes('M')) //TRUE
console.log(cadena1.slice(6, 11))
console.log(cadena1.toUpperCase())
console.log(cadena1.replace('Mancha', 'Cantabria'))


//Convierte ests colores en un array

colores = 'amarillo azul rojo verde violeta'
console.log(colores.split())

//Elimina los espqacios 
frase = 'Quiero eliminar los espacios de esta frase'
console.log(frase.replaceAll(' ', ''))