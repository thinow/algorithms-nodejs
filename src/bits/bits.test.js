import { findBits, findHighestBit, range, reversedRange } from './bits';

describe('Print bits', () => {
  describe('Ranges', () => {
    it('Normal', () => expect(range(3)).toEqual([0, 1, 2, 3]));
    it('Reversed', () => expect(reversedRange(5)).toEqual([5, 4, 3, 2, 1, 0]));
  });

  describe('Highest bit', () => {
    // firsts
    it('before one', () => expect(findHighestBit(1)).toBe(0));
    it('one', () => expect(findHighestBit(2)).toBe(1));

    it('before two', () => expect(findHighestBit(3)).toBe(1));
    it('two', () => expect(findHighestBit(4)).toBe(2));

    // around 3
    it('before three', () => expect(findHighestBit(7)).toBe(2));
    it('three', () => expect(findHighestBit(8)).toBe(3));
    it('after three', () => expect(findHighestBit(9)).toBe(3));

    // around 4
    it('before four', () => expect(findHighestBit(15)).toBe(3));
    it('four', () => expect(findHighestBit(16)).toBe(4));
    it('after four', () => expect(findHighestBit(17)).toBe(4));
  });

  describe('Array of bits', () => {
    it('zero', () => expect(findBits(0)).toEqual([]));
    it('one', () => expect(findBits(1)).toEqual([0]));
    it('two', () => expect(findBits(2)).toEqual([1]));
    it('three', () => expect(findBits(3)).toEqual([0, 1]));
    it('four', () => expect(findBits(4)).toEqual([2]));
    it('fifteen', () => expect(findBits(15)).toEqual([0, 1, 2, 3]));
  });
});
