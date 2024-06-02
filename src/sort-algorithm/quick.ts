import swap from "./swap";

function quick(
  array: number[],
  left: number,
  right: number,
  count: { compare: number; swap: number },
) {
  if (left >= right) return;

  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  do {
    count.compare++;
    while (array[i] < pivot) i++;
    count.compare++;
    while (array[j] > pivot) j--;
    if (i <= j) {
      count.swap++;
      swap(array, i, j);
      i++;
      j--;
    }
  } while (i <= j);
  quick(array, left, j, count);
  quick(array, i, right, count);
}

const quickSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
  };

  quick(array, 0, size - 1, count);

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
};

export default quickSort;
