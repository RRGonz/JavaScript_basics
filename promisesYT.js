let x = 10;
/*
const p = new Promise((resolve, reject) => {
    if (x == 10) {
        resolve('La variable es igual a 10');
    } else {
        reject('La Variable no es igual a 10');
    }
});

p.then(res =>{
    console.log('Succes: '+res);
})
.catch(error => {
    console.log('Error: '+error);
})*/

/*
 *Las el proceso principal se ejecuta y hasta que este termina es que se puede ejecutar el setTimeout
 */
/*
console.log('1. proceso iniciado...');

setTimeout(() => {
    x = x * 3 + 2;
    console.log('2. proceso terminado...');
}, 2000);

console.log('3. el resultado es: '+ x);
*/

/**
 * Ejemplo basico para ejecutar una promesa con setTimeout
 */
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        x = x * 3 + 2;
        console.log('2. proceso terminado...');
        resolve(x);
    }, 2000);
});

console.log('1. proceso iniciado...');

promesa.then(res => {
    console.log('3. el resultado es: '+ x);
});
*/

let usuarios = [
    {
        id: 1,
        nombre: 'Rommel'
    },
    {
        id: 2,
        nombre: 'Ramses'
    }
];

let telefonos = [
    {
        id: 1,
        nombre: 3411054313
    },
    {
        id: 2,
        nombre: 3411054316
    }
];

const obtenerUsuario = id =>{
    return new Promise((resolve, reject)=>{
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe');
            resolve(obtenerTelefono(id));
        }else {
            reject('El usuario no existe');
        }
    });
}

const obtenerTelefono = id =>{
    return new Promise((resolve, reject)=>{
        if(telefonos.find(telefono => telefono.id === id)){
            resolve('El telefono existe');
        }else {
            reject('El telefono no existe');
        }
    });
}

obtenerUsuario(1)
.then(res =>{
    return res;
})
.then(mensaje =>{
    console.log(mensaje);
})
.catch(error =>{
    console.error(error);
});

obtenerTelefono(10)
.then(res =>{
    console.log(res);
})
.catch(error =>{
    console.error(error);
})