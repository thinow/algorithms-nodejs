const arrayOf = ({ value, left, right } = {}) => {
  if (value === undefined) return [];

  return [
    ...arrayOf(left),
    value,
    ...arrayOf(right),
  ];
};

export const stringify = tree => arrayOf(tree).join(',');

export const insert = (value, tree = {}) => {
  if (tree.value === undefined) return { value };

  if (value < tree.value) {
    return { ...tree, left: insert(value, tree.left) };
  }

  return { ...tree, right: insert(value, tree.right) };
};

export const sort = () => ({});

export default { sort, insert, stringify };
