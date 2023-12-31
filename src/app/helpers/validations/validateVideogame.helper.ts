import { IVideogame } from "../../models";

export const validateVideogame = (videogame: IVideogame) => {
  if (!videogame.image) {
    return false;
  }

  if (!videogame.platform) {
    return false;
  }

  if (!videogame.price) {
    return false;
  }

  if (!videogame.state) {
    return false;
  }

  if (!videogame.stock) {
    return false;
  }

  if (!videogame.tags) {
    return false;
  }

  if (!videogame.title) {
    return false;
  }

  return true;
};
