class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;    
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} m`);
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
       super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
    }
}

var rommel = new Persona('Rommel', 'Gonzalez', 1.85);
rommel.saludar();

var ramses = new Desarrollador('Ramses', 'Torrez', 1.85)
ramses.saludar();