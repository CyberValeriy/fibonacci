import { Response, NextFunction } from "express";
import { CommonService } from "../../services";

export const output = async (req, res: Response, next: NextFunction) => {
  const { ticket } = req.params;
  const fibonacci = await CommonService.output(ticket);
  res.json({ status: 200, payload: { fibonacci } });
};
