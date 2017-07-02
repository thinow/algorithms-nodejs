import calculate from './calculate';

describe('Calculator', () => {
  it('One digit', () => expect(calculate(['1'])).toBe(1));

  it('Simple addition', () => expect(calculate(['1', '+', '2'])).toBe(3));

  it('2 additions', () => expect(calculate(['1', '+', '2', '+', '3'])).toBe(6));
});
