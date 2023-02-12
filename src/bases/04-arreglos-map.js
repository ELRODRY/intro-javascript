//Arreglos en js

/*const arreglo = new Array(100);  se cero un arreglo con 100 
slots disponibles, esta es una de las ecepciones que un array 
lo creamos de esta forma*/

const arreglo = [1, 2, 3, 4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);
// no es recomendable usar el meto push ya que modifica el array original, se recomienda el metodo spread(...).

let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
}); // el map crea un nuevo arreglo

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
