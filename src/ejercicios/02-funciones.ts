/* Funciones en Typescript */

function sumar(a: number, b: number, c?: number): number {
  return a + b;
}

const resultado = sumar(1, 2);

console.log(resultado);

// Objeto como argumento

interface PersonajeArg {
  nombre: string;
  ph: number;
  mostrarPH: () => void;
}

const personajeArg: PersonajeArg = {
  nombre: "Santiago",
  ph: 60,
  mostrarPH() {
    console.log(this.ph);
  },
};

function curar(personaje: PersonajeArg, puntos: number): void {
  personaje.ph += puntos;
  personaje.mostrarPH();
}

curar(personajeArg, 10);
