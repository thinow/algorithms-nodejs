const radix = 10;

const int = left => parseInt(left, radix);

const operations = [
  { key: '+', then: (left, right) => left + right },
  { key: '-', then: (left, right) => left - right },
  { key: '*', then: (left, right) => left * right },
  { key: '/', then: (left, right) => left / right },
];

function compute(left, operator, right) {
  return operations
    .find(({ key }) => (key === operator))
    .then(int(left), int(right));
}

const calculate = ([left, operator, right, ...rest]) => {
  if (!operator) return int(left);

  const computed = compute(left, operator, right);
  return calculate([computed, ...rest]);
};

export default calculate;
