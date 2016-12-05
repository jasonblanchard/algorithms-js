import merge from './merge';

test('it merges two arrays in sort order', () => {
  const a1 = [14, 33];
  const a2 = [10, 27];
  const merged = merge(a1, a2);
  expect(merged).toEqual([10, 14, 27, 33]);
});

test('it merges two arrays in sort order when the arrays are different lengths', () => {
  const a1 = [14, 33, 45, 63];
  const a2 = [10, 27];
  const merged = merge(a1, a2);
  expect(merged).toEqual([10, 14, 27, 33, 45, 63]);
});
