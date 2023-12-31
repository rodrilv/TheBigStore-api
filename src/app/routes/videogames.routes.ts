import { router } from ".";
import { CreateVideogame } from "../endpoints";
import { auth, authMaster } from "../middlewares";

router
  .get("/videogames", auth)
  .post("/videogames", authMaster, CreateVideogame);
