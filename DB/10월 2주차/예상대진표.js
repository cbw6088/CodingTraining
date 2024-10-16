function solution(n, a, b) {
  let round = 0;

  // A와 B가 같아지면 경기 끝
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round += 1;
  }

  return round;
}
