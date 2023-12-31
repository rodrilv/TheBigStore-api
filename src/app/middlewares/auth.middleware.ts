import { Request, Response, NextFunction } from "express";
import jwt from "jwt-simple";
import { SERVER } from "../../config/environment";
import { REJECT, ERROR } from "../../config";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization ?? "";
    if (!token) return REJECT(res, 400, "UNAUTHORIZED", "Not a valid token");
    if (!SERVER.secret)
      return ERROR(res, "INTERNAL_ERROR", {
        reason: "server is not available",
      });

    jwt.decode(token, SERVER.secret, false, "HS256");
    return next();
  } catch (error) {
    return ERROR(res, "TOKEN_NOT_VALIDATED", error);
  }
};

export const token = () => {
  if (!SERVER.secret) {
    return false;
  }
  return jwt.encode({ client: "anon" }, SERVER.secret);
};
