const { log2, floor } = Math;

export const findHighestBit = number => floor(log2(number));

export const range = (last, array = []) => {
  for (let index = 0; index <= last; index += 1) array.push(index);
  return array;
};

export const reversedRange = last => range(last).reverse();

const pow2 = power => 2 ** power;

export const findBits = (number) => {
  if (number === 0) return [];

  const availableBits = reversedRange(findHighestBit(number));

  const reduced = availableBits.reduce((accumulator, bit) => {
    const decimal = pow2(bit);

    if (decimal > accumulator.rest) return accumulator;

    const { rest, bits } = accumulator;
    return { rest: rest - decimal, bits: [bit, ...bits] };
  }, { rest: number, bits: [] });

  return reduced.bits;
};

export default {};
