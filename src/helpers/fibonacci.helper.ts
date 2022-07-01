import { bignumber, BigNumber } from "mathjs";
const cache: any = {};

export const fibonnaci = (number): String => {
  if (cache.hasOwnProperty(number)) {
    return cache[number];
  }

  let root_5: number = Math.sqrt(5);
  let phi: number = (1 + root_5) / 2;
  let result: BigNumber = bignumber(phi)
    .pow(bignumber(number))
    .minus(bignumber(-phi).pow(bignumber(-number)))
    .dividedBy(root_5);

  cache[number] = result.toString();
  return result.toString();
};
