import swap from "./swap";

const selectionSort: SortFunc = (array, size) => {
  const count = {
    compare: 0,
    swap: 0,
  };

  for (let i = 0; i < size - 1; i++) {
    let minPos = i;
    for (let j = i + 1; j < size; j++) {
      count.compare++;
      if (array[j] < array[minPos]) {
        minPos = j;
      }
    }
    count.swap++;
    swap(array, i, minPos);
  }

  console.log("比較回数", count.compare);
  console.log("交換回数", count.swap);
};

export default selectionSort;
