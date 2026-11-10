/* Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones.

Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
*/

/*
let notas = {
    nombre: "Pepe",
    ingles: 9,
    programacion: 8,
    html: 7,
    media : function () {
        return (this.ingles + this.programacion + this.html) / 3;
    }
};

console.log(notas.nombre +": "+ notas.media());
*/

/* Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado 

Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).

let producto = {
    articulo: "Vestido",
    precio: 400,
    descuento: 10,
    total: function () {
        return (this.precio - (this.descuento * this.precio / 100));
    }
};
console.log(producto.articulo +": "+ producto.total());*/

/* En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.
Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. Densidad deberá devolver 19,4. */

class Piedra {
    constructor(masa, volumen) {
        this.masa= masa;
        this.volumen= volumen;
    };

    densidad= function () {
        return this.masa/this.volumen;
        };
}

let oro= new Piedra (194,10);
console.log(oro.densidad());

