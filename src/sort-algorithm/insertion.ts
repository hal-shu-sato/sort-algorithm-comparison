import swap from "./swap";

const insertionSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
  };

  for (let i = 1; i < size; i++) {
    for (let j = i - 1; j >= 0; j--) {
      count.compare++;
      if (array[j] <= array[j + 1]) break;
      count.swap++;
      swap(array, j, j + 1);
    }
  }

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
};

export default insertionSort;
