class Persona{
    constructor(nombre, apellido, altura, genero){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        this.genero = genero
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    soyAltX(){
        var altX = this.genero == 'masculino' ? 'alto' : 'alta'
        var string = this.altura >= 1.8 ? `Soy ${this.nombre} ${this.apellido} y definitivamente soy ${altX}.` 
                        : `Soy ${this.nombre} ${this.apellido} y no, no soy ${altX}.`
        console.log(string)
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy dev.`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}.`)
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras dev.`)
    }
}

var pablo = new Persona('Pablo', 'Andrés', 1.78, 'masculino')
var joaquin = new Desarrollador('Joaquín', 'Perez', 1.91, 'masculino')
var rosa = new Persona('Rosa', 'Mosqueta', 1.81, 'femenino')
var elis = new Persona('Elis', 'Detta', 1.73, 'femenino')

pablo.saludar()
joaquin.saludar(responderSaludo)
rosa.saludar(responderSaludo)
elis.saludar(responderSaludo)