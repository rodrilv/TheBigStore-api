import { Response } from "express";
class Responders {
  OK(res: Response, status: number, code: string, message: string, data: any) {
    return res.status(status).json({
      ok: true,
      code,
      message,
      data,
    });
  }

  REJECT(res: Response, status: number, code: string, message: string) {
    console.warn(`⚠️[${code}]: ${message}`);
    return res.status(status).json({
      ok: false,
      code,
      message,
    });
  }

  ERROR(res: Response, code: string, error: any) {
    console.error(`⛔[${code}]: ${error}`);
    return res.status(500).json({
      ok: false,
      code,
      error: error.toString(),
    });
  }
}

export const { OK, REJECT, ERROR } = new Responders();
