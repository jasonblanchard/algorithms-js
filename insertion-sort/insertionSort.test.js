import sort from './insertionSort';

test('it sorts an array with unique values', () => {
  const output = sort([5, 10, 2, 4]);
  expect(output).toEqual([2, 4, 5, 10]);
});

test('it sorts an array with duplicate valuse', () => {
  const output = sort([2, 2, 9, 6, 6, 6, 10, 11, 11]);
  expect(output).toEqual([2, 2, 6, 6, 6, 9, 10, 11, 11]);
});
