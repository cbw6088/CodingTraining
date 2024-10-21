function solution(elements) {
  // 숫자의 조합, 순서는 바꾸지 못함
  // 부분 수열의 최대 길이 elements.length-1
  let arr = new Set();
  let order = 1;
  let answer = 0;
  while (order <= elements.length) {
    for (let i = 0; i < elements.length; i++) {
      let sum = 0;
      for (let j = 0; j < order; j++) {
        // 원형 배열처럼 처리하기 위해 (i + j) % elements.length 사용
        sum += elements[(i + j) % elements.length];
      }
      arr.add(sum);
    }
    order++;
  }

  return arr.size;
}
