
let numero = prompt('Seleccione una opcion');
numero = parseInt(numero);

while (numero !== 0) {
    switch(numero){
        case 1:
            console.log(`Has seleccionado el número ${numero}`);
            break;
        case 2:
            console.log(`Has seleccionado el número 2`);
            break;
        default:
            console.log('Número equivocado');
            break;
    }
    numero = parseInt(prompt('Seleccione otra opción (0 para salir)'));
}