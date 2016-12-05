import merge from 'utils/merge';

export default function sort(array) {
  if (array.length < 2) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  let a1 = array.slice(0, middleIndex);
  let a2 = array.slice(middleIndex, array.length);

  a1 = sort(a1);
  a2 = sort(a2);

  return merge(a1, a2);
}
