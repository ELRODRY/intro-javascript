// Desestructuraion
// Asignacion Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

/* Forma tradicional
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/

//     Asignacion Desestructurante
//const { edad, clave, nombre } = persona;

//console.log(edad, clave, nombre);

const userContext = ({ nombre, edad, clave, rango = 'capitan' }) => {
  //console.log(edad, nombre, clave, rango);  Esto muestra la consola // consola: 45 'Tony' 'Ironman' 'capitan'

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3265,
      lng: 69.3399,
    },
  };
};
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = userContext(persona); // latlng: {lat, lng} ahora estas propiedades pasan a ser const
console.log(nombreClave, anios);
console.log(lat, lng);

// En esta funcion se Desestructura directamente en los parametros
//y se pone como argumento las propiedades del objeto
// se puede agregar otro argumento y definirlo ahi mismo
