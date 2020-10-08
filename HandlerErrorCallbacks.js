const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  console.log("ID: " + id);
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, callback);
}

obtenerPersonaje(1, function (person) {
    console.log(`Hola yo soy ${person.name} and my URL ${person.homeworld}`);
  obtenerPersonaje(2, function (person) {
    console.log(`Hola yo soy ${person.name} and my URL ${person.homeworld}`);
    obtenerPersonaje(7, function (person) {
    console.log(`Hola yo soy ${person.name} and my URL ${person.homeworld}`);
      obtenerPersonaje(10, function (person) {
    console.log(`Hola yo soy ${person.name} and my URL ${person.homeworld}`);

      });
    });
  });
});
