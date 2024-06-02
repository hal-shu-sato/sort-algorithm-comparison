function merge(
  from: number[],
  into: number[],
  length: number,
  size: number,
  count: { compare: number; copy: number },
) {
  let start = 0;
  while (start < size) {
    let i = start;
    let j = start + length;
    let k = start;
    const iEnd = Math.min(start + length, size);
    const jEnd = Math.min(start + length + length, size);
    while (i < iEnd && j < jEnd) {
      count.compare++;
      if (from[i] <= from[j]) {
        count.copy++;
        into[k++] = from[i++];
      } else {
        count.copy++;
        into[k++] = from[j++];
      }
    }
    while (i < iEnd) {
      count.copy++;
      into[k++] = from[i++];
    }
    while (j < jEnd) {
      count.copy++;
      into[k++] = from[j++];
    }
    start += length + length;
  }
}

const mergeSort: SortFunc = (a, size) => {
  const count = {
    compare: 0,
    copy: 0,
  };

  const b = new Array<number>(size);
  let length = 1;
  while (length < size) {
    merge(a, b, length, size, count);
    merge(b, a, 2 * length, size, count);
    length *= 4;
  }

  console.log("比較回数", count.compare);
  console.log("コピー回数", count.copy);
};

export default mergeSort;
