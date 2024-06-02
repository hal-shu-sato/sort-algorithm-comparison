import swap from "./swap";

function downHeap(
  array: number[],
  k: number,
  r: number,
  count: { compare: number; swap: number; copy: number },
) {
  const v = array[k];
  for (;;) {
    let j = k + k + 1;
    if (j > r) break;
    count.compare++;
    if (j !== r && array[j + 1] > array[j]) j++;
    count.compare++;
    if (v >= array[j]) break;
    array[k] = array[j];
    count.copy++;
    k = j;
  }
  count.copy++;
  array[k] = v;
}

const heapSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
    copy: 0,
  };

  for (let i = size - 1; i >= 0; i--) {
    downHeap(array, i, size - 1, count);
  }
  for (let i = size - 1; i > 0; i--) {
    count.swap++;
    swap(array, 0, i);
    downHeap(array, 0, i - 1, count);
  }

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
  console.log("コピー回数", count.copy);
};

export default heapSort;
