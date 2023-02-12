import { getHeroesById } from './bases/08-imp-exp';

/*const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroesById(2);
    resolve(heroe);
    //reject('No se pudo encontrar el heroe');
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((arr) => console.warn(arr));*/

const getHeroesByIdsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      //resolve(heroe);
      //reject('No se pudo encontrar el heroe');
      if (heroe) {
        resolve(heroe);
      } else {
        reject('no se pudo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroesByIdsync(4)
  .then((heroe) => console.log(heroe))
  .catch((err) => console.warn(err));
