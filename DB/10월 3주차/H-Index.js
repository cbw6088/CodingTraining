function solution(citations) {
  //가장 많이 된거 부터 정렬 (내림차순)
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }
  return h;
}
