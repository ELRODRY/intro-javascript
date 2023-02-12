//Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const papasFritas = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola Mundo');
    },
  ];
};

const [nombre, setNombre] = papasFritas('Goku');

console.log(nombre);
setNombre();
