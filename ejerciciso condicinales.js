function ejercicio1() {

    let r1 = -22;
    while (r1 < 0 || r1 > 1000) {
        r1 = prompt('Escribe un número entre 0 y 9999')
        r1 = parseInt(r1)
        if (r1 < 0 || r1 > 1000) {
            console.log("NÚMERO INCORRECTO")
        }
    }

    console.log(`${r1} tiene ${r1.toString().length} digitos`)
}



function ejercicio2() {

    let usuario = 'manel123'
    let contraseña = 12345
    r1 = 'z'


    while (r1 !== usuario) {
        r1 = prompt(`Escribe tu usuario`)
        if (r1 == usuario) {
            console.log('Usuario Correcto')
        }
        else {
            console.log(`Usuario incorrecto`)
        }

    }
}

function ejercicio3() {

    precioO = parseFloat(prompt('Introduce el precio que te ha costado'))
    caso = parseInt(prompt('Introduce 1 para pagar con tarjeta y 2 para pagar efectivo'))

    switch (caso) {

        case 1:
            precioAñadido = (precioO * 0.10);
            preciFinal = (precioO + precioAñadido);
            console.log(`Has elejido pago con tarjeta entonces se te sumará un 10% del valor total y tu precio será ${preciFinal}`);
            break;
        case 2:
            PrecioDescuento = (precioO * 0.7);
            preciFinal = (precioO - PrecioDescuento);
            break;

    }
}

ejercicio3();


