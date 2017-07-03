import { stringify } from './tree';

describe('Tree', () => {
  describe('Print', () => {
    it('Empty', () => expect(stringify()).toEqual(''));

    it('Simple tree', () => {
      // given
      const tree = {
        value: 2,
        left: { value: 1 },
        right: { value: 3 },
      };

      // then
      expect(stringify(tree)).toEqual('1,2,3');
    });

    it('Complex tree', () => {
      // given
      const tree = {
        value: 2,
        left: { value: 1, left: { value: 0 } },
        right: { value: 3, right: { value: 4, right: {} } },
      };

      // then
      expect(stringify(tree)).toEqual('0,1,2,3,4');
    });
  });
});
