import { insert, stringify } from './tree';

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

  describe('Insert', () => {
    it('Unique value', () => expect(stringify(insert(5))).toEqual('5'));

    it('Insert left', () => {
      // given
      const tree = { value: 10 };

      // then
      expect(stringify(insert(5, tree))).toEqual('5,10');
    });

    it('Insert 2nd level left', () => {
      // given
      const tree = { value: 10, left: { value: 5 } };

      // then
      expect(stringify(insert(1, tree))).toEqual('1,5,10');
    });

    it('Insert right', () => {
      // given
      const tree = { value: 10 };

      // then
      expect(stringify(insert(20, tree))).toEqual('10,20');
    });

    it('Insert 2nd level right', () => {
      // given
      const tree = { value: 10, right: { value: 20 } };

      // then
      expect(stringify(insert(30, tree))).toEqual('10,20,30');
    });
  });
});
