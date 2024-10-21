import java.util.*;

class Solution {
    static int maxValue = 100001;
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int dp[] = new int[maxValue];
        dp[0] = 0;
        dp[1] = 0;

        int minValue = prices[0];
        for (int i=2; i<=n; i++){
            // 현재 값이 최솟값보다 작은지 확인
            int todayPrice = prices[i-1];

            if (todayPrice < minValue){
                minValue = todayPrice;
            }
            dp[i] = Math.max(dp[i-1], (todayPrice-minValue));
        }
        return dp[n];
    }
}