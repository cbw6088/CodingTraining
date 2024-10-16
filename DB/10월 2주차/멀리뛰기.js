function solution(n) {
  // dp 배열 생성, 크기는 n+1로 초기화
  let dp = new Array(n + 1).fill(0);

  // 기본값 설정
  dp[1] = 1; // 1칸에 도달하는 방법은 1가지
  if (n >= 2) dp[2] = 2; // 2칸에 도달하는 방법은 2가지

  // 점화식 적용
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  // n칸에 도달하는 방법의 수 반환
  return dp[n];
}
