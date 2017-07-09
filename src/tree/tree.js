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
    return { ...tree, value };
  }

  if (value < tree.value) {
    return { ...tree, left: insert(value, tree.left) };
  }

  return { ...tree, right: insert(value, tree.right) };
};

export const sort = ({ value, left, right } = {}, accumulator = {}) => {
  if (value === undefined) return accumulator;

  let newTree = accumulator;

  newTree = insert(value, newTree);
  newTree = sort(left, newTree);
  newTree = sort(right, newTree);

  return newTree;
};

export default { sort, insert, stringify };
