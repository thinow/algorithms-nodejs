import calculate from './calculate';

describe('Calculator', () => {
  it('Undefined', () => expect(() => calculate(undefined)).toThrow());
  it('Empty', () => expect(() => calculate([])).toThrow());

  it('One digit', () => expect(calculate([1])).toBe(1));
});
