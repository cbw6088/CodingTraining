/**
 * 피보나치 수
 * https://programmers.co.kr/learn/courses/30/lessons/12945
 */
class Solution {
    public int solution(int n) {
        int[] dp = new int[n+1];
        dp[1] = 1;

        for (int i=2; i<=n; i++) {
            dp[i] = (dp[i-1] + dp[i-2])%1234567;
        }

        return dp[n];
    }
}