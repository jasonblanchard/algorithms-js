export default function (a1, a2) {
  const merged = [];

  while ((a1.length > 0) && (a2.length > 0)) {
    if (a1[0] < a2[0]) {
      merged.push(a1.shift());
    } else {
      merged.push(a2.shift());
    }
  }

  while (a1.length > 0) {
    merged.push(a1.shift());
  }

  while (a2.length > 0) {
    merged.push(a2.shift());
  }

  return merged;
}
