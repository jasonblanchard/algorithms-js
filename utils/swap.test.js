import swap from './swap';

test('it swaps values in an array', () => {
  const array = [1, 2, 3];
  swap(array, 0, 1);
  expect(array).toEqual([2, 1, 3]);
});
