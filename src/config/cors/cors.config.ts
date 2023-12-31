import { Express, Request, Response, NextFunction } from "express";

export const CORS = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, token, x-access-token"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });
};
