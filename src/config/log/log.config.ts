import {Express,  Request, Response, NextFunction } from 'express'
class Logging {
  LOG_REQUEST = (app: Express) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
      console.info(
        "Server",
        `METHOD->[${req.method}], URL->[${req.url}] IP->[${req.socket.remoteAddress}]`
      );

      res.on("finish", () => {
        console.info(
          "Server",
          `METHOD->[${req.method}], URL->[${req.url}] IP->[${req.socket.remoteAddress}] STATUS->[${res.statusCode}]`
        );
      });

      next();
    });
  };

  log = (text: string, data?: any) => {
    console.log(text, data);
  };

  success = (text: string) => {
    console.info(`✅ ${text}`)
  }

  err = (text: string, error: any) => {
    console.error(`⛔ ${text}`, error);
  };
}

export const { LOG_REQUEST, log, err, success } = new Logging();
