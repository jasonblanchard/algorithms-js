import swap from 'utils/swap';

export default function sort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
      }
      j--;
    }
  }

  return array;
}
