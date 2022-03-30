/* Encadenamiento opcional */

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Denny",
};

const pasajero2: Pasajero = {
  nombre: "Santiago",
  hijos: ["Matt", "Sofía"],
};

function imprimirHijos(pasajero: Pasajero): void {
  const cantidadHijos = pasajero.hijos?.length || 0;
  console.log(cantidadHijos);
}

imprimirHijos(pasajero1);
