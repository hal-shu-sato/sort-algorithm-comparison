const binSort: SortFunc = (a, size) => {
  const count = { copy: 0 };

  const m = a.reduce((a, b) => Math.max(a, b), -Infinity);

  const head = new Array<number>(m);
  for (let i = 0; i < m; i++) {
    head[i] = -1;
  }

  const next = new Array<number>(size);
  for (let i = size - 1; i >= 0; i--) {
    const value = a[i];
    count.copy++;
    next[i] = head[value - 1];
    head[value - 1] = i;
  }

  const b = new Array<number>(size);
  let i = 0;
  for (let j = 0; j < m; j++) {
    let p = head[j];
    while (p !== -1) {
      count.copy++;
      b[i++] = a[p];
      p = next[p];
    }
  }

  for (let i = 0; i < size; i++) {
    count.copy++;
    a[i] = b[i];
  }

  console.log("コピー回数", count.copy);
};

export default binSort;
