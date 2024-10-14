function solution(n) {
  //순간이동쓰려면 온 거리가 0이되면 안됨
  //n에서부터 2로 나누면서 거꾸로 이동 (홀수이면 점프했다는 것)
  let result = 1;
  while (n != 1) {
    if (n % 2 == 0) {
      n /= 2;
      continue;
    } else {
      result += 1;
      n = (n - 1) / 2;
      continue;
    }
  }
  return result;
}
