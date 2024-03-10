// converts floating point number to integer
export const convertToInteger = (n: number) => {
  return parseInt((n * 100).toFixed(2), 10);
};

// converts integer to strings
export const convertNumberToString = (n: number) => {
  return n.toFixed(2);
};
