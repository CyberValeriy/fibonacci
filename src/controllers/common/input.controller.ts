import { Response, NextFunction } from "express";
import { CommonService } from "../../services";

export const input = async (req, res: Response, next: NextFunction) => {
  const { number } = req.body;
  const ticket = await CommonService.input(number);
  res.status(201).json({ status: 201, payload: { ticket } });
};
