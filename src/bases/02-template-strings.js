const nombre = 'Rodrigo';
const apellido = 'Olivares';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
  return 'Hola ' + nombre + ' ' + apellido;
}

console.log(`este es un texto: ${getSaludo(nombre, apellido)}`);
