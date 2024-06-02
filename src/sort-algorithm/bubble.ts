import swap from "./swap";

const bubbleSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
  };

  for (let i = 0; i < size - 1; i++) {
    for (let j = size - 1; j > i; j--) {
      count.compare++;
      if (array[j - 1] > array[j]) {
        count.swap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
};

export default bubbleSort;
