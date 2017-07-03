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
  if (tree.value === undefined) {
    tree.value = value;
  } else if (value < tree.value) {
    tree.left = insert(value, tree.left);
  } else {
    tree.right = insert(value, tree.right);
  }
  return tree;
};

export const sort = ({ value, left, right } = {}, accumulator = {}) => {
  if (value === undefined) return accumulator;

  insert(value, accumulator);
  sort(left, accumulator);
  sort(right, accumulator);

  return accumulator;
};

export default { sort, insert, stringify };
