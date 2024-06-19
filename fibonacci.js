function fibs(n) {
  let list = [0, 1];
  for (let i = 2; i < n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }

  return list;
}

function fibsRec(n) {
  if (n < 2) return [0, 1];

  let list = fibsRec(n - 1);
  list.push(list[list.length - 1] + list[list.length - 2]);
  return list.length > n ? list.slice(0, n) : list;
}
