const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain: true };


function obtenerPersonaje(id, callback) {
    console.log('ID: '+id);
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    
    $.get( url, opts, function (person) {
        console.log(person);
        console.log(`Hola yo soy ${person.name} and my URL ${person.homeworld}`);
        }
    )

    if (callback) {
        callback();
    }
}




obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(7, function () {
            obtenerPersonaje(10, function () {
                
            });
        });
    }); 
});


