import { Request, Response } from "express";
import { createVideogame } from "../../controllers/Videogame";
import { ERROR, OK, REJECT } from "../../../config";
import { validateVideogame } from "../../helpers";

export const CreateVideogame = (req: Request, res: Response) => {
  try {
    const videogame = req.body;
    if (!validateVideogame(videogame)) {
      return REJECT(
        res,
        400,
        "INVALID_VIDEOGAME",
        "Uno más campos del videojuego están vacíos"
      );
    }
    const createdVideogame = createVideogame(videogame);

    if (!createdVideogame) {
      return REJECT(
        res,
        400,
        "VIDEOGAME_NOT_CREATED",
        "No se pudo dar de alta el videojuego!"
      );
    }

    return OK(
      res,
      201,
      "VIDEOGAME_CREATED",
      "Se dió de alta el videojuego",
      createdVideogame
    );
  } catch (error) {
    return ERROR(res, "VIDEOGAME_CREATE_ERROR", error);
  }
};
