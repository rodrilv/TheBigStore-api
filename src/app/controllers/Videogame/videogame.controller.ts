import { genId } from "../../helpers";
import { Videogame } from "../../models";
import { IVideogame } from "../../models/Videogames/videogames.interface";

class VideogameController {
  async createVideogame(videogame: IVideogame) {
    return await new Videogame({ _id: genId(), ...videogame }).save();
  }
}

export const { createVideogame } = new VideogameController();
