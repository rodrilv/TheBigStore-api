import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { OK, REJECT, ERROR } from "../../../config";
import { SERVER } from "../../../config/environment";
import { token, masterToken } from "../../middlewares";
export const Login = async (req: Request, res: Response) => {
  if (!req.body) {
    const client = token();
    if (!client) {
      return ERROR(res, "INTERNAL_SERVER_ERROR", {
        reason: "SERVICE UNAVAILABLE",
      });
    }
    return OK(res, 200, "LOGIN", "OK", {
      token: token(),
    });
  } else {
    const { username, password } = req.body;

    if (username !== SERVER.user["username"]) {
      return REJECT(
        res,
        400,
        "INCOMPLETE_LOGIN",
        "Must login with credentials"
      );
    }

    const hash = await bcrypt.hash(SERVER.user["password"], 12);
    const validation = await bcrypt.compareSync(password, hash);

    if (!validation) {
      return REJECT(
        res,
        400,
        "INCOMPLETE_LOGIN",
        "Must log-in with credentials"
      );
    }

    return OK(res, 200, "LOGIN", "Inicio de Sesión correcto", {
      token: masterToken(),
    });
  }
};
