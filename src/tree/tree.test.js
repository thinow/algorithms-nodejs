import { stringify, insert, sort } from './tree';

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
        left: { left: { value: 0 }, value: 1 },
        value: 2,
        right: { value: 3, right: { value: 4, right: {} } },
      };

      // then
      expect(stringify(tree)).toEqual('0,1,2,3,4');
    });
  });

  describe('Insert', () => {
    it('Unique value', () => {
      // when
      const tree = insert(5);
      // then
      expect(stringify(tree)).toEqual('5');
    });

    it('Insert left', () => {
      // given
      const tree = { value: 10 };
      // when
      const result = insert(5, tree);
      // then
      expect(stringify(result)).toEqual('5,10');
    });

    it('Insert 2nd level left', () => {
      // given
      const tree = { value: 10, left: { value: 5 } };

      // when
      const result = insert(1, tree);
      // then
      expect(stringify(result)).toEqual('1,5,10');
    });

    it('Insert right', () => {
      // given
      const tree = { value: 10 };
      // when
      const result = insert(20, tree);
      // then
      expect(stringify(result)).toEqual('10,20');
    });

    it('Insert 2nd level right', () => {
      // given
      const tree = { value: 10, right: { value: 20 } };
      // when
      const result = insert(30, tree);
      // then
      expect(stringify(result)).toEqual('10,20,30');
    });
  });

  describe('Sort', () => {
    it('Empty', () => expect(stringify(sort())).toEqual(''));

    it('Simple tree', () => {
      // given
      const tree = {
        value: 3,
        left: { value: 2 },
        right: { value: 1 },
      };

      // then
      expect(stringify(sort(tree))).toEqual('1,2,3');
    });

    it('Complex tree', () => {
      // given
      const tree = {
        left: { left: { value: 8 }, value: 1 },
        value: 7,
        right: { value: 4, right: { value: 3, right: {} } },
      };

      // then
      expect(stringify(sort(tree))).toEqual('1,3,4,7,8');
    });
  });
});
