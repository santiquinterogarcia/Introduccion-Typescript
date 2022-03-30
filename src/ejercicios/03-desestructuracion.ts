/* Desestructuración de un objeto */
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

const {
  volumen,
  segundo,
  cancion,
  detalles: { autor, anio },
} = reproductor;

/* Desestructuración de un objeto */
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = dbz;
console.log("Personaje 3:", p3);

/* Desestructuración de argumento en una función */
export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Realme 7 pro",
  precio: 1000,
};

const tableta: Producto = {
  desc: "iPad",
  precio: 2000,
};

export function calculaISV(productos: Producto[]): number[] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.19];
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);
console.log(total, isv);
