/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */

let x;

for (x = 0; x < 10; x++) {
    console.log(x);
}

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

let x = 0;

for (i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        /* he agregado mas detalle por comprobaciones internas mias */
        console.log("El numero que da 0, al dividirlo entre 2 es:" + " " + i);

        /* he realizado el segundo console para comprobación interna */
    } else {
        console.log("No funciona, ya que el resto dividido entre 2 no es 0...")
    }
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */


//creo que hay una manera más sencilla de hacerlo, pero por ahora la más rápdia que se me ocurre es ésta
let cuenta;
for (cuenta = 0; cuenta < 11; cuenta++) {

    switch (cuenta) {

        case 1:
            console.log('Intentando dormir');
            break;
        case 2:
            console.log('Intentando dormir');
            break;
        case 3:
            console.log('Intentando dormir');
            break;
        case 4:
            console.log('Intentando dormir');
            break;
        case 5:
            console.log('Intentando dormir');
            break;
        case 6:
            console.log('Intentando dormir');
            break;
        case 7:
            console.log('Intentando dormir');
            break;
        case 8:
            console.log('Intentando dormir');
            break;
        case 9:
            console.log('Intentando dormir');
            break;
            /* también puedo usa un case 10 con su break... */
        default:
            console.log('Dormido');

    }
}