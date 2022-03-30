/* Tipos básicos en Typescript */

// String | number
let nombre: string | number = "Santiago";
nombre = 1;
console.log(nombre);

// Boolean
let esVerdadero = true;
console.log(esVerdadero);

// Tuple
let tuple: [string, string, number] = ["1", "2", 3];
console.log(tuple);

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Red;
console.log(color);

// Array
let iniciales: (boolean | number | string)[] = ["S", "Q", "G", 1, true];
let numeros: number[] = [1, 2, 3];

// Interface
interface Personaje {
  nombre: string;
  edad: number;
  iniciales: string[];
  puebloNatal?: string;
}

// Objeto
const personaje: Personaje = {
  nombre: "Santiago",
  edad: 23,
  iniciales: ["S", "Q", "G"],
};

personaje.puebloNatal = "Aquitania";
