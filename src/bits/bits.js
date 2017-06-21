const { log2, floor } = Math;

export const pow2 = power => 2 ** power;

export const findHighestBit = number => floor(log2(number));

export const findBits = (number) => {
  let bit = findHighestBit(number);
  let rest = number;

  const result = [];

  while (bit >= 0) {
    const decimal = pow2(bit);

    if (decimal <= rest) {
      result.unshift(bit);
      rest -= decimal;
    }

    bit -= 1;
  }

  return result;
};

export default {};
