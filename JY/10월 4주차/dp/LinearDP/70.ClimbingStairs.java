import java.util.*;

class Solution {
    static int MAX_VALUE = 45;
    public int climbStairs(int n) {

        int dp[] = new int[MAX_VALUE+1];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;

        for(int i=3; i<=n; i++){
            dp[i] = dp[i-1] + dp[i-2]; 
        }

        return dp[n];
    }
}