export default function swap(array, i, j) {
  const v1 = array[i];
  array[i] = array[j];
  array[j] = v1;
}
