const persona = {
  nombre: 'Tony',
  apellido: 'stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lgn: 349233321,
  },
};

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
