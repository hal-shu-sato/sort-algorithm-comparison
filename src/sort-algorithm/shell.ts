import swap from "./swap";

const shellSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
  };

  let h = 1;
  while (h < size) {
    h = 3 * h + 1;
  }
  while (h > 1) {
    h = Math.floor(h / 3);
    for (let i = h; i < size; i++) {
      for (let j = i - h; j >= 0; j -= h) {
        count.compare++;
        if (array[j] > array[j + h]) {
          count.swap++;
          swap(array, j, j + h);
        } else {
          break;
        }
      }
    }
  }

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
};

export default shellSort;
