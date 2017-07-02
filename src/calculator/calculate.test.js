import calculate from './calculate';

describe('Calculator', () => {
  it('One digit', () => expect(calculate(['1'])).toBe(1));

  it('Simple sum', () => expect(calculate(['1', '+', '2'])).toBe(3));
  it('Simple minus', () => expect(calculate(['8', '-', '3'])).toBe(5));
  it('Simple times', () => expect(calculate(['3', '*', '5'])).toBe(15));
  it('Simple divide', () => expect(calculate(['8', '/', '2'])).toBe(4));

  it('2 additions', () => expect(calculate(['1', '+', '2', '+', '3'])).toBe(6));
  it('Mix', () => expect(calculate(['4', '/', '2', '-', '1'])).toBe(1));
});
