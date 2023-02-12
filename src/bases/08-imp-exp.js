//import { heroes } from './data/heroes';

import heroes, { owners } from '../data/heroes';

export const getHeroesById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};
