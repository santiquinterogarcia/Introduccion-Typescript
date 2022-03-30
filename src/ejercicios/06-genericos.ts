/* Génericos */

function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy("Hola Mundo");
let soyNumero = queTipoSoy(10);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/* let soyExplicito = queTipoSoy<number>("Hola Mundo"); */
let soyExplicito = queTipoSoy<string>("Hola Mundo");
