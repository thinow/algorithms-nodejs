const arrayOf = ({ value, left, right } = {}) => {
  if (value === undefined) return [];

  return [
    ...arrayOf(left),
    value,
    ...arrayOf(right),
  ];
};

export const stringify = tree => arrayOf(tree).join(',');

export default { stringify };
