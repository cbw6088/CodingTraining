function solution(k, tangerine) {
  let dict = {};
  for (let value of tangerine) {
    dict[value] = (dict[value] || 0) + 1;
  }
  const mostNumSort = Object.values(dict).sort((a, b) => b - a);
  let total = 0;
  let types = 0;
  for (const num of mostNumSort) {
    if (total >= k) break;
    total += num;
    types++;
  }
  return types;
}
