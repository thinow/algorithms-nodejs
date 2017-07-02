const radix = 10;

const int = left => parseInt(left, radix);

const calculate = ([left, operator, right, ...rest]) => {
  if (!operator) return int(left);

  const computed = int(left) + int(right);
  return calculate([computed, ...rest]);
};

export default calculate;
