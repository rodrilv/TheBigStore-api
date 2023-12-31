import { Request, Response, NextFunction } from "express";
import jwt from "jwt-simple";
import { SERVER } from "../../config/environment";
import { REJECT, ERROR } from "../../config";

export const authMaster = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization ?? "";
    if (!token) return REJECT(res, 400, "UNAUTHORIZED", "Not a valid token");
    if (!SERVER.master)
      return ERROR(res, "INTERNAL_ERROR", {
        reason: "server is not available",
      });

    jwt.decode(token, SERVER.master, false, "HS256");
    return next();
  } catch (error) {
    return ERROR(res, "TOKEN_NOT_VALIDATED", error);
  }
};

export const masterToken = () => {
  if (!SERVER.master) {
    return false;
  }
  return jwt.encode({ client: "admin" }, SERVER.master);
};
