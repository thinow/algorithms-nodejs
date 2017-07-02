import assert from 'assert';

export default (array) => {
  assert.ok(array);
  assert.ok(array.length !== 0);

  return array[0];
};
