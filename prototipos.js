function Persona(nombre, apellido, altura) {
this.nombre = nombre;
this.apellido = apellido;    
this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} m`);
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

var rommel = new Persona('Rommel', 'Gonzalez', 1.85);
var ramses = new Persona('Ramses', 'Torrez', 1.76);


rommel
rommel.saludar();
rommel.soyAlto()

ramses
ramses.saludar()
ramses.soyAlto()