const activo = true;

/* forma tradicional condicional
let mensaje = '';

if (activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
} */

/* forma ternario tradicional
const mensaje = activo ? 'Activo' : 'inactivo'; */
// forma corta del ternario y del if
const mensaje = activo && 'Acativo';

console.log(mensaje, 'ok');
