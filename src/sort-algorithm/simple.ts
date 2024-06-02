import swap from "./swap";

const simpleSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
  };

  for (let i = 0; i < size - 1; i++) {
    for (let j = i + 1; j < size; j++) {
      count.compare++;
      if (array[i] > array[j]) {
        count.swap++;
        swap(array, i, j);
      }
    }
  }

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
};

export default simpleSort;
