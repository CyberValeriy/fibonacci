import { fibonnaci } from "../../helpers/fibonacci.helper";
import cacheRun from "../../utils/cache.util";
import crypto from "crypto";

export const input = async (number: number) => {
  const result = fibonnaci(number);
  const ticket = crypto.randomUUID();
  const cache = await cacheRun();
  cache.set(ticket, result);
  return ticket;
};
