function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break; // 합이 n과 같아지면 바로 중단
      } else if (sum > n) {
        break; // 합이 n을 초과하면 중단
      }
    }
  }

  return count;
}
