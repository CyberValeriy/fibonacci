import cacheRun from "../../utils/cache.util";

export const output = async (ticket: string) => {
  const cache = cacheRun();
  if (!cache.has(ticket)) {
    return "not found";
  }
  const result = cache.take(ticket);
  return result;
};
