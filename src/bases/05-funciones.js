// Function en JS

/*const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};*/
//Funciones flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar2('ElRodry'));
console.log(saludar3('Ezequiel'));
console.log(saludar4());

const getUser = () => ({
  id: 'ABC123',
  Username: 'El-Informatico',
}); // poniendo los parentecis indicamos que hay un objeto implicito

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  id: 'ABC567',
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('ElRodry');
console.log(usuarioActivo);
