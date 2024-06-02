const countSort: SortFunc = (a, size) => {
  const copyCount = { copy: 0 };

  const m = a.reduce((a, b) => Math.max(a, b), -Infinity);

  const count = new Array<number>(m + 1).fill(0);
  for (let i = 0; i < size; i++) {
    count[a[i] - 1]++;
  }

  for (let i = 0; i < m; i++) {
    count[i + 1] += count[i];
  }

  const b = new Array<number>(size);
  for (let i = size - 1; i >= 0; i--) {
    const j = --count[a[i] - 1];
    copyCount.copy++;
    b[j] = a[i];
  }

  for (let i = 0; i < size; i++) {
    copyCount.copy++;
    a[i] = b[i];
  }

  console.log("コピー回数", copyCount.copy);
};

export default countSort;
