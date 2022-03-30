/* Clases básicas */

/* class Heore {
  //private: la propiedad solo va a ser visible dentro de la clase
  private alterEgo: string;
  //public: la propiedad puede ser visible fuera de la clase, si no se pone nada, por defecto es public
  public edad: number;
  //static: puedo acceder al valor de la propiedad sin crear una instancia de la clase
  static nombreReal: string;
} */

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heore extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "NY, USA");
  }
}

const iroman = new Heore("Iroman", 45, "Tony Stark");
console.log(iroman);
